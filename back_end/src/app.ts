import express from "express";
import { Request, Response, NextFunction } from "express";

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

// Services
import { AuthService } from "./services/AuthService.js";
import { UserService } from "./services/UserService.js";
import { TravelService } from "./services/TravelService.js";
import { ScheduleService } from "./services/ScheduleService.js";
import { InvitationService } from "./services/InvitationService.js";

// Repositories
import { UserRepository } from "./repositories/UserRepository.js";
import { TravelRepository } from "./repositories/TravelRepository.js";
import { ScheduleRepository } from "./repositories/ScheduleRepository.js";
import { InvitationRepository } from "./repositories/InvitationRepository.js";

// utility
import { connectDB } from "./utils/db.js";
import { errorHandler } from "./utils/ErrorHandler.js";

await connectDB(); // 서버 실행 전 DB 연결

const app = express();
app.use(express.json());

// Services
const authService = new AuthService(new UserRepository());
const userService = new UserService(new UserRepository());
const travelService = new TravelService(new TravelRepository());
const scheduleService = new ScheduleService(new ScheduleRepository());
const invitationService = new InvitationService(new InvitationRepository());

// Controllers
const authController = new AuthController(authService);
const userController = new UserController(userService);
const travelController = new TravelController(travelService);
const scheduleController = new ScheduleController(scheduleService);
const invitationController = new InvitationController(invitationService);

// Routes
app.use("/auth", new AuthRoutes(authController).routes);
app.use("/users", new UserRoutes(userController).routes);
app.use("/travels", new TravelRoutes(travelController).routes);
app.use("/schedules", new ScheduleRoutes(scheduleController).routes);
app.use("/invitations", new InvitationRoutes(invitationController).routes);

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
