import mongoose from "mongoose";

class Schedule {
  private schema = new mongoose.Schema({
    travelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Travel",
      required: true,
    },
    content: { type: String, required: true },
    startDate: { type: Date, required: true },
    startTime: { type: String, required: true }, // 예: "09:30"
    endTime: { type: String, required: true }, // 예: "14:00"
    price: Number,
  });

  public model = mongoose.model("Schedule", this.schema);
}

export const ScheduleModel = new Schedule().model;
