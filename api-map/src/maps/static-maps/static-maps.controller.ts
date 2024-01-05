import { Controller, Get, Query } from '@nestjs/common';
import { StaticMapsService } from './static-maps.service';

@Controller('static-maps')
export class StaticMapsController {
  constructor(private readonly staticMap: StaticMapsService) { }

  @Get()
  getStaticMap(@Query("enc") enc: string, @Query("origin") origin: string, @Query("destiny") destiny: string) {
    return this.staticMap.getStaticMap(enc, origin, destiny)
  }
}
