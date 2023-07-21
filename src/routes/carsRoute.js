import express from "express";
import CarsController from "../controllers/cars-controller.js";

const router = express.Router()

router.get("/api/listCars", CarsController.carsList)

export default router