import { Request, Response, NextFunction } from "express";
import { ScheduleService } from "../services/ScheduleService.js";
import { CustomResponse } from "../utils/CustomResponse.js";

export class ScheduleController {
  constructor(private service: ScheduleService) {}

  async createSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      const schedule = await this.service.createSchedule(
        req.params.travelId,
        req.body
      );
      const response = new CustomResponse(true, schedule, null);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async updateSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      const updated = await this.service.updateSchedule(
        req.params.id,
        req.body
      );
      const response = new CustomResponse(true, updated, null);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async deleteSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.deleteSchedule(req.params.id);
      const response = new CustomResponse(
        true,
        { message: "삭제 완료되었습니다." },
        null
      );
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async getSchedules(req: Request, res: Response, next: NextFunction) {
    try {
      const schedules = await this.service.getSchedules(req.params.travelId);
      const response = new CustomResponse(true, schedules, null);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async getSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      const schedules = await this.service.getSchedule(req.params.id);
      const response = new CustomResponse(true, schedules, null);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}
