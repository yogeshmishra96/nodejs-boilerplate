const { dbConnection } = require("../../DB/database.service");

const getServerLogging = async (req) => {
    const { server_logging: serverLogging } = dbConnection.default;
    const result = await serverLogging.findAll();
    return res.status(200).send({ result });

};

const createServerLog = async (req, res) => {
    const { server_logging: serverLogging } = dbConnection.default;
    await serverLogging.create(req.body);
    return res.status(200).send({ message: "Server Log is created successfully!" });
}

module.exports = {
    createServerLog,
    getServerLogging
};
