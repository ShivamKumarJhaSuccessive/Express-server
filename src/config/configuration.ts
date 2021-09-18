import {config} from 'dotenv';
config();
import * as joi from '@hapi/joi';

const envVarsSchema=joi.object({
  NODE_ENV:joi.string().default('dev'),
  PORT: joi.number().default(9000),
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);

const Configure = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  secret: envVars.jwtSECRET,
});

export default Configure