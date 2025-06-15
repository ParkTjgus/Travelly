import { InvitationModel } from "../models/Invitation.js";

export class InvitationRepository {
  async create(data: any) {
    return await InvitationModel.create(data);
  }

  async findById(id: string) {
    return await InvitationModel.findOne({ id });
  }

  async findPendingByUserId(userId: string) {
    return await InvitationModel.find({ inviteeId: userId, status: "pending" });
  }

  async updateStatus(id: string, status: string) {
    return await InvitationModel.updateOne({ id }, { status });
  }
}
