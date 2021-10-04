"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seedData_1 = require("./seedData");
class Database {
    static open(mongoURI) {
        return new Promise((resolve, reject) => {
            (0, mongoose_1.connect)(mongoURI, (err) => {
                if (err) {
                    console.log('Error', err);
                    return reject(err);
                }
                console.log('Connected to database', mongoURI);
                (0, seedData_1.default)();
                return resolve('Success');
            });
        });
    }
    static disconnect(mongoURI) {
        return new Promise((reject) => {
            (0, mongoose_1.disconnect)((err) => {
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
exports.default = Database;
//# sourceMappingURL=Database.js.map