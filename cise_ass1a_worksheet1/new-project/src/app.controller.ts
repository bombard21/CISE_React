import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { ARTICLES } from '../../../cise_ass1a_worksheet2/cise_ass1a_worksheet2/src/dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
  

