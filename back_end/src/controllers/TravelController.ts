import { Request, Response } from "express";

export class TravelController {
  async createTravel(req: Request, res: Response): Promise<void> {}
  async getTravels(req: Request, res: Response): Promise<void> {}
  async getTravelById(req: Request, res: Response): Promise<void> {}
  async deleteTravel(req: Request, res: Response): Promise<void> {}
}
