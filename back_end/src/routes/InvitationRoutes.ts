import express, { Router } from "express";
import { InvitationController } from "../controllers/InvitationController.js";

class InvitationRoutes {
  private controller: InvitationController;
  private router: Router;

  constructor(controller: InvitationController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.post("/", (req, res, next) =>
      this.controller.createInvitation(req, res, next)
    );
    this.router.post("/:id/accept", (req, res, next) =>
      this.controller.acceptInvitation(req, res, next)
    );
    this.router.post("/:id/decline", (req, res, next) =>
      this.controller.declineInvitation(req, res, next)
    );
    this.router.get("/pending/:userId", (req, res, next) =>
      this.controller.getPendingInvites(req, res, next)
    );
    return this.router;
  }
}

export { InvitationRoutes };
