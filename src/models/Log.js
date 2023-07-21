import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
    {
        data_hora: {type: String, required: true},
        car_id: {type: Object, required: true}

    }

)
const log = mongoose.model('logs',logSchema,'logs')

export default log