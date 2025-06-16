import { InvitationRepository } from "../repositories/InvitationRepository.js";
import { CustomError } from "../utils/CustomError.js";
import mongoose from "mongoose";
import { TravelModel } from "../models/Travel.js";
import { UserModel } from "../models/User.js";

export class InvitationService {
  constructor(private repo: InvitationRepository) {}

  async createInvitation(
    travelId: string,
    inviterId: string,
    inviteeId: string
  ) {
    const inviter = await UserModel.findOne({ id: inviterId });
    if (!inviter)
      throw new CustomError(
        404,
        "NOT_FOUND",
        "초대하는 사용자를 찾을 수 없습니다."
      );

    const invitee = await UserModel.findOne({ id: inviteeId });
    if (!invitee)
      throw new CustomError(
        404,
        "NOT_FOUND",
        "초대받는 사용자를 찾을 수 없습니다."
      );

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

    const travel = await TravelModel.findOne({ id: invitation.travelId });
    if (!travel) {
      throw new CustomError(404, "NOT_FOUND", "여행을 찾을 수 없습니다.");
    }

    const user = await UserModel.findOne({ id: invitation.inviteeId });
    if (!user) {
      throw new CustomError(404, "NOT_FOUND", "사용자를 찾을 수 없습니다.");
    }

    if (travel.travelers.includes(user._id)) {
      throw new CustomError(
        409,
        "ALREADY_EXISTS",
        "이미 여행에 참여 중입니다."
      );
    }

    travel.travelers.push(user._id);
    await travel.save();

    await this.repo.updateStatus(id, "accepted");

    return travel;
  }

  async declineInvitation(id: string): Promise<boolean> {
    const invitation = await this.repo.findById(id);
    if (!invitation || invitation.status !== "pending")
      throw new CustomError(
        400,
        "INVALID_INVITATION",
        "이미 처리되었거나 존재하지 않는 초대입니다."
      );

    await this.repo.updateStatus(id, "declined");
    return true;
  }

  async getPendingInvites(userId: string) {
    const user = await UserModel.findOne({ id: userId });
    if (!user)
      throw new CustomError(404, "NOT_FOUND", "사용자를 찾을 수 없습니다.");

    return await this.repo.findPendingByUserId(userId);
  }
}
