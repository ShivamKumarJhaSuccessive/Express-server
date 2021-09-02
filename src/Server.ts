import * as express from 'express';

export default class Server {
  app: express.Express;
  /**
   *this is a constructor
   * @param config
   */
  constructor(private config){
   this.app = express();
  }
  /**
   * to set up routes
   */
  setupRoutes(){
  this.app.get('/health-check', function (req, res) {
    res.send('I am OK')
  })
  }
/**
 *to bootstrap
 * @returns
 */
  bootstrap(){
    this.setupRoutes()
    return this;
  }
  run(){
    this.app.listen(9000, ()=>{
      console.log('App started successfully');
    })
    return this;
  }
}
//const server = new Server(123);

