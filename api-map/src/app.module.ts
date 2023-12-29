import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MapsModule } from './maps/maps.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RoutesModule, PrismaModule, MapsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
