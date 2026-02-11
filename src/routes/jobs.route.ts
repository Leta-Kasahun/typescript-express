import { Router } from "express";
import { getEmpController } from "../controllers/jops.controller";
const router=Router();
router.get("/:id",getEmpController)
export default router;