"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    res.status(404).json({ error: 'Not Found', status: 400, message: 'Invalid Route Called.' });
    next({ error: 'Not Found', status: 400, message: 'Invalid Route Called.' });
};
//# sourceMappingURL=notFoundRoute.js.map