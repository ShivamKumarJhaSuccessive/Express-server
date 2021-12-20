"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./config/configuration");
const server_1 = require("./server");
const server = new server_1.default(configuration_1.default);
server.bootstrap();
server.run();
//# sourceMappingURL=index.js.map