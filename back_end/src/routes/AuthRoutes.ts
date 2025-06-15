import express, { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
class AuthRoutes {
  private _authController: AuthController;
  private router: Router;

  constructor(controller: AuthController) {
    this._authController = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    const controller = this._authController;

    this.router.post("/signup", (req, res, next) =>
      controller.signup(req, res, next)
    );
    this.router.post("/signin", (req, res, next) =>
      controller.signin(req, res, next)
    );
    this.router.post("/withdraw", (req, res, next) =>
      controller.withdraw(req, res, next)
    );

    return this.router;
  }
}

export { AuthRoutes };
