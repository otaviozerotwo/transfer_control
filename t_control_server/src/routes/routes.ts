import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";

const router = Router();

router.use(checkUserExists);

router.post('/users', new UserController().createUser);

export default router;