import { userController,findUserByIdController,userSessionController,activeSessionController,systemTagController } from "../controllers/user.controller";
import { Router } from "express";

const router=Router();
router.get("/tags",systemTagController);
router.get("/active",activeSessionController)
router.get("/sessions",userSessionController)
router.get("/:id",findUserByIdController);
router.get("/",userController);
export default router;