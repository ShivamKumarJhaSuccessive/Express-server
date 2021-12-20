import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt' 
import Configure from '../config/configuration';
import TraineeRepository from '../repositories/trainee/TraineeRepository';
export const BCRYPT_SALT_ROUNDS: number = 10;

export const userRepository: UserRepository = new UserRepository();
export const traineeRepository: TraineeRepository= new TraineeRepository();
export default async () => {
    let res
     res = await userRepository.count()
        try {
            console.log('res',res);

            if (res === 0) {
                console.log('Data seeding in progress');
                const hash = await bcrypt.hash(Configure.password,BCRYPT_SALT_ROUNDS)

                userRepository.create(
                    {
                     name : 'Trainee' , 
                     role: 'Trainee', 
                     email: 'Trainee@successive.tech', 
                     password: hash
                    }
                );
                userRepository.create(
                    {
                     name : 'Trainee2' , 
                     role: 'trainee', 
                     email: 'Trainee@successive.tech', 
                     password: hash
                    }
                );
            }   
        } catch (error) {
          console.log('error',error)  
        }
        res = await traineeRepository.count()
        try {
            console.log('res',res);

            if (res === 0) {
                console.log('Data seeding in progress');
                const hash = await bcrypt.hash(Configure.password,BCRYPT_SALT_ROUNDS)

                traineeRepository.create(
                    {
                     name : 'Head-Trainer' , 
                     role: 'head-trainer', 
                     email: 'headtrainer@successive.tech', 
                     password: hash
                    }
                );
                traineeRepository.create(
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