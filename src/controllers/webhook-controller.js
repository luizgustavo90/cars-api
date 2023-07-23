import axios from 'axios'

class WebhookController {

    static webhookProcessor = async (queueMessage) => {
        try{
            console.log("Starting webhook processor")
            let payloadWebhook = { message: "Car was created sucessfully!", carId: queueMessage.carId}
            let responseWebhook = await axios.post(queueMessage.urlCallback, payloadWebhook)
            console.log("Webhook processor finished", responseWebhook.status)
            
            } catch (err){
                console.log("erro webhook", err)
                return err
            }

    }
}

export default WebhookController