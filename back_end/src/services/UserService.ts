import { UserRepository } from "../repositories/UserRepository.js";
import { CustomError } from "../utils/CustomError.js";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user)
      throw new CustomError(
        404,
        "USER_NOT_FOUND",
        "존재하지 않는 사용자입니다."
      );
    return user;
  }
}
