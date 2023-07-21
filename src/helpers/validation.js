import {returnModelValidation} from './return-models.js'

function validate(req) {
    let error = {}
    if (!req.body) {
        error = returnModelValidation('All parameters')
        throw error
    }
    else if (!req.body.title) {
        error = returnModelValidation('Title')
        throw error

    }
    else if (!req.body.brand) {
        error = returnModelValidation('Brand')
        throw error
    }
    else if (!req.body.price) {
        error = returnModelValidation('Price')
        throw error
    }
    else if (!req.body.age) {
        error = returnModelValidation('Age')
        throw error
    }
}

export default validate