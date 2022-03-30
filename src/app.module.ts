/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormconfig';
import RepoModule from './repo.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
