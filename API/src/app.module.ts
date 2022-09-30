/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormconfig';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';
import UserResolver from './resolvers/user.resolver';
import FreightResolver from './resolvers/freight.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import CarrierResolver from './resolvers/carrier.resolver';
import BodyWorkResolver from './resolvers/bodyWork.resolver';
import { ConfigModule } from '@nestjs/config'

const graphQLImports = [
  UserResolver,
  FreightResolver,
  CarrierResolver,
  BodyWorkResolver
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
