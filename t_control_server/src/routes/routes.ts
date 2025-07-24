import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkUserExists } from "../middlewares/checkUserExists";
import AuthController from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";
import EnterpriseController from "../controllers/EnterpriseController";
import { checkEnterpriseExists } from "../middlewares/checkEnterpriseExists";
import VolumeController from "../controllers/VolumeController";
import { checkVolumeExists } from "../middlewares/checkVolumeExists";

const router = Router();

router.post('/login', AuthController.login);

router.use(authMiddleware);

router.post('/users', checkUserExists, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put('/users/:username', UserController.updateUser);
router.delete('/users/:username', UserController.deleteUser);

router.post('/enterprises', checkEnterpriseExists, EnterpriseController.createEnterprise);
router.get('/enterprises', EnterpriseController.getAllEnterprises);
router.get('/enterprises/:id', EnterpriseController.getEnterpriseBy);
router.put('/enterprises/:id', EnterpriseController.updateEnterprise);
router.delete('/enterprises/:id', EnterpriseController.deleteEnterprise);

router.post('/volumes', checkVolumeExists, VolumeController.createVolume);
router.get('/volumes', VolumeController.getAllVolumes);
router.get('/volumes/:id', VolumeController.getVolumeBy);
router.put('/volumes/:id', VolumeController.updateVolume);
router.delete('/volumes/:id', VolumeController.deleteVolume);

export default router;