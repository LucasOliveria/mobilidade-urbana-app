import { Module } from '@nestjs/common';
import { RoutemapsService } from './routemaps.service';
import { RoutemapsController } from './routemaps.controller';

@Module({
  controllers: [RoutemapsController],
  providers: [RoutemapsService],
})
export class RoutemapsModule {}
