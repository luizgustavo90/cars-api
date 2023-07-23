import express from "express"
import db from "./config/db.js"
import routes from "./routes/index.js"
import queue from './infra/queue.js'

db.on("error", console.log.bind(console, "Error in Connection!"))
db.once("open", () => {
    console.log("Database connected successfully!")
})
const app = express()

app.use(express.json())

routes(app)
queue.readMessage()


export default app