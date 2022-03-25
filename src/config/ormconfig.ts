/* eslint-disable prettier/prettier */
import * as path from 'path';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "qawsed11122001",
    "database": "transport",
    "entities": [path.resolve(__dirname, '..', 'db', 'models', '*')],
    "migrations": [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
    "cli": {
        "migrationsDir": "src/db/migrations/*{.ts,.js}"
    }
}

