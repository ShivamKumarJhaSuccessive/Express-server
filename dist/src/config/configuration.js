"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABOUT = exports.SWAGGER_URL = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const joi = require("@hapi/joi");
const version_ = require("../../package.json");
const version = version_.version;
exports.SWAGGER_URL = '/api-docs';
const envVarsSchema = joi.object({
    NODE_ENV: joi.string().default('dev'),
    PORT: joi.number().default(9000),
    jwtSECRET: joi.string().default(`2L'4L6P?zZW8/>s;NV$d`),
    MONGO_URL: joi.string().default('mongodb://localhost:27017/express-training'),
    PASSWORD: joi.string().default('Training@123')
}).unknown().required();
const { value: envVars } = envVarsSchema.validate(process.env);
exports.ABOUT = {
    description: 'Successive with Swagger',
    // in: 'Headers',
    // name: 'Authorization',
    // serviceConfig: 'Serviceconfig',
    title: 'Training Project - MERN',
    // type: 'apiKey',
    // user: 'User',
};
const Configure = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    secret: envVars.jwtSECRET,
    url: envVars.MONGO_URL,
    password: envVars.PASSWORD,
    swaggerDefinition: {
        basePath: '/api',
        info: Object.assign(Object.assign({}, exports.ABOUT), { version }),
    },
    swaggerUrl: exports.SWAGGER_URL
});
exports.default = Configure;
//# sourceMappingURL=configuration.js.map