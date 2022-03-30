/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import RepoService from './repo.service';

@Injectable()
export class AppService {
  constructor(private readonly repoService: RepoService){}
  
  async getHello(): Promise<string> { 
    return `Teste de consulta do banco ${await this.repoService.freightRepo.count()}`
  }
}
