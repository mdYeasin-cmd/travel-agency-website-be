const path = require("path");

require("dotenv").config({
    path: path.join(process.cwd(), ".env"),
});

module.exports = {
    node_env: process.env.NODE_ENV,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT,
    database_name: process.env.DATABASE_NAME,
    database_user_name: process.env.DATABASE_USER_NAME,
    database_user_password: process.env.DATABASE_USER_PASSWORD,
};
