import axios from "axios"
import dotenv from 'dotenv'
import LogController from "./logs-controller.js"
import validate from "../helpers/validation.js"
import { returnModelCarsList, returnModelCreatedCar, returnModelError } from "../helpers/return-models.js"
import ServiceBusMessage from "../infra/queue.js"


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
            let newCar = await axios.post(`${process.env.API_CARS}/api/cars`, car)
            await LogController.insertLog(res, newCar.data._id)
            const payLoadQueue = {
                body: {
                    carId: newCar.data._id,
                    urlCallback: req.headers["x-callback-url"]
                }
            }
            await ServiceBusMessage.sendMessage(payLoadQueue)

            return returnModelCreatedCar(res, newCar.data._id)

        } catch (err) {
            return returnModelError(res, err)
        }

    }
}

export default CarsController