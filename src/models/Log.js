import mongoose from "mongoose"

const logSchema = new mongoose.Schema(
    {        
        data_hora: {type: String, required: true},
        car_id: {type: String, required: true}

    }

)
const logs = mongoose.model('logs',logSchema,'logs')

export default logs