import { Router } from 'express';

import  TraineeRouter  from './controllers';

const router = Router();

router.use('/trainee', TraineeRouter);

export default router;
