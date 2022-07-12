const createUser = async (req) => {
    console.log('>nodejs-postgres-boilerplate | [users.controller.js] > #2 | req.body : ', req.body);
    return { message: "User is created successfully!" };
};

module.exports = {
    createUser
};
