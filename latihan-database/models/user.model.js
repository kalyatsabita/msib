// const {DataTypes} = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.STRING
        },
    });

    return User;
}

// module.exports = (sequelize, DataTypes) => {
//     const USER = sequelize.define('users', {
//         id: {
//             type: DataTypes.BIGINT,
//             primaryKey : true
//         },
//         name: {
//             type: DataTypes.STRING
//         },
//         email: {
//             type: DataTypes.STRING
//         },
//         alamat: {
//             type: DataTypes.STRING
//         }
//     })

//     return USER
// }

// module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define("users", {
//         id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false,
//         },
//         name: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         address: {
//             type: Sequelize.STRING
//         },
//     });

//     return User;
// }