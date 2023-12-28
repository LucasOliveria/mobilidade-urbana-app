import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RoutesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
