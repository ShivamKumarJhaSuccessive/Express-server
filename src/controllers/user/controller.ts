import { userRepository, BCRYPT_SALT_ROUNDS } from './../../libs/seedData';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import * as bcrypt from 'bcrypt'



class user{
    async get(req:Request, res:Response, next: NextFunction){
        try {
            const limit = Math.abs(JSON.parse(req.query.limit as string));
            const skip = Math.abs(JSON.parse(req.query.skip as string));
            const sortByDate = { createdAt: req.query.sort };
            const sortByName = { name: req.query.name };
            const sortByEmail = { email: req.query.email };
            
            const role = { role: 'trainee' };
            const data1 = await userRepository.findAll({}).select(role).limit(limit).skip(skip).sort([[sortByDate], [sortByName], [sortByEmail]]);
            const allUserCount = await userRepository.countDoc({});
            const dataAll = [{ Total_User_in_db: allUserCount, Total_User_from_query: data1 }];
            return res.status(200).send({ message: 'All User received.', data: dataAll, status: 'success' });
          } catch (err) {
            return res.status(500).json({ message: err.message });
          }
        
    }
    async post( req: Request, res: Response, next: NextFunction){
        const {name,email,password} = req.body;
        const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const newUser = { name,email, password: passwordHash };
        const userData = await userRepository.createDoc(newUser);
        return res.status(200).send({message:'user added succesfully',data:{userData}});
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
export default new user;