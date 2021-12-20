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
const mongoose = require("mongoose");
class VersionableRepository {
    constructor(model) {
        this.model = model;
    }
    static createObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    findOne(query) {
        const finalQuery = Object.assign({ deletedAt: undefined }, query);
        return this.model.findOne(finalQuery).lean();
    }
    find(query = {}, projection = {}, options = {}) {
        const finalQuery = Object.assign({ deletedAt: undefined }, query);
        return this.model.find(finalQuery, projection, options);
    }
    count(query = {}) {
        const finalQuery = Object.assign({ deletedAt: undefined }, query);
        return this.model.countDocuments(finalQuery);
    }
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = VersionableRepository.createObjectId();
            const model = new this.model(Object.assign(Object.assign({}, options), { _id: id, originalId: id }));
            return yield model.save();
        });
    }
    softDelete(id) {
        const oldData = { originalId: id, deleteAt: undefined };
        const newData = { deletedAt: Date.now() };
        return this.model.updateOne(oldData, newData);
    }
    hardDelete(id) {
        const ogId = { originalId: id };
        return this.model.deleteOne(ogId);
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const prevRecord = yield this.find({ originalId: data.originalId });
            if (prevRecord) {
                this.softDelete(data.originalId);
            }
            else {
                return undefined;
            }
            const newData = Object.assign(Object.assign({}, prevRecord), data);
            newData._id = VersionableRepository.createObjectId();
            delete newData.deletedAt;
            const model = new this.model(newData);
            return model.save();
        });
    }
}
exports.default = VersionableRepository;
//# sourceMappingURL=VersionableRepository.js.map