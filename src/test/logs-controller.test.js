import { describe, expect, it, jest } from "@jest/globals";
import LogController from "../controllers/logs-controller.js";;

describe("logs-controller", () => {
    let sut = LogController;
    jest.useFakeTimers();

    it("Should return OK when log is created", async () => {
        const req = {
            body: {
                _id: "648f197dcfc4984f5fe9813a",
                data_hora: "2023-07-22T19:20:52.148Z",
                car_id: "1111111111111111111"
            },
        }
        const apiReturn = {
            statusCode: 200
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
        sut.insertLog = jest.fn(() => apiReturn)
        const response = await sut.insertLog(req, res)
        expect(response).toEqual(apiReturn)
    })    
    
    it("Should return a log's list", async () => {
        const req = {};
        const getReturn = [
            {
                _id: "648f197dcfc4984f5fe9813a",
                data_hora: "2023-07-22T19:20:52.148Z",
                car_id: "1111111111111111111"

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
        sut.logList = jest.fn(() => getReturn);
        const response = await sut.logList(req, res);
        expect(response).toHaveLength(1);
    })


})
