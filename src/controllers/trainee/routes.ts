import { Router } from 'express';
import TraineeRoutes from './controller';

const router = Router();

router.get('/', TraineeRoutes.get);
router.post('/', TraineeRoutes.post);
export default router;