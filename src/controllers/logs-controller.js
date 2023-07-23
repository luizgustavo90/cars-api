import logs from "../models/Log.js"
import { returnModelError, returnModelLogsList } from "../helpers/return-models.js"
import log from "../models/Log.js"

class LogController {

    static insertLog = async (res,id) => {
        try {
            let data_hora = new Date().toISOString()
            let newLog = new logs({data_hora: data_hora, car_id: id})

            newLog.save()
            return res.status(200)

        } catch (err) {
            returnModelError(res,err)
        }
    }

    static logList = async (req, res) => {
        try {
            const logsResult = await log.find()
            return returnModelLogsList(res, logsResult)

        } catch (err) {
            returnModelError(res,err)
        }
    }

}

export default LogController