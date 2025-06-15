import { Response } from "express";
import { CustomError } from "./CustomError";

export class CustomResponse {
  success: boolean;
  data: any;
  error: { code: string; details: string } | null;

  constructor(
    success: boolean,
    data: any,
    error: { code: string; details: string } | null = null
  ) {
    this.success = success;
    this.data = data;
    this.error = error;
  }
}
