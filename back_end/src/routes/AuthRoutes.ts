import express, { Router } from "express";
import { AuthController } from "../controllers/AuthController";

class AuthRoutes {
  private _authController: AuthController;
  private router: Router;

  constructor(controller: AuthController) {
    this._authController = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    const controller = this._authController;

    this.router.post("/signin", controller.login);
    this.router.post("/signup", controller.register);

    return this.router;
  }
}

export { AuthRoutes };
