import { Router } from 'express';
import PingController from '../controllers/PingController';

const pingRouter = Router();

pingRouter.get('/', PingController);

export default pingRouter;