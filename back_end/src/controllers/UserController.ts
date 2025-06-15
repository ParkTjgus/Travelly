import { Request, Response, NextFunction } from "express";
import { CustomResponse } from "../utils/CustomResponse.js";
import { UserService } from "../services/UserService.js";

export class UserController {
  constructor(private service: UserService) {}

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this.service.getUser(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}
