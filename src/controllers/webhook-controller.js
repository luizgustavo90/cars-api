import axios from 'axios'

class WebhookController {

    static webhookProcessor = async (queueMessage) => {
        try {
            console.log("Starting WebhookController.webhookProcessor -", req)
            let payloadWebhook = { message: "Car was created sucessfully!", carId: queueMessage.carId }
            let responseWebhook = await axios.post(queueMessage.urlCallback, payloadWebhook)
            console.log("Finishing WebhookController.webhookProcessor -", responseWebhook)

        } catch (err) {
            console.log("Finishing WebhookController.webhookProcessor with an Error -", err)
            return err
        }

    }
}

export default WebhookController