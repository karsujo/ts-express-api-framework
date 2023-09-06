import express, { Request, Response, NextFunction, Application, json } from 'express';
import compression from 'compression';
import { config as configureDotEnv } from 'dotenv';
import setupRoutes from './routes';

const app: Application = express();

//Configure env variables
configureDotEnv();

app.use(json());
app.use(compression());

//setup routers
setupRoutes(app);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.send('Data');
});
app.listen(3030, () => console.log('listening'));
