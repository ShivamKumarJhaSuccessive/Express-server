import {config} from 'dotenv';
config();
import * as joi from '@hapi/joi';
import * as version_ from '../../package.json';
const version = version_.version;
export const SWAGGER_URL = '/api-docs';

const envVarsSchema=joi.object({
  NODE_ENV:joi.string().default('dev'),
  PORT: joi.number().default(9000),
  jwtSECRET:joi.string().default(`2L'4L6P?zZW8/>s;NV$d`),
  MONGO_URL:joi.string().default('mongodb://localhost:27017/express-training'),
  PASSWORD:joi.string().default('Training@123')
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);
export const ABOUT = {
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
  url:envVars.MONGO_URL,
  password:envVars.PASSWORD,
  swaggerDefinition: {
    basePath: '/api',
    info: {
      ...ABOUT,
      version,
    },
  },
  swaggerUrl: SWAGGER_URL
});

export default Configure