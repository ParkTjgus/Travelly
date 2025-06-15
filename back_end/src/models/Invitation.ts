import mongoose from "mongoose";

class Invitation {
  private schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    travelId: { type: String, required: true },
    inviterId: { type: String, required: true },
    inviteeId: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
  });

  public model = mongoose.model("Invitation", this.schema);
}

export const InvitationModel = new Invitation().model;
