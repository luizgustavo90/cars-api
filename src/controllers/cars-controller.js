import axios from "axios"
import dotenv from 'dotenv'
import LogController from "./logs-controller.js"

dotenv.config()

class CarsController {
    static carsList = async (req,res) => {

        try{
        const response = await axios.get(`${process.env.API_CARS}/api/cars`)        
        return res.status(200).json(response.data)

        } catch (err){
            return res.status(err.status).json(err.message)
        }

    }

    static createCar = async (req,res) => {
        try{
            let newCar = {
                title: req.body.title,
                brand: req.body.brand,
                price: req.body.price,
                age: req.body.age
            }
            await axios.post(`${process.env.API_CARS}/api/createCar`, newCar)
            LogController.insertLog(newCar._id)

            return res.status(200).json({message: "Car was created!"})            

            } catch (err){
                return res.status(err.status).json(err.message)
            }

    }
}

export default CarsController