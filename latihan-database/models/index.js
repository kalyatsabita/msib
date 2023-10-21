const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
        dbConfig.DATABASE,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
            host: dbConfig.HOST,
            dialect: dbConfig.DIALECT,
            port: dbConfig.PORT,
            define: {
                timestamps: false,
                freezeTableName: true
            },
            logging: true
        }
    );
const db = {};

// const sequelize = new Sequelize(
//     dbConfig.DATABASE,
//     dbConfig.USER,
//     dbConfig.PASSWORD,
//     {
//         host: dbConfig.HOST,
//         dialect: dbConfig.dialect
//     }
// )

db.Sequelize = Sequelize
db.sequelize = sequelize

// const USER = require("./user.model") (sequelize, Sequelize.DataTypes)
// db.USER = USER

db.userModel = require("./user.model.js")(sequelize, Sequelize);
// db.deviceModel = require("./device.model.js")(sequelize, Sequelize);
// db.deviceDataModel = require("./device-data.model.js")(sequelize, Sequelize);
const Perangkat = require("./perangkat.model") (sequelize, Sequelize.DataTypes);
db.Perangkat;


module.exports = db;

// const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD,
//     {
//         host: dbConfig.HOST,
//         dialect: dbConfig.DIALECT,
//         port: dbConfig.PORT,
//         define: {
//             timestamps: false,
//             freezeTableName: true
//         },
//         logging: true
//     }
// );

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.userModel = require("./user.model.js")(sequelize, Sequelize);
// db.deviceModel = require("./device.model.js")(sequelize, Sequelize);
// db.deviceDataModel = require("./device-data.model.js")(sequelize, Sequelize);

// module.exports = db;