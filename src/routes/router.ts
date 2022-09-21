import { Router, IRouter } from "express";
import { user_controller } from "../controllers/user.controller";

const router: IRouter = Router();

router.get("/users", user_controller.GET);

export default router;