import { Client as GoogleClient } from '@googlemaps/google-maps-services-js';
import { Module } from '@nestjs/common';
import { PlacesService } from './places/places.service';
import { PlacesController } from './places/places.controller';
import { DirectionsService } from './directions/directions.service';
import { DirectionsController } from './directions/directions.controller';
import { PointsOfInterestService } from './points-of-interest/points-of-interest.service';
import { PointsOfInterestController } from './points-of-interest/points-of-interest.controller';
import { StaticMapsController } from './static-maps/static-maps.controller';
import { StaticMapsService } from './static-maps/static-maps.service';

@Module({
  providers: [
    {
      provide: GoogleClient,
      useValue: new GoogleClient({})
    },
    PlacesService,
    DirectionsService,
    PointsOfInterestService,
    StaticMapsService
  ],
  controllers: [PlacesController, DirectionsController, PointsOfInterestController, StaticMapsController],
  exports: [DirectionsService, StaticMapsService]
})
export class MapsModule { }
