import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  sendMessage(message: string) {
    console.log('microservice', message);
  }
}
