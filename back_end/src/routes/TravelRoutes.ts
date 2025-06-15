import express, { Router } from "express";
import { TravelController } from "../controllers/TravelController.js";

class TravelRoutes {
  private controller: TravelController;
  private router: Router;

  constructor(controller: TravelController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.post("/create", (req, res, next) =>
      this.controller.create(req, res, next)
    );

    this.router.get("/user/:userId", (req, res, next) =>
      this.controller.getByUser(req, res, next)
    );

    this.router.get("/:travelId", (req, res, next) =>
      this.controller.getById(req, res, next)
    );

    this.router.put("/:travelId", (req, res, next) =>
      this.controller.update(req, res, next)
    );

    this.router.delete("/:travelId", (req, res, next) =>
      this.controller.remove(req, res, next)
    );

    this.router.post("/add-traveler", (req, res, next) =>
      this.controller.addTraveler(req, res, next)
    );

    return this.router;
  }
}

export { TravelRoutes };
