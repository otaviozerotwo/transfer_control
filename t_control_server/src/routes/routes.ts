import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";
import { validateRequest } from "../middlewares/validateRequest";
import { updateUserBodySchema, updateUserParamsSchema } from "../schemas/userSchema";

const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put(
  '/users/:username', 
  validateRequest({
    params: updateUserParamsSchema,
    body: updateUserBodySchema,
  }),
  UserController.updateUser
);

router.post(
  '/users',
  checkUserExists, 
  UserController.createUser
);

export default router;