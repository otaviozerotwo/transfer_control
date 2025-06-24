import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";

const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put('/users/:username', UserController.updateUser);

router.post('/users', checkUserExists, UserController.createUser);

export default router;