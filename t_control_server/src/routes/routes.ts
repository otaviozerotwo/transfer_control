import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";

const router = Router();

router.post('/users', checkUserExists, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put('/users/:username', UserController.updateUser);
// router.delete('/users/:username', UserController.deleteUser);

export default router;