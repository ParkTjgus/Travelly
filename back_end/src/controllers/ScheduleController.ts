import { Request, Response, NextFunction } from "express";
import { ScheduleService } from "../services/ScheduleService.js";

export class ScheduleController {
  constructor(private service: ScheduleService) {}

  async createSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      const schedule = await this.service.createSchedule(
        req.params.travelId,
        req.body
      );
      res.status(201).json({ success: true, data: schedule, error: null });
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
      res.status(200).json({ success: true, data: updated, error: null });
    } catch (err) {
      next(err);
    }
  }

  async deleteSchedule(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.deleteSchedule(req.params.id);
      res.status(200).json({ success: true, data: true, error: null });
    } catch (err) {
      next(err);
    }
  }

  async getSchedules(req: Request, res: Response, next: NextFunction) {
    try {
      const schedules = await this.service.getSchedules(req.params.travelId);
      res.status(200).json({ success: true, data: schedules, error: null });
    } catch (err) {
      next(err);
    }
  }
}
