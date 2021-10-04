"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traineeRepository = exports.userRepository = exports.BCRYPT_SALT_ROUNDS = void 0;
const UserRepository_1 = require("../repositories/user/UserRepository");
const bcrypt = require("bcrypt");
const configuration_1 = require("../config/configuration");
const TraineeRepository_1 = require("../repositories/trainee/TraineeRepository");
exports.BCRYPT_SALT_ROUNDS = 10;
exports.userRepository = new UserRepository_1.default();
exports.traineeRepository = new TraineeRepository_1.default();
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    let res;
    res = yield exports.userRepository.count();
    try {
        console.log('res', res);
        if (res === 0) {
            console.log('Data seeding in progress');
            const hash = yield bcrypt.hash(configuration_1.default.password, exports.BCRYPT_SALT_ROUNDS);
            exports.userRepository.create({
                name: 'Trainee',
                role: 'Trainee',
                email: 'Trainee@successive.tech',
                password: hash
            });
            exports.userRepository.create({
                name: 'Trainee2',
                role: 'trainee',
                email: 'Trainee@successive.tech',
                password: hash
            });
        }
    }
    catch (error) {
        console.log('error', error);
    }
    res = yield exports.traineeRepository.count();
    try {
        console.log('res', res);
        if (res === 0) {
            console.log('Data seeding in progress');
            const hash = yield bcrypt.hash(configuration_1.default.password, exports.BCRYPT_SALT_ROUNDS);
            exports.traineeRepository.create({
                name: 'Head-Trainer',
                role: 'head-trainer',
                email: 'headtrainer@successive.tech',
                password: hash
            });
            exports.traineeRepository.create({
                name: 'Trainer',
                role: 'trainer',
                email: 'trainer@successive.tech',
                password: hash
            });
        }
    }
    catch (error) {
        console.log('error', error);
    }
});
//# sourceMappingURL=seedData.js.map