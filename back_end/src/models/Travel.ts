import mongoose from "mongoose";

class Travel {
  private schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    travelers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    schedules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }],
  });

  public model = mongoose.model("Travel", this.schema);
}

export const TravelModel = new Travel().model;
