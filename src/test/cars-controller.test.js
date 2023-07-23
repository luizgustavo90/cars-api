import { describe, expect, it, jest } from "@jest/globals";
import CarsController from "../controllers/cars-controller.js";
import axios from "axios";

describe("cars-controller", () => {
    let sut = CarsController;
    jest.useFakeTimers();

    it("Should return a car's list", async () => {
        const req = {};
        const getReturn = [
            {
                _id: "648f197dcfc4984f5fe9813a",
                title: "title 1",
                brand: "brand 1",
                price: "price 1",
                age: 1980
            },
        ];
        const res = {
            status: () => {
                return {
                    json: () => {
                        return getReturn;
                    }
                };
            }
        };
        axios.get = jest.fn(() => getReturn);
        const response = await sut.carsList(req, res);
        expect(response).toHaveLength(1);
    })

    it("Should return OK when a car is created", async () => {
        const req = {
            body: {

                _id: "648f197dcfc4984f5fe9813a",
                title: "title 1",
                brand: "brand 1",
                price: "price 1",

            },
        }
        const apiReturn = {
            statusCode: 200,
            body: "Car was created",
            detail: `Car was created, Log of car's ID: 1111111111 was created on database! `
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
        axios.post = jest.fn(() => apiReturn)
        const response = await sut.createCar(req, res)
        expect(response).toEqual(apiReturn)
    })
})
