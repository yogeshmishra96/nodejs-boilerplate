module.exports = function (sequelize, DataTypes) {
    const autoUpdate = sequelize.define('server_logging',
        {
            id: {
                type: DataTypes.UUID,
                field: 'id',
                primaryKey: true,
                unique: true,
                defaultValue: DataTypes.UUIDV4
            },
            module: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        });
    return autoUpdate;
};