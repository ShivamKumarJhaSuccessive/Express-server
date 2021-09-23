import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt' 
import Configure from '../config/configuration';
export const BCRYPT_SALT_ROUNDS: number = 10;

export const userRepository: UserRepository = new UserRepository();
export default async () => {
    const res = await userRepository.count()
        try {
            console.log('res',res);

            if (res === 0) {
                console.log('Data seeding in progress');
                const hash = await bcrypt.hash(Configure.password,BCRYPT_SALT_ROUNDS)

                userRepository.create(
                    {
                     name : 'Head-Trainer' , 
                     role: 'head-trainer', 
                     email: 'headtrainer@successive.tech', 
                     password: hash
                    }
                );
                userRepository.create(
                    {
                     name : 'Trainer' , 
                     role: 'trainer', 
                     email: 'trainer@successive.tech', 
                     password: hash
                    }
                );
            }   
        } catch (error) {
          console.log('error',error)  
        }
           
        
};