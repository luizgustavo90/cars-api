import axios from 'axios'

class WebhookController {

    static webhookProcessor = async (queueMessage) => {
        try{
            console.log("entrando no webhook")
            let payloadWebhook = { message: "Car was created sucessfully!", carId: queueMessage.carId}
            let responseWebhook = await axios.post(queueMessage.urlCallback, payloadWebhook)
            console.log("Webhook enviado", responseWebhook.status)
            
            } catch (err){
                console.log("erro webhook", err)
                return err
            }

    }
}

export default WebhookController