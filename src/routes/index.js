import express from 'express'
import carList from './carsRoute.js'
import insertLog from './logsRoute.js'

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "cars-api is working"})
    })

    app.use(
        express.json(),
       carList,
       insertLog
       
    )
}

export default routes