module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.UUID,
                field: "id",
                primaryKey: true,
                unique: true,
                defaultValue: DataTypes.UUIDV4
            },
            firstName: {
                type: DataTypes.STRING,
                field: "first_name"
            },
            lastName: {
                type: DataTypes.STRING,
                field: "last_name"
            },
            email: {
                type: DataTypes.STRING
            },
            cellPhone: {
                type: DataTypes.STRING,
                field: "cell_phone"
            },
            password: {
                type: DataTypes.STRING
            },
            profilePic: {
                type: DataTypes.STRING,
                field: "profile_pic"
            }
        }
    );
    return users;
};