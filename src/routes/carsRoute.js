import express from "express";
import CarsController from "../controllers/cars-controller.js";

const router = express.Router()

router.get("/api/listCars", CarsController.carsList)
router.post("/api/createCar", CarsController.createCar)

export default router