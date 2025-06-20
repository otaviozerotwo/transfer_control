import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.post('/create-user', new UserController().createUser);

export default router;