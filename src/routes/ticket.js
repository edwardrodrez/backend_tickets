import routerx from 'express-promise-router';
import ticketcontroller from '../controller/ticket.controller'

const app = routerx()


//get
app.get('/list', ticketcontroller.list);




export default app;