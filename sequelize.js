const Sequelize = require('sequelize')
const DepartementModel = require('./models/departement')
const UserModel = require('./models/user')
const {DATABASE_NAME,USERNAME,PASSWORD,HOST,DIALECT} =require('./constants')
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const User = UserModel(sequelize, Sequelize)
const Departement = DepartementModel(sequelize, Sequelize)

// Departement has Many users
Departement.hasMany(User)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  })

module.exports = {
  Departement,
  User,
}