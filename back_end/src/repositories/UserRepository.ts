import { UserModel } from "../models/User.js";

export class UserRepository {
  async create(userData: { id: string; password: string; name: string }) {
    const user = new UserModel(userData);
    return await user.save();
  }

  async findById(id: string) {
    return await UserModel.findOne({ id });
  }

  async existsById(id: string): Promise<boolean> {
    const count = await UserModel.countDocuments({ id });
    return count > 0;
  }

  async deleteById(id: string) {
    const result = await UserModel.deleteOne({ id });
    return result.deletedCount > 0;
  }
}
