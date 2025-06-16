import express, { Router } from "express";
import { ScheduleController } from "../controllers/ScheduleController";

export class ScheduleRoutes {
  private controller: ScheduleController;
  private router: Router;

  constructor(controller: ScheduleController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.get("/:id", (req, res, next) =>
      this.controller.getSchedule(req, res, next)
    );
    this.router.post("/:travelId", (req, res, next) =>
      this.controller.createSchedule(req, res, next)
    );
    this.router.put("/:id", (req, res, next) =>
      this.controller.updateSchedule(req, res, next)
    );
    this.router.delete("/:id", (req, res, next) =>
      this.controller.deleteSchedule(req, res, next)
    );
    this.router.get("/travel/:travelId", (req, res, next) =>
      this.controller.getSchedules(req, res, next)
    );
    return this.router;
  }
}
