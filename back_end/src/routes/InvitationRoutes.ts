import express, { Router } from "express";
import { InvitationController } from "../controllers/InvitationController";

class InvitationRoutes {
  private controller: InvitationController;
  private router: Router;

  constructor(controller: InvitationController) {
    this.controller = controller;
    this.router = express.Router();
  }

  get routes(): Router {
    this.router.post("/", this.controller.createInvitation);
    this.router.post("/accept/:id", this.controller.acceptInvitation);
    this.router.post("/decline/:id", this.controller.declineInvitation);
    this.router.get("/pending/:userId", this.controller.getPendingInvites);
    return this.router;
  }
}

export { InvitationRoutes };
