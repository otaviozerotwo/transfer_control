import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";
import EnterpriseController from "../controllers/EnterpriseController";
import VolumeController from "../controllers/VolumeController";
import NFeController from "../controllers/NFeController";

const router = Router();

router.post('/login', AuthController.login);

router.use(authMiddleware);

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserBy);
router.put('/users/:username', UserController.updateUser);
router.delete('/users/:username', UserController.deleteUser);

router.post('/enterprises', EnterpriseController.createEnterprise);
router.get('/enterprises', EnterpriseController.getAllEnterprises);
router.get('/enterprises/:id', EnterpriseController.getEnterpriseBy);
router.put('/enterprises/:id', EnterpriseController.updateEnterprise);
router.delete('/enterprises/:id', EnterpriseController.deleteEnterprise);

router.post('/volumes', VolumeController.createVolume);
router.get('/volumes', VolumeController.getAllVolumes);
router.get('/volumes/:id', VolumeController.getVolumeBy);
router.put('/volumes/:id', VolumeController.updateVolume);
router.delete('/volumes/:id', VolumeController.deleteVolume);

router.post('/nfes', NFeController.createNFe);
router.get('/nfes', NFeController.getAllNFe);
router.get('/nfes/:id', NFeController.getNFeBy);
// router.put('/nfes/:id', NFeController.updateNfe);

export default router;