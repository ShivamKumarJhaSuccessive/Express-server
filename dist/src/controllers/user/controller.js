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
const seedData_1 = require("./../../libs/seedData");
const jwt = require("jsonwebtoken");
const configuration_1 = require("../../config/configuration");
const bcrypt = require("bcrypt");
class user {
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = Math.abs(JSON.parse(req.query.limit));
                const skip = Math.abs(JSON.parse(req.query.skip));
                const sortByDate = { createdAt: req.query.sort };
                const sortByName = { name: req.query.name };
                const sortByEmail = { email: req.query.email };
                const role = { role: 'trainee' };
                const data1 = yield seedData_1.userRepository.findAll({}).select(role).limit(limit).skip(skip).sort([[sortByDate], [sortByName], [sortByEmail]]);
                const allUserCount = yield seedData_1.userRepository.countDoc({});
                const dataAll = [{ Total_User_in_db: allUserCount, Total_User_from_query: data1 }];
                return res.status(200).send({ message: 'All User received.', data: dataAll, status: 'success' });
            }
            catch (err) {
                return res.status(500).json({ message: err.message });
            }
        });
    }
    post(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const passwordHash = yield bcrypt.hash(password, seedData_1.BCRYPT_SALT_ROUNDS);
            const newUser = { name, email, password: passwordHash };
            const userData = yield seedData_1.userRepository.createDoc(newUser);
            return res.status(200).send({ message: 'user added succesfully', data: { userData } });
        });
    }
    createToken(req, res, next) {
        try {
            const token = jwt.sign(req.body, configuration_1.default.secret, { expiresIn: '15m' });
            return res.status(200).send({ message: 'Token created successfully.', data: { token }, status: 'success' });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
exports.default = new user;
//# sourceMappingURL=controller.js.map