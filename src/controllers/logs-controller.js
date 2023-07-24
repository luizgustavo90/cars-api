import logs from "../models/Log.js"
import { returnModelError, returnModelLogsList } from "../helpers/return-models.js"
import log from "../models/Log.js"

class LogController {

    static insertLog = async (res, id) => {
        try {
            console.log("Starting LogController.insertLog -")
            let data_hora = new Date().toISOString()
            let newLog = new logs({ data_hora: data_hora, car_id: id })

            newLog.save()
            console.log("Finishing LogController.insertLog -", newLog)
            return res.status(200)

        } catch (err) {
            console.log("Finishing LogController.insertLog with an Error -", err)
            returnModelError(res, err)
        }
    }

    static logList = async (req, res) => {
        try {
            console.log("Starting LogController.logList -")
            const logsResult = await log.find()
            console.log("Finishing LogController.logList -")
            return returnModelLogsList(res, logsResult)

        } catch (err) {
            console.log("Finishing LogController.logList with an Error -", err)
            returnModelError(res, err)
        }
    }

}

export default LogController