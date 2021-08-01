import { Router, Request, Response } from 'express';

//import { home } from '../controllers/homeController';
import * as homeController from '../controllers/homeController';
import * as infoController from '../controllers/infoController';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', homeController.home);

router.get('/contato', infoController.contato);
router.get('/sobre', infoController.sobre);

router.get('/envio', userController.envio);
router.post('/envio-resultado', userController.envio_result);

// Após configurar o router todo, tenho que exporta-lo
export default router;