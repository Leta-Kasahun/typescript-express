import { getProduct,buyProductConstroller } from "../controllers/product.conntroller";
import { authGuard } from "../guards/auth.guards";
import { Router } from "express";
const router=Router();
router.get("/:id",authGuard,getProduct);
router.post("/:id/buy",authGuard,buyProductConstroller);
export  default router;