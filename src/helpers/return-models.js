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
    return res.status(err.status).json(notFound(err))
    }
 

 function returnModelValidation (param){
    return {
        status: 404,
        body: "Not Found",
        detail: `Is missing information, parameter: ${param}`
    }
 }

 export const notFound = (error) => ({
    statusCode: error.status,
    body: error.message,
    detail: error.detail
})



export {returnModelCreatedCar,returnModelCarsList, returnModelError,returnModelValidation, returnModelLogsList}