import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';
import { MicroserviceModule } from './microservice/microservice.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    FlowersModule,
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'SEND MESSAGE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 8877 },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
