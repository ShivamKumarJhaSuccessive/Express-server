import {config} from 'dotenv';
config();
import * as joi from '@hapi/joi';

const envVarsSchema=joi.object({
  NODE_ENV:joi.string().default('dev'),
  PORT: joi.number().default(9000),
  jwtSECRET:joi.string().default(`2L'4L6P?zZW8/>s;NV$d`),
  MONGO_URL:joi.string().default('mongodb://localhost:27017/express-training'),
  PASSWORD:joi.string().default('Training@123')
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);

const Configure = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  secret: envVars.jwtSECRET,
  url:envVars.MONGO_URL,
  password:envVars.PASSWORD
});

export default Configure