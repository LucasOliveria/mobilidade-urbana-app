import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutemapsModule } from './routemaps/routemaps.module';

@Module({
  imports: [RoutemapsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
