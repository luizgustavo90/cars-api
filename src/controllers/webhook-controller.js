class WebhookController {

    static webhookProcessor = async (queueMessage) => {
        try{
            let payloadWebhook = { message: "Car was created sucessfully!", carId: queueMessage.carId}
            let responseWebhook = await axios.post(queueMessage.urlCallback, payloadWebhook)
         

            } catch (err){
                return returnModelError(res,err)
            }

    }
}