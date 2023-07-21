import log from "../models/Log.js"

class LogController {

    static insertLog = async (car_id) => {
        try {
            let date = new Date()
            let newLog = new log(car_id,date)
            newLog.save()
            return res.status(200).json({message:`Log of car ID: ${car_id} was created!`})
        }
        catch (err) {

        }
    }

    static logList = async (req,res) =>{

    }

}

export default LogController