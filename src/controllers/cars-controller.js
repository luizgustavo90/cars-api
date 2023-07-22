import axios from "axios"
import dotenv from 'dotenv'
import LogController from "./logs-controller.js"
import validate from "../helpers/validation.js"
import { returnModelCarsList, returnModelCreatedCar, returnModelError } from "../helpers/return-models.js"
import ServiceBusMessage from "../infra/queue.js"
import WebhookController from "./webhook-controller.js"


dotenv.config()

class CarsController {
    static carsList = async (req, res) => {

        try {
            const response = await axios.get(`${process.env.API_CARS}/api/cars`)
            return returnModelCarsList(res, response)

        } catch (err) {
            return returnModelError(res, err)
        }

    }

    static createCar = async (req, res) => {
        try {
            validate(req)
            let car = {
                title: req.body.title,
                brand: req.body.brand,
                price: req.body.price,
                age: req.body.age
            }
            console.log("headers:", req.headers)
            let newCar = await axios.post(`${process.env.API_CARS}/api/cars`, car)
            console.log("postou o carro***")
            await LogController.insertLog(res, newCar.data._id)
            console.log("inseriu o log****")
            const payLoadQueue = {
                body: {
                    carId: newCar.data._id,
                    urlCallback: req.headers["x-callback-url"]
                }
            }
            console.log("vai enviar pra fila**", payLoadQueue)
            await ServiceBusMessage.sendMessage(payLoadQueue)
  
            console.log("finalziado***")
            return returnModelCreatedCar(res, newCar.data._id)

        } catch (err) {
            console.log("erro-->", err)
            return returnModelError(res, err)
        }

    }
}

export default CarsController