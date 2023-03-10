import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import helloWorld from './defer/helloWorld';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const defer = await helloWorld(`Defer-${Date.now()}`);
    return {
      hello: this.appService.getHello(),
      defer,
    };
  }
}
