"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Object.freeze({
    // POST /api/user/create
    create: {
        name: {
            required: true,
            exists: true,
            isLength: {
                errorMessage: 'Name should be at least 3 characters.',
                options: { min: 3 }
            },
            matches: /(.*[a-z]){3}/i,
            in: ['body'],
            errorMessage: 'Name is required',
        },
    },
    // DELETE /api/user/delete
    delete: {
        id: {
            required: true,
            in: ['params'],
            errorMessage: 'Id is required',
        },
    },
    // GET /api/user/get
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
    },
    // UPDATE /api/user/update
    update: {
        id: {
            required: true,
            in: ['params'],
            errorMessage: 'Id is required',
        },
        name: {
            required: true,
            exists: true,
            isLength: {
                errorMessage: 'Name should be at least 3 characters.',
                options: { min: 3 }
            },
            matches: /(.*[a-z]){3}/i,
            in: ['body'],
            errorMessage: 'Name is required',
        },
    },
});
//# sourceMappingURL=validation.js.map