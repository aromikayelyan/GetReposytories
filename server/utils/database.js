import Sequelize from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const NAME = process.env.MYSQL_NAME
const USER = process.env.MYSQL_USER
const PASSWORD =  process.env.MYSQL_PASSWORD


const sequelize = new Sequelize(NAME, USER , PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})


export default sequelize