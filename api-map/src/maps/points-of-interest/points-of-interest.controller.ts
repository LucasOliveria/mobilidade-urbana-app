import { Controller, Get, Query } from '@nestjs/common';
import { PointsOfInterestService } from './points-of-interest.service';

@Controller('points-of-interest')
export class PointsOfInterestController {

  constructor(private readonly pointsOfInterestService: PointsOfInterestService) { }

  @Get()
  getPoints(@Query('text') text: string, @Query('type') type: string) {
    return this.pointsOfInterestService.getPoints(text, type);
  }
}
