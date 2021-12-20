import { userRepository, BCRYPT_SALT_ROUNDS } from './../../libs/seedData';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import * as bcrypt from 'bcrypt'



class trainees{
    async get(req:Request, res:Response, next: NextFunction){
        const userData = await userRepository.findAll({});
        return res.status(200).send({message: 'Fetched data Succesfully',data: userData});
        
    }
    async post( req: Request, res: Response, next: NextFunction){
        const {name,email,password} = req.body;
        const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const newUser = { name,email, password: passwordHash };
        const userData = await userRepository.createDoc(newUser);
        return res.status(200).send({message:'trainee added succesfully',data:{userData}});
    }
    createToken(req: Request, res: Response, next: NextFunction) {
        try {
          const token = jwt.sign(req.body, configuration.secret, { expiresIn: '15m' });
          return res.status(200).send({ message: 'Token created successfully.', data: { token }, status: 'success' });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
    }
   
}
export default new trainees;