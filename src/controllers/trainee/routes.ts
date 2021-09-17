import { Router } from 'express';
import TraineeRoutes from './controller';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler'

const router = Router();

router.get('/',validationHandler(validation.get), TraineeRoutes.get);
router.post('/',validationHandler(validation.create), TraineeRoutes.post);
export default router;
