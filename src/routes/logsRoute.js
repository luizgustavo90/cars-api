import express from "express";
import LogController from "../controllers/logs-controller.js";

const router = express.Router()

router.get("/api/logs", LogController.logList)

export default router