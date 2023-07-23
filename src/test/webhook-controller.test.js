import { describe, expect, it, jest } from "@jest/globals";
import WebhookController from "../controllers/webhook-controller.js";

describe("webhook-controller", () => {
    let sut = WebhookController;
    jest.useFakeTimers();

    it("Should return OK when webhook is processed", async () => {
        const req = {
            body: {
                url: "wwww.faker.com",
                payloadWbehook: [{
                    message: "Car was created sucessfully!",
                    cardId: "111111111111"

                }]
            }
        }
        const apiReturn = {
            statusCode: 200,

        }

        const res = {
            status: () => {
                return {
                    json: () => {
                        return apiReturn;
                    }
                };
            }
        };

        sut.webhookProcessor = jest.fn(() => apiReturn)
        const response = await sut.webhookProcessor(req, res);
        expect(response).toEqual(apiReturn)
    })
})
