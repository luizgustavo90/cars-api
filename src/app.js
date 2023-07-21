import express from "express"
import db from "./config/db.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Error in Connection!"))
db.once("open", () => {
    console.log("database -> Connected successfully!")
})
const app = express()

app.use(express.json())

routes(app)

export default app