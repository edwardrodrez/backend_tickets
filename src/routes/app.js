import routerx from 'express-promise-router';
import ticket from './ticket'

const router = routerx();

router.use('/ticket', ticket);

export default router;