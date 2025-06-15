import { UserRepository } from "../repositories/UserRepository.js";
import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
import { CustomError } from "../utils/CustomError.js";

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signin(id: string, password: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new CustomError(404, "NOT_FOUND", "존재하지 않는 사용자입니다.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new CustomError(
        401,
        "INVALID_PASSWORD",
        "비밀번호가 일치하지 않습니다."
      );
    }

    return user;
  }

  async signup(id: string, password: string, name: string) {
    const existing = await UserModel.findOne({ id });
    if (existing)
      throw new CustomError(409, "ALREADY_EXISTS", "이미 등록된 사용자입니다.");

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ id, password: hashed, name });
    await newUser.save();
    return newUser;
  }

  async withdraw(id: string): Promise<boolean> {
    const deleted = await this.userRepository.deleteById(id);
    if (!deleted) {
      throw new CustomError(
        404,
        "NOT_FOUND",
        "사용자 탈퇴 실패: 존재하지 않는 사용자입니다."
      );
    }
    return deleted;
  }
}
