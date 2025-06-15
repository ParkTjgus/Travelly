import express, { Router } from "express";
import { UserController } from "../controllers/UserController.js";

class UserRoutes {
  private controller: UserController;
  private router: Router;

  constructor(controller: UserController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.get("/:id", (req, res, next) =>
      this.controller.getUserById(req, res, next)
    );
    return this.router;
  }
}

export { UserRoutes };
