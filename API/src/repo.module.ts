/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BodyWork from './db/models/bodyWork';
import Carrier from './db/models/carrier';
import Freight from './db/models/freght';
import User from './db/models/user';
import RepoService from './repo.service';


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Carrier,
      Freight,
      BodyWork,
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {

}
export default RepoModule;