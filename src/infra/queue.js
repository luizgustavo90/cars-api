import * as sb from "@azure/service-bus"
import dotenv from 'dotenv'
import WebhookController from "../controllers/webhook-controller.js"


dotenv.config()

class ServiceBusMessage {

    static sendMessage = async (messageQueue) => {
        try {
            const connectionString = process.env.SERVICEBUS_CONNECTION_STRING
            const serviceBus = new sb.ServiceBusClient(connectionString)
            const sender = serviceBus.createSender("cars-api-message-sb")
            await sender.sendMessages(messageQueue)


        } catch (err) {
            return err

        }
    }

    static readMessage = async () => {
        try {
            const connectionString = process.env.SERVICEBUS_CONNECTION_STRING
            const serviceBus = new sb.ServiceBusClient(connectionString)
            const receiver = serviceBus.createReceiver("cars-api-message-sb")

            const myMessageHandler = async (messageReceived) => {
                await WebhookController.webhookProcessor(messageReceived.body)
                console.log(`Received message: ${messageReceived.body}`);
            };

            const myErrorHandler = async (error) => {
                console.log(error);
            };

            receiver.subscribe({
                processMessage: myMessageHandler,
                processError: myErrorHandler
            });


        } catch (err) {
            return err

        }
    }

}

export default ServiceBusMessage