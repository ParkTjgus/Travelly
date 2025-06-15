import { InvitationRepository } from "../repositories/InvitationRepository.js";
import { CustomError } from "../utils/CustomError.js";
import mongoose from "mongoose";
import { TravelModel } from "../models/Travel.js";

export class InvitationService {
  constructor(private repo: InvitationRepository) {}

  async createInvitation(
    travelId: string,
    inviterId: string,
    inviteeId: string
  ) {
    const invitation = await this.repo.create({
      id: new mongoose.Types.ObjectId().toString(),
      travelId,
      inviterId,
      inviteeId,
      status: "pending",
    });
    return invitation;
  }

  async acceptInvitation(id: string) {
    const invitation = await this.repo.findById(id);
    if (!invitation || invitation.status !== "pending") {
      throw new CustomError(
        400,
        "INVALID_INVITATION",
        "유효하지 않은 초대입니다."
      );
    }

    await this.repo.updateStatus(id, "accepted");

    const travel = await TravelModel.findOne({ id: invitation.travelId });
    if (!travel) {
      throw new CustomError(404, "NOT_FOUND", "여행을 찾을 수 없습니다.");
    }

    travel.travelers.push(new mongoose.Types.ObjectId(invitation.inviteeId));
    await travel.save();

    return travel;
  }

  async declineInvitation(id: string): Promise<boolean> {
    const invitation = await this.repo.findById(id);
    if (!invitation || invitation.status !== "pending") return false;
    await this.repo.updateStatus(id, "declined");
    return true;
  }

  async getPendingInvites(userId: string) {
    return await this.repo.findPendingByUserId(userId);
  }
}
