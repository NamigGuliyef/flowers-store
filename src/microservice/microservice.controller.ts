import { Controller } from '@nestjs/common';
import { MicroserviceService } from './microservice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('microservice')
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @EventPattern('message')
  sendMessage(message: string) {
    this.microserviceService.sendMessage(message);
  }
}
