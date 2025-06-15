import { TravelModel } from "../models/Travel.js";
import { Types } from "mongoose";

export class TravelRepository {
  async create(travelData: any) {
    return await TravelModel.create(travelData);
  }

  async findByUserId(userId: Types.ObjectId) {
    return await TravelModel.find({ travelers: userId });
  }

  async findById(travelId: string) {
    return await TravelModel.findOne({ id: travelId });
  }

  async addTraveler(travelId: string, userId: Types.ObjectId) {
    return await TravelModel.updateOne(
      { id: travelId },
      { $addToSet: { travelers: userId } }
    );
  }

  async update(travelId: string, updateData: Partial<any>) {
    return await TravelModel.findOneAndUpdate({ id: travelId }, updateData, {
      new: true,
    });
  }

  async remove(travelId: string) {
    return await TravelModel.findOneAndDelete({ id: travelId });
  }
}
