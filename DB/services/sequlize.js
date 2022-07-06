const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const { getSequalizeIns } = require("./run-migration-seeders");

module.exports = async function () {
    const sequelize = await getSequalizeIns();
    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    const modelPath = path.join(process.cwd(), "/DB/models");

    // loop through all files in models directory
    fs.readdirSync(modelPath)
        .forEach(function (file) {
            const model = require(path.join(modelPath, file))(sequelize, Sequelize.DataTypes);
            db[model.name] = model;
        });

    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].options && db[modelName].options.hasOwnProperty("associate")) {
            db[modelName].options.associate(db);
        }
    });
    return db;
};
