const { throwIf } = require("../../services/thow-error-class");
const { BaseError } = require("../../services/error-class");

const createServerLogs = async (req) => {
    // throwIf(true, new BaseError(404, "Server log create Error Testing"));
    return { message: "Server log is created successfully" };
};


module.exports = {
    createServerLogs
};
