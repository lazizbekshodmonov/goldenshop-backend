import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || "8000",
    apiPaths: {
        products: '/api',
        auth: '/api/auth',
        admin: '/'
    },
    dbConfig: {
        db: process.env.DB || '<DB_NAME>',
        user: process.env.DB_USER || '<DB_USER>',
        password: process.env.DB_PASSWORD || '<DB_PASSWORD>',
        host: process.env.DB_HOST || '<DB_HOST>',
        port: Number(process.env.DB_PORT) || 1433
    },
    jwtConfig: {
        secret_cey: process.env.JWT_SECRET_KEY || '<secret_key>'
    }
}