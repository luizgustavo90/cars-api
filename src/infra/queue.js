import * as sb from "@azure/service-bus"
import dotenv from 'dotenv'
import WebhookController from "../controllers/webhook-controller.js"


dotenv.config()

class ServiceBusMessage {

    static sendMessage = async (messageQueue) => {
        try {
            console.log("Starting ServiceBusMessage.sendMessage -")
            const connectionString = process.env.SERVICEBUS_CONNECTION_STRING
            const serviceBus = new sb.ServiceBusClient(connectionString)
            const sender = serviceBus.createSender("cars-api-message-sb")
            console.log("Finishing ServiceBusMessage.sendMessage -")
            await sender.sendMessages(messageQueue)


        } catch (err) {
            console.log("Finishing ServiceBusMessage.sendMessage with an Error -", err)
            return err

        }
    }

    static readMessage = async () => {
        try {
            console.log("Starting ServiceBusMessage.readMessage -")
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
            console.log("Finishing ServiceBusMessage.readMessage -")


        } catch (err) {
            console.log("Finishing ServiceBusMessage.readMessage with an Error -", err)
            return err

        }
    }

}

export default ServiceBusMessage