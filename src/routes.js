import { Router} from 'express';

import authMiddleware from './app/middlewares/auth';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import FormularioController from './app/controllers/FormularioController';
import EstruturaController from './app/controllers/EstruturaController';
import UnidadeController from './app/controllers/UnidadeController';
import ProcedimentoController from './app/controllers/ProcedimentoController';
import TomadaContasController from './app/controllers/TomadaContasController';

const routes = new Router();

routes.post('/users', UsuarioController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UsuarioController.update);

routes.post('/forms', FormularioController.store);
routes.get('/forms', FormularioController.index);
routes.put('/forms/:form_id', FormularioController.update);

routes.get('/forms/:form_id/estruturas', EstruturaController.index);
routes.post('/forms/:form_id/estruturas', EstruturaController.store);
routes.put('/forms/:form_id/estruturas/:estrutura_id', EstruturaController.update);
routes.delete('/forms/:form_id/estruturas/:estrutura_id', EstruturaController.delete);

routes.get('/forms/:form_id/unidades', UnidadeController.index);
routes.post('/forms/:form_id/unidades', UnidadeController.store);
routes.put('/forms/:form_id/unidades/:unidade_id', UnidadeController.update);
routes.delete('/forms/:form_id/unidades/:unidade_id', UnidadeController.delete);

routes.get('/forms/:form_id/procedimentos', ProcedimentoController.index);
routes.post('/forms/:form_id/procedimentos', ProcedimentoController.store);
routes.put('/forms/:form_id/procedimentos/:procedimento_id', ProcedimentoController.update);
routes.delete('/forms/:form_id/procedimentos/:procedimento_id', ProcedimentoController.delete);

routes.get('/forms/:form_id/tomada_contas', TomadaContasController.index);
routes.post('/forms/:form_id/tomada_contas', TomadaContasController.store);
routes.put('/forms/:form_id/tomada_contas/:tomadaContas_id', TomadaContasController.update);
routes.delete('/forms/:form_id/tomada_contas/:tomadaContas_id', TomadaContasController.delete);

export default routes;