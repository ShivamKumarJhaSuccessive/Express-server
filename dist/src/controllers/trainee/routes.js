"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const validationHandler_1 = require("../../libs/routes/validationHandler");
const router = (0, express_1.Router)();
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
 * /trainee/:
 *   get:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Trainee
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
router.get('/', (0, validationHandler_1.default)(validation_1.default.get), controller_1.default.get);
router.post('/', (0, validationHandler_1.default)(validation_1.default.create), controller_1.default.post);
router.post('/createToken', controller_1.default.createToken);
exports.default = router;
//# sourceMappingURL=routes.js.map