import  Sequelize  from "sequelize"
import sequelize from "../utils/database.js"

const data = sequelize.define('Repo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    starcount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    link:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default data
