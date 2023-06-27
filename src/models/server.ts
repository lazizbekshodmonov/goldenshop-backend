import express, { Application, NextFunction, Response, Request } from 'express';
import morgan from 'morgan'
import config from '../config'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import flash from 'connect-flash'
import db from '../db/connection';
import product_router from '../routes/rest_api';
import admin_router from '../routes/admin_panel'
import { create } from 'express-handlebars';
const hbs = create({
    defaultLayout: 'main',
    extname: '.hbs'
})

class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db();
            console.log('Database connected');
        } catch (error: any) {
            console.error(error, 'Error connecting to DB');
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan(':method - :url - :status - DATE: :date[clf]'))
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cookieParser())
        this.app.use(session({
            secret: 'Golden_shop',
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(flash());
        this.app.engine('hbs', hbs.engine);
        this.app.set('view engine', 'hbs');
        this.app.set('views', './views');
    }
    // [:response-time ms]
    routes() {
        this.app.use(config.apiPaths.products, product_router,);
        this.app.use(config.apiPaths.admin, admin_router)
    }
    listen() {
        this.app.listen(config.port, () => {
            console.log(`Server up and running at url: http://localhost:${config.port}`);
        })
    }

}

export default Server;