import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App1Controller } from './app1/app1.controller';
import { App1Module } from './app1/app1.module';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [App1Module, FlowersModule],
  controllers: [AppController, App1Controller],
  providers: [AppService],
})
export class AppModule {}
