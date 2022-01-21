const res = require("express/lib/response")

module.exports = (sequelize, type) => {
    return sequelize.define('departement', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        departementName: type.STRING,
    })
    
}