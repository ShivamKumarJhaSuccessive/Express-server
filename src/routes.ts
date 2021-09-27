import { Router } from 'express';

import  TraineeRouter  from './controllers';

const router = Router();

/**
 * @swagger
 * securityDefinitions:
 *   APIKeyHeader:
 *     type: apiKey
 *     in: header
 *     name: User Authorization
 */

router.use('/trainee', TraineeRouter);

export default router;
