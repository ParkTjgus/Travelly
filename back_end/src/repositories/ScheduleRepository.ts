import { Types } from "mongoose";
import { ScheduleModel } from "../models/Schedule.js";
import { ScheduleData } from "../types/ScheduleData";

export class ScheduleRepository {
  async create(travelId: Types.ObjectId, data: ScheduleData) {
    return await ScheduleModel.create({ ...data, travelId });
  }

  async update(id: Types.ObjectId, data: ScheduleData) {
    return await ScheduleModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
  }

  async delete(id: Types.ObjectId) {
    const result = await ScheduleModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }

  async findByTravelId(travelId: string) {
    return await ScheduleModel.find({ travelId });
  }

  async findById(id: Types.ObjectId) {
    return await ScheduleModel.findOne({ _id: id });
  }
}
