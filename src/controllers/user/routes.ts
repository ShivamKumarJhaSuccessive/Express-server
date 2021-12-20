import { Router } from 'express';
import userRoutes from './controller';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler'

const router = Router();

/**
 * @swagger
 * definitions:
 *   UserSchema:
 *     properties:
 *       _id:
 *         type: string
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       createdAt:
 *         type: string
 *       deletedAt:
 *         type: string
 *   Users:
 *     type: array
 *     items:
 *       $ref: '#/definitions/UserSchema'
 *   User:
 *     type: object
 *     $ref: '#/definitions/UserSchema'
 *   UserListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/User'
 */

/**
 * @swagger
 * /user/:
 *   get:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - User
 *     description: Returns Single User
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Returns Single User
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: "614473d2de131c7ffb4470c7"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Verified User Received.
 *         schema:
 *           $ref: '#/definitions/UserListResponse'
 *       500:
 *         description: Internal Server Error
 */

router.get('/',validationHandler(validation.get), userRoutes.get);
router.post('/',validationHandler(validation.create), userRoutes.post);
router.post('/createToken', userRoutes.createToken);
export default router;
