/* eslint-disable prettier/prettier */
import * as path from 'path';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import 'dotenv/config';

export const config: TypeOrmModuleOptions = {
    "type": process.env.TYPE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "entities": [path.resolve(__dirname, '..', 'db', 'models', '*')],
    "migrations": [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
    "cli": {
        "migrationsDir": "src/db/migrations/*{.ts,.js}"
    }
}

