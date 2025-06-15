import mongoose from "mongoose";
import { ScheduleRepository } from "../repositories/ScheduleRepository.js";
import { ScheduleData } from "../types/ScheduleData";
import { CustomError } from "../utils/CustomError.js";

export class ScheduleService {
  constructor(private repository: ScheduleRepository) {}

  async createSchedule(travelId: string, data: ScheduleData) {
    try {
      return await this.repository.create(travelId, {
        ...data,
        id: new mongoose.Types.ObjectId().toString(),
      });
    } catch {
      throw new CustomError(
        500,
        "CREATION_FAILED",
        "일정 생성에 실패했습니다."
      );
    }
  }

  async updateSchedule(id: string, data: ScheduleData) {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new CustomError(404, "NOT_FOUND", "일정을 찾을 수 없습니다.");
    }
    return updated;
  }

  async deleteSchedule(id: string) {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new CustomError(404, "NOT_FOUND", "일정을 찾을 수 없습니다.");
    }
    return deleted;
  }

  async getSchedules(travelId: string) {
    return await this.repository.findByTravelId(travelId);
  }
}
