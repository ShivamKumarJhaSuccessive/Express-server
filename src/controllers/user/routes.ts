import { Router } from 'express';
import userRoutes from './controller';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler'

const router = Router();

router.get('/',validationHandler(validation.get), userRoutes.get);
router.post('/',validationHandler(validation.create), userRoutes.post);
router.post('/createToken', userRoutes.createToken);
export default router;
