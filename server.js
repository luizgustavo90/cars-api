import app from './src/app.js'
const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("")
    console.log(`Server listening ! http://localhost:${port}`)
    console.log("")
    console.log("**********************************************************")
    console.log(`[GET] listCars - http://localhost:${port}/api/listCars `)
    console.log(`[POST] createCar - http://localhost:${port}/api/createCar `)
    console.log(`[GET] logs - http://localhost:${port}/api/logs `)
    console.log("**********************************************************")
    console.log("")
})