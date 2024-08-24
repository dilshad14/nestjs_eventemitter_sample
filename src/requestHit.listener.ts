import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class RequestHitListener {
    @OnEvent('REQUEST_HIT')
    handleEvent(payload: any) {
        console.log('RequestHitListener :: Request Received : ', payload);
     
    }
}