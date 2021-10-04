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
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const routes_2 = require("./routes");
const Database_1 = require("./libs/Database");
const Swagger_1 = require("./libs/Swagger");
class Server {
    /**
        * This is constructor
        * @param config
        */
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    get application() {
        return this.app;
    }
    middleware1(req, res, next) {
        console.log('middleWare1');
        next();
    }
    middleware2(req, res, next) {
        console.log('middleWare2');
        next();
    }
    /**
     * To setup route
     */
    setupRoutes() {
        const { app } = this;
        // Route 1
        app.get('/health-check', this.middleware1, this.middleware2, (req, res, next) => {
            console.log('health-check api called.');
            res.status(200).json({
                status: 200,
                message: 'I am OK',
            });
        });
        // Route 2
        app.post('/data', (req, res, next) => {
            console.log('post request', req.body);
            res.send('I am OK');
        });
        app.use('/api', routes_2.default);
        app.use(routes_1.notFoundRoute);
        app.use(routes_1.errorHandler);
    }
    /**
     * To setup Body-Parser
     */
    initBodyParser() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: true }));
        // parse application/json
        this.app.use(bodyParser.json());
    }
    /**
     * To bootstrap our app
     * @returns
     */
    bootstrap() {
        this.initBodyParser();
        this.initSwagger();
        this.setupRoutes();
        return this;
    }
    /**
     * To run
     * MongoDB Database First
     * Then, Server
     */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { port, env, url } = this.config;
            try {
                yield Database_1.default.open(url);
                this.app.listen(port, () => {
                    const message = `|| App is running at port '${port}' in '${env}' mode ||`;
                    console.log(message);
                });
            }
            catch (error) {
                yield Database_1.default.disconnect(url);
                console.log('Server connection error.', error);
            }
            return this;
        });
    }
    /**
     * Initialize Swagger
     */
    initSwagger() {
        const { swaggerDefinition, swaggerUrl } = this.config;
        const swaggerSetup = new Swagger_1.default();
        // JSON Route
        this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter({ swaggerDefinition }));
        // UI Route
        const { serve, setup } = swaggerSetup.getUI(swaggerUrl);
        this.app.use(swaggerUrl, serve, setup);
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map