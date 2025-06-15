import { Request, Response, NextFunction } from "express";
import { TravelService } from "../services/TravelService.js";
import { CustomResponse } from "../utils/CustomResponse.js";

export class TravelController {
  constructor(private travelService: TravelService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, startDate, endDate, travelName, location } = req.body;
      const travel = await this.travelService.createTravel(
        userId,
        startDate,
        endDate,
        travelName,
        location
      );
      res.status(201).json(new CustomResponse(true, travel, null));
    } catch (err) {
      next(err);
    }
  }

  async getByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const travels = await this.travelService.getTravels(userId);
      res.json(new CustomResponse(true, travels, null));
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const travel = await this.travelService.getTravelById(
        req.params.travelId
      );
      res.json(new CustomResponse(true, travel, null));
    } catch (err) {
      next(err);
    }
  }

  async addTraveler(req: Request, res: Response, next: NextFunction) {
    try {
      const { travelId, userId } = req.body;
      const result = await this.travelService.addTravelerByUserId(
        travelId,
        userId
      );
      res.json(new CustomResponse(true, result, null));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updated = await this.travelService.updateTravel(
        req.params.travelId,
        req.body
      );
      res.json(new CustomResponse(true, updated, null));
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted = await this.travelService.removeTravel(
        req.params.travelId
      );
      res.json(new CustomResponse(true, deleted, null));
    } catch (err) {
      next(err);
    }
  }
}
