import express, { Router, RequestHandler } from "express";
import { ScheduleController } from "../controllers/ScheduleController";

export class ScheduleRoutes {
  private controller: ScheduleController;
  private router: Router;

  constructor(controller: ScheduleController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.post("/", this.controller.createSchedule);
    this.router.put("/:id", this.controller.updateSchedule);
    this.router.delete("/:id", this.controller.deleteSchedule);
    this.router.get("/travel/:travelId", this.controller.getSchedules);
    return this.router;
  }
}
