import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import session from 'express-session';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import passport from 'passport';

// Importaciones corregidas
import { PORT, HOSTNAME, MONGO_URL, COOKIE_KEY } from './src/utils/secrets.js';

import productRouter from './src/routers/product.router.js';
import userRouter from './src/routers/user.router.js';
import categoryRouter from './src/routers/categories.router.js'
import payMethodRouter from './src/routers/payMethod.router.js';
import salesRouter from './src/routers/sales.router.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Corregido: debe ser windowMs
    max: 100 // Aumenté el límite a 100 peticiones por 15 minutos
});
app.use(limiter);


app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/payMethod', payMethodRouter);
app.use('/sales', salesRouter);


app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

// Manejador de errores debe tener 4 parámetros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salio mal :( ' });
});

// Conexión a MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('Error de conexion a MongoDB', err));



app.listen(PORT, HOSTNAME, () => {
    console.log(`El server va tudu bene en ${HOSTNAME}:${PORT}`);
});     