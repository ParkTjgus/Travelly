import express from "express";

import { AuthRoutes } from "./routes/AuthRoutes.js";
import { UserRoutes } from "./routes/UserRoutes.js";
import { TravelRoutes } from "./routes/TravelRoutes.js";
import { ScheduleRoutes } from "./routes/ScheduleRoutes.js";
import { InvitationRoutes } from "./routes/InvitationRoutes.js";

import { AuthController } from "./controllers/AuthController.js";
import { UserController } from "./controllers/UserController.js";
import { TravelController } from "./controllers/TravelController.js";
import { ScheduleController } from "./controllers/ScheduleController.js";
import { InvitationController } from "./controllers/InvitationController.js";

import { connectDB } from "./utils/db.js";
import { AuthService } from "./services/AuthService.js";
import { UserRepository } from "./repositories/UserRepository.js";

import { Request, Response, NextFunction } from "express";
import { errorHandler } from "./utils/ErrorHandler.js";

await connectDB(); // 서버 실행 전 DB 연결

const app = express();
app.use(express.json());

// Services
const authService = new AuthService(new UserRepository());
// const userService;

// Controllers
const authController = new AuthController(authService);

// Routes
app.use("/auth", new AuthRoutes(authController).routes);
// app.use("/users", new UserRoutes(new UserController()).routes);
// app.use("/travels", new TravelRoutes(new TravelController()).routes);
// app.use("/schedules", new ScheduleRoutes(new ScheduleController()).routes);
// app.use(
//   "/invitations",
//   new InvitationRoutes(new InvitationController()).routes
// );

// Error Handler
app.use(
  errorHandler as (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void
);

// Running server
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
