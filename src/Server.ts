import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import router from './routes';
import Database from './libs/Database'


export default class Server {

  private app: express.Express;

  /**
	  * This is constructor
	  * @param config
	  */
  constructor(private config: any) {
    this.app = express();
  }

  get application() {
    return this.app;
  }

  middleware1(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('middleWare1');
    next();
  }

  middleware2(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('middleWare2');
    next();
  }
  /**
   * To setup route
   */
  setupRoutes() {
    const { app } = this;
    

    // Route 1
    app.get('/health-check', this.middleware1, this.middleware2, (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('health-check api called.');
      res.status(200).json({
        status: 200,
        message: 'I am OK',
      });
    });

    // Route 2
    app.post('/data', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('post request', req.body);
      res.send('I am OK');
    });

    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  /**
   * To setup Body-Parser
   */
  initBodyParser() {
    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({extended: true}));

    // parse application/json
    this.app.use(bodyParser.json());
  }

  /**
   * To bootstrap our app
   * @returns
   */
  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  /**
   * To run
   * MongoDB Database First
   * Then, Server
   */
  async run() {
    const { port, env,url} = this.config;
    try {
      await Database.open(url)
      this.app.listen(port, () => {
        const message = `|| App is running at port '${port}' in '${env}' mode ||`;
        console.log(message);
      });
    }
    catch (error) {
     await Database.disconnect(url)
      console.log('Server connection error.', error);
    }
    return this;
  }
}
