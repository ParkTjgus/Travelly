// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./CustomError.js";
import { CustomResponse } from "./CustomResponse.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  const status = err instanceof CustomError ? err.statusCode : 500;

  console.error(err.message);
  return res
    .status(status)
    .type("application/json")
    .json(
      new CustomResponse(false, null, {
        code: err.code || "INTERNAL_SERVER_ERROR",
        details: err.message || "Unhandled error occurred",
      })
    );
}
