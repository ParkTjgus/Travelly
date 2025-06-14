import { Request, Response } from "express";

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    console.log(this); // ❗ 바인딩 안 하면 undefined
  }
  async register(req: Request, res: Response): Promise<void> {
    console.log(this); // ❗ 바인딩 안 하면 undefined
  }
}

export { AuthController };
