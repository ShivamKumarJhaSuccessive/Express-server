import { connect, disconnect } from 'mongoose';
import seedData from './seedData'; 

export default class Database {
    public static open(mongoURI: string) {
        return new Promise((resolve, reject) => {
            connect(mongoURI, (err) => {
                if (err) {
                    console.log('Error', err);
                    return reject(err);
                }
                console.log('Connected to database', mongoURI);
                seedData();
                return resolve('Success');
            });
        });
    }
    public static disconnect(mongoURI: string) {
        return new Promise((reject) => {
            disconnect((err) => {
                if (err) {
                    console.log('Error', err);
                    return reject(err);
                }
                console.log('Database disconnected on app termination', mongoURI);
                process.exit(0);
            });
        });
    }
}