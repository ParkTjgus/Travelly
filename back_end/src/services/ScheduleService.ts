import mongoose, { Types } from "mongoose";
import { ScheduleRepository } from "../repositories/ScheduleRepository.js";
import { ScheduleData } from "../types/ScheduleData";
import { CustomError } from "../utils/CustomError.js";
import { TravelModel } from "../models/Travel.js";

export class ScheduleService {
  constructor(private repository: ScheduleRepository) {}

  async createSchedule(travelId: string, data: ScheduleData) {
    try {
      const travel = await TravelModel.findOne({ id: travelId });
      if (!travel)
        throw new CustomError(404, "NOT_FOUND", "여행을 찾을 수 없습니다.");

      return await this.repository.create(travel._id, {
        ...data,
      });
    } catch (err) {
      if (err instanceof CustomError) throw err;
      throw new CustomError(
        500,
        "CREATION_FAILED",
        "일정 생성에 실패했습니다."
      );
    }
  }

  async updateSchedule(id: string, data: ScheduleData) {
    const scheduleId = new mongoose.Types.ObjectId(id);
    const updated = await this.repository.update(scheduleId, data);
    if (!updated) {
      throw new CustomError(404, "NOT_FOUND", "일정을 찾을 수 없습니다.");
    }
    return updated;
  }

  async deleteSchedule(id: string) {
    const scheduleId = new mongoose.Types.ObjectId(id);
    const deleted = await this.repository.delete(scheduleId);
    if (!deleted) {
      throw new CustomError(404, "NOT_FOUND", "일정을 찾을 수 없습니다.");
    }
    return deleted;
  }

  async getSchedules(travelId: string) {
    return await this.repository.findByTravelId(travelId);
  }

  async getSchedule(id: string) {
    const scheduleId = new mongoose.Types.ObjectId(id);
    const schedule = await this.repository.findById(scheduleId);
    if (!schedule) {
      throw new CustomError(404, "NOT_FOUND", "일정을 찾을 수 없습니다.");
    }
    return schedule;
  }
}
