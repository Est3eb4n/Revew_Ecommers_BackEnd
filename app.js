import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser'
import productRouter from './routers/product.router.js';
import userRouter from './routers/user.router.js';
import categoryRouter from './routers/categories.router.js'
import payMethodRouter from './routers/payMethod.router.js';
import salesRouter from './routers/sales.router.js';

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static(`${import.meta.dirname}/public`));

app.use ('/user', userRouter);
app.use ('/product', productRouter);
app.use ('/category', categoryRouter);
app.use ('/payMethod', payMethodRouter);
app.use ('/sales', salesRouter);

app.listen({
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
},
()=> {
    console.log(`server running melo http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`)
});     