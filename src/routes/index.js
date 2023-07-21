import express from 'express'
import car from './carsRoute.js'
import log from './logsRoute.js'

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "cars-api is working"})
    })

    app.use(
        express.json(),
       car,
       log
       
    )
}

export default routes