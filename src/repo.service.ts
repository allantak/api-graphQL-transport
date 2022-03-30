/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './db/models/user';
import Freight from './db/models/freght';
import Carrier from './db/models/carrier';
import BodyWork from './db/models/bodyWork';


@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Freight) public readonly freightRepo: Repository<Freight>,
    @InjectRepository(Carrier) public readonly carrierRepo: Repository<Carrier>,
    @InjectRepository(BodyWork) public readonly bodyWorkRepo: Repository<BodyWork>,
  ) {}
}

export default RepoService;
