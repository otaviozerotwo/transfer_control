import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";
import AuthController from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post('/login', AuthController.login);

router.use(authMiddleware);

router.post('/users', checkUserExists, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put('/users/:username', UserController.updateUser);
router.delete('/users/:username', UserController.deleteUser);

export default router;