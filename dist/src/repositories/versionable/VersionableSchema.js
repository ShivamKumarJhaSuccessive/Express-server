"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VersionableSchema extends mongoose_1.Schema {
    constructor(options, collections) {
        const versionedOptions = Object.assign({
            originalId: {
                required: true,
                type: String,
            },
            createdAt: {
                default: Date.now,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
        }, options);
        super(versionedOptions, collections);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=VersionableSchema.js.map