import express from "express"
import getrepo from "./routes/get.js"
import sequelize from "./utils/database.js"
import sqlmodel from './models/sqlmodel.js';
import cors from 'cors'


const PORT = process.env.PORT || 5501

const app = express()

app.use(express.json())
app.use(cors())
app.use('/get', getrepo)

sqlmodel.sync()


async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server run on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}



start()
