"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
const utils_1 = require("./utils");
const constant_1 = require("./constant");
const validation_1 = require("./utils/validation");
console.log('----------------------Patterns----------------------');
// Prints Diamond Pattern
(0, patterns_1.diamond)(10);
console.log();
// Prints Equilateral Triangle Pattern
(0, patterns_1.equilateral)(10);
console.log();
console.log('----------------------Users----------------------');
// Validates the Users
(0, validation_1.default)(constant_1.users);
console.log();
console.log('----------------------Permissions----------------------');
// Prints if Users have the Permissions
console.log((0, utils_1.hasPermission)('getUsers', 'head-trainer', 'all'));
console.log((0, utils_1.hasPermission)('getUsers', 'trainee', 'write'));
console.log((0, utils_1.hasPermission)('getUsers', 'trainer', 'delete'));
//# sourceMappingURL=index.js.map