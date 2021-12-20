"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traineeModel = exports.traineeSchema = void 0;
const mongoose = require("mongoose");
const TraineeSchema_1 = require("./TraineeSchema");
exports.traineeSchema = new TraineeSchema_1.default({
    collection: 'trainee',
});
exports.traineeModel = mongoose.model('Trainee', exports.traineeSchema, 'Trainee', true);
//# sourceMappingURL=TraineeModel.js.map