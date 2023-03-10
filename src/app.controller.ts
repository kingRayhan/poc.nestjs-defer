import { Controller, Get, Param } from '@nestjs/common';
import { getExecution } from '@defer/client';
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

  @Get('status/:jobId')
  async jobStatus(@Param('jobId') jobId: string) {
    const status = await getExecution(jobId);
    return status;
  }
}
