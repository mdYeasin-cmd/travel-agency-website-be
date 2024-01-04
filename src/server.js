const app = require("./app");
const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
    config.database_name,
    config.database_user_name,
    config.database_user_password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

const port = config.port;

async function server() {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");

        app.listen(port, () => {
            console.log(
                `Tours and travells agency website listening on port ${port}`
            );
        });
    } catch (error) {
        console.log(error);
    }
}

server().catch((error) => console.log(error));
