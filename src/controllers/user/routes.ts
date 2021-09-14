import { Router } from 'express';
import userRoutes from './controller';

const router = Router();

router.get('/', userRoutes.get);
router.post('/', userRoutes.post);
export default router;