"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TraineeModel_1 = require("./TraineeModel");
const VersionableRepository_1 = require("../versionable/VersionableRepository");
class TraineeRepository extends VersionableRepository_1.default {
    constructor() {
        super(TraineeModel_1.traineeModel);
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
exports.default = TraineeRepository;
//# sourceMappingURL=TraineeRepository.js.map