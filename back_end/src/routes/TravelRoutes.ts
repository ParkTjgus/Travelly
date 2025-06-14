import express, { Router, RequestHandler } from "express";
import { TravelController } from "../controllers/TravelController";

export class TravelRoutes {
  private controller: TravelController;
  private router: Router;

  constructor(controller: TravelController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.post("/", this.controller.createTravel);
    this.router.get("/", this.controller.getTravels);
    this.router.get("/:id", this.controller.getTravelById);
    this.router.delete("/:id", this.controller.deleteTravel);
    return this.router;
  }
}
