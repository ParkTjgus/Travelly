import { Request, Response } from "express";

export class InvitationController {
  async createInvitation(req: Request, res: Response): Promise<void> {}
  async acceptInvitation(req: Request, res: Response): Promise<void> {}
  async declineInvitation(req: Request, res: Response): Promise<void> {}
  async getPendingInvites(req: Request, res: Response): Promise<void> {}
}
