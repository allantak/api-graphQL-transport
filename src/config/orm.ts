/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.host,
    port: parseInt(process.env.port),
    username: process.env.username,
    password: process.env.password,
    database: process.env.schema,
    entities: [process.env.Question, process.env.QuestionOption],
    migrations: ['src/migration/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migration'
    },
    synchronize: true,
  }


