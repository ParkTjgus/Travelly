import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { CustomResponse } from "../utils/CustomResponse.js";

export class AuthController {
  constructor(private authService: AuthService) {}

  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id, password, name } = req.body;
      const user = await this.authService.signup(id, password, name);
      res.status(201).json(new CustomResponse(true, user, null));
    } catch (err) {
      next(err);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id, password } = req.body;
      const user = await this.authService.signin(id, password);
      res.status(200).json(new CustomResponse(true, user, null));
    } catch (err) {
      next(err);
    }
  }

  async withdraw(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.body;

      const deleted = await this.authService.withdraw(id);

      if (deleted) {
        res
          .status(200)
          .json(new CustomResponse(true, { message: "회원 탈퇴 성공" }, null));
      }
    } catch (err) {
      next(err); // 누락되어 있으면 HTML 에러 응답으로 빠짐
    }
  }
}
