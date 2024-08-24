import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestHitListener } from './requestHit.listener';
import { EventEmitterModule } from '@nestjs/event-emitter';


@Module({
  imports: [
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'RequestHitListener',
      useClass: RequestHitListener,
    },
    {
      provide: 'RequestHitListener',
      useClass: RequestHitListener,
    },
    // Add more instances as needed
  ],
})
export class AppModule {}