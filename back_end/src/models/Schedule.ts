import mongoose from "mongoose";

class Schedule {
  private schema = new mongoose.Schema({
    travelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Travel",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    location: String,
  });

  public model = mongoose.model("Schedule", this.schema);
}

export const ScheduleModel = new Schedule().model;
