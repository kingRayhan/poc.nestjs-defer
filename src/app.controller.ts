import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import helloWorld from './defer/helloWorld';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await helloWorld(`Defer-${Date.now()}`);
    return this.appService.getHello();
  }
}
