import mongoose from "mongoose";

class InvitationModelClass {
  private schema = new mongoose.Schema({
    travelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Travel",
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
    createdAt: { type: Date, default: Date.now },
  });

  public model = mongoose.model("Invitation", this.schema);
}

export const InvitationModel = new InvitationModelClass().model;
