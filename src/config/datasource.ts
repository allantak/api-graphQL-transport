/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm"
import * as path from 'path';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qawsed11122001",
    database: "transport",
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
})

export = { AppDataSource }