import { ScheduleModel } from "../models/Schedule.js";
import { ScheduleData } from "../types/ScheduleData";

export class ScheduleRepository {
  async create(travelId: string, data: ScheduleData) {
    return await ScheduleModel.create({ ...data, travelId });
  }

  async update(id: string, data: ScheduleData) {
    return await ScheduleModel.findOneAndUpdate({ id }, data, { new: true });
  }

  async delete(id: string) {
    const result = await ScheduleModel.deleteOne({ id });
    return result.deletedCount > 0;
  }

  async findByTravelId(travelId: string) {
    return await ScheduleModel.find({ travelId });
  }

  async findById(id: string) {
    return await ScheduleModel.findOne({ id });
  }
}
