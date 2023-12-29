import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {

  constructor(private readonly placesService: PlacesService) { }

  @Get()
  findPlace(@Query('text') text: string) {
    return this.placesService.findPlace(text)
  }

  @Get("twoplaces")
  findPlaces(@Query('origin') origin: string, @Query('destiny') destiny: string) {
    return this.placesService.findPlaces(origin, destiny)
  }
}
