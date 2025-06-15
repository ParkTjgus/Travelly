import { TravelRepository } from "../repositories/TravelRepository.js";
import { UserModel } from "../models/User.js";
import mongoose from "mongoose";
import { CustomError } from "../utils/CustomError.js";

export class TravelService {
  constructor(private repository: TravelRepository) {}

  async createTravel(
    userId: string,
    startDate: string,
    endDate: string,
    travelName: string,
    location: string
  ) {
    const newTravel = await this.repository.create({
      id: new mongoose.Types.ObjectId().toString(),
      name: travelName,
      travelers: [userId],
      location,
      startDate,
      endDate,
      schedules: [],
    });
    return newTravel;
  }

  async getTravels(userId: string) {
    return await this.repository.findByUserId(
      new mongoose.Types.ObjectId(userId)
    );
  }

  async getTravelById(travelId: string) {
    const travel = await this.repository.findById(travelId);
    if (!travel)
      throw new CustomError(404, "NOT_FOUND", "여행을 찾을 수 없습니다.");
    return travel;
  }

  async addTravelerByUserId(travelId: string, userId: string) {
    const user = await UserModel.findOne({ id: userId });
    if (!user)
      throw new CustomError(404, "NOT_FOUND", "사용자를 찾을 수 없습니다.");

    const travel = await this.repository.findById(travelId);
    if (!travel)
      throw new CustomError(404, "NOT_FOUND", "여행을 찾을 수 없습니다.");

    if (travel.travelers.includes(user._id)) {
      throw new CustomError(409, "ALREADY_EXISTS", "이미 참여 중입니다.");
    }

    await this.repository.addTraveler(travelId, user._id);
    return await this.repository.findById(travelId);
  }

  async updateTravel(travelId: string, updateData: any) {
    const updated = await this.repository.update(travelId, updateData);
    if (!updated)
      throw new CustomError(404, "NOT_FOUND", "수정할 여행이 없습니다.");
    return updated;
  }

  async removeTravel(travelId: string) {
    const removed = await this.repository.remove(travelId);
    if (!removed)
      throw new CustomError(404, "NOT_FOUND", "삭제할 여행이 없습니다.");
    return removed;
  }
}
