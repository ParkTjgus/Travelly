import express from "express";
import { AuthRoutes } from "./routes/AuthRoutes";
import { UserRoutes } from "./routes/UserRoutes";
import { TravelRoutes } from "./routes/TravelRoutes";
import { ScheduleRoutes } from "./routes/ScheduleRoutes";
import { InvitationRoutes } from "./routes/InvitationRoutes";
import { AuthController } from "controllers/AuthController";
import { UserController } from "controllers/UserController";
import { TravelController } from "controllers/TravelController";
import { ScheduleController } from "controllers/ScheduleController";
import { InvitationController } from "controllers/InvitationController";

const app = express();
app.use(express.json());

app.use("/auth", new AuthRoutes(new AuthController()).routes);
app.use("/users", new UserRoutes(new UserController()).routes);
app.use("/travels", new TravelRoutes(new TravelController()).routes);
app.use("/schedules", new ScheduleRoutes(new ScheduleController()).routes);
app.use(
  "/invitations",
  new InvitationRoutes(new InvitationController()).routes
);

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
