function returnModelCreatedCar(res, id) {
    return res.status(200).json({
        statusCode: 200,
        body: "Car was created",
        detail: `Car was created, Log of car's ID: ${id} was created on database! `
    })
}

function returnModelCarsList(res, response) {
    return res.status(200).json(response.data)
}

function returnModelLogsList(res, response) {
    return res.status(200).json(response)
}


async function returnModelError(res, err) {
    return res.status(err.status).json({
        statusCode: err.status,
        body: err.message,
        detail: err.detail
    })
 } 

 async function returnModelValidation (param){
    return res.status(404).json({
        statusCode: 404,
        body: "Not Found",
        detail: `Is missing information, parameter: ${param}`
    })
 }



export {returnModelCreatedCar,returnModelCarsList, returnModelError,returnModelValidation, returnModelLogsList}