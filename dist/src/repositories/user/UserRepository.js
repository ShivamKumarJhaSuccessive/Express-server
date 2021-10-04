"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("./UserModel");
const VersionableRepository_1 = require("../versionable/VersionableRepository");
class UserRepository extends VersionableRepository_1.default {
    constructor() {
        super(UserModel_1.userModel);
    }
    findSingle(query) {
        return super.findOne(query).lean();
    }
    findAll(query, projection, options) {
        return super.find(query, projection, options);
    }
    countDoc(query = {}) {
        return super.count(query);
    }
    createDoc(data) {
        return super.create(data);
    }
    updateDoc(data) {
        return super.update(data);
    }
    deleteDoc(data) {
        return super.softDelete(data.originalId);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map