import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {

  constructor(private readonly directionsService: DirectionsService) { }

  @Get()
  getDirections(@Query('originId') originId: string, @Query('destinyId') destinyId: string) {
    return this.directionsService.getDirections(originId, destinyId);
  }
}
