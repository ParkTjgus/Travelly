import mongoose from "mongoose";

class User {
  private schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  public model = mongoose.model("User", this.schema);
}

export const UserModel = new User().model;
