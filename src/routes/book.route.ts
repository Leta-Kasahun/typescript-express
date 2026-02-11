import { Router } from "express";
import { getBook,borroBook,deleteBookController,addBookController,getBookController } from "../controllers/book.controller";
import { roleGuard } from "../guards/role.gard";
import { authGuard } from "../guards/auth.guards";

const router=Router();
router.get("/:id",authGuard,getBook);
router.get("/",authGuard,getBookController)
router.post("/:id/borrow",authGuard,roleGuard("user"),borroBook);
router.delete("/:id/delete",roleGuard("admin"),deleteBookController)
router.post("/add",roleGuard("admin"),addBookController)
export default router;