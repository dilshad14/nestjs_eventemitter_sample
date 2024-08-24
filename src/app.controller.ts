import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly eventEmitter: EventEmitter2) {}

  @Get()
  async getHello(): Promise<string> {
    console.log('Request received : ', new Date().toISOString());

    this.eventEmitter.emit('REQUEST_HIT', new Date().toISOString());

    await new Promise(resolve => setTimeout(resolve, 20)); // 20 ms delay
    return this.appService.getHello();
            // Emit an event when the user is created

  }


}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
