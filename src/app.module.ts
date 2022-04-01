/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormconfig';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    RepoModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
