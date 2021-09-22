import { userRepository } from './../../libs/seedData';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';


class trainees{
    async get(req:Request, res:Response, next: NextFunction){
        const userData = await userRepository.find({});
        return res.status(200).send({message: 'Fetched data Succesfully',data: userData});
        
    }
    post( req: Request, res: Response, next: NextFunction){
        const {name,designation,location} = req.body;
        if(!name){
            return res.status(400).send({message:'required trainee details', error: 'error msg'});
        }
        return res.status(200).send({message:'trainee added succesfully'});
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