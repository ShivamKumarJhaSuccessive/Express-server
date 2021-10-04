"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../constant");
const hasPermission = (moduleName, role, permissionType) => {
    let found;
    found = false;
    const obj = constant_1.permissions[moduleName]; // fetching the module from name
    const permission = obj[permissionType]; // fetching type of permission
    permission.forEach((element) => {
        if (element === role) {
            found = true; // if role is found in 
            return found;
        }
    });
    return found; // if not found, automatically return false
};
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map