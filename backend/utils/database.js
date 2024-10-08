import Sequelize from "sequelize";

// запишите в пустых кавычках данные базы данных
const NAME = '' // имя схемы 
const USER = '' // имя пользователя
const PASSWORD = '' // пароль 


const sequelize = new Sequelize(NAME, USER , PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})


export default sequelize