import express, { Router, RequestHandler } from "express";
import { UserController } from "../controllers/UserController";

class UserRoutes {
  private controller: UserController;
  private router: Router;

  constructor(controller: UserController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    const c = this.controller;
    this.router.get("/:id", c.getUserById.bind(c) as RequestHandler);
    return this.router;
  }
}

export { UserRoutes };
