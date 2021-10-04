import { Router } from 'express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';

export interface ISwaggerDefinition {
    swaggerDefinition: {
        basePath: string;
        info: {
            description: string;
            title: string;
            version: string;
        },
    };
}

export default class Swagger {
    public getRouter({ swaggerDefinition }: ISwaggerDefinition) {
        const router = Router();

        router.route('/')
          .get((req, res) => {
              // options for the swagger docs
              const options = {
                  // path to the API docs
                  apis: ['dist/**/*.js'],
                  // import swaggerDefinitions
                  swaggerDefinition,
              };

              // initialize swagger-jsdoc
              const swaggerSpec = swaggerJSDoc(options);
              res.send(swaggerSpec);
          });
        return router;
    }

    public getUI(swaggerUrl: string) {
        const options = {
            swaggerUrl: `${swaggerUrl}.json`,
        };

        return {
            serve: swaggerUi.serve,
            setup: swaggerUi.setup(undefined, options),
        };
    }
}