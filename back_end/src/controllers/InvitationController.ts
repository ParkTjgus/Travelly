import { Request, Response, NextFunction } from "express";
import { InvitationService } from "../services/InvitationService.js";
import { CustomResponse } from "../utils/CustomResponse.js";

export class InvitationController {
  constructor(private service: InvitationService) {}

  createInvitation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { travelId, inviterId, inviteeId } = req.body;
      const result = await this.service.createInvitation(
        travelId,
        inviterId,
        inviteeId
      );
      res.json(new CustomResponse(true, result, null));
    } catch (err) {
      next(err);
    }
  };

  acceptInvitation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.service.acceptInvitation(req.params.id);
      res.json(new CustomResponse(true, result, null));
    } catch (err) {
      next(err);
    }
  };

  declineInvitation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const success = await this.service.declineInvitation(req.params.id);
      res.json(
        new CustomResponse(
          true,
          { message: "초대가 거절 처리되었습니다." },
          null
        )
      );
    } catch (err) {
      next(err);
    }
  };

  getPendingInvites = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const invites = await this.service.getPendingInvites(req.params.userId);
      res.json(new CustomResponse(true, invites, null));
    } catch (err) {
      next(err);
    }
  };
}
