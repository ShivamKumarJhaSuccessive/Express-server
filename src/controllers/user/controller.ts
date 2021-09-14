import { Request, Response, NextFunction } from 'express';

class user{
    get(req:Request, res:Response, next:NextFunction){
        const users = [
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },

        ];
        return res.status(200).send({message: 'Fetched data Succesfully',data: users});
        
    }
    post( req: Request, res: Response, next: NextFunction){
        const {name,designation,location} = req.body;
        if(!name){
            return res.status(400).send({message:'required trainee details', error: 'error msg'});
        }
        return res.status(200).send({message:'trainee added succesfully'});
    }
   
}
export default new user;