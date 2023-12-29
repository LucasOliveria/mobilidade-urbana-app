import { Client as GoogleClient } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PlacesService } from '../places/places.service';

@Injectable()
export class PointsOfInterestService {
  constructor(private configService: ConfigService, private googleClient: GoogleClient, private placesService: PlacesService) { }

  async getPoints(text: string, type: string) {
    const infoLocation = await this.placesService.findPlace(text)

    const locationLat = infoLocation.candidates[0].geometry.location.lat;
    const locationLong = infoLocation.candidates[0].geometry.location.lng;

    const response = await this.googleClient.placesNearby({
      params: {
        location: {
          lat: locationLat,
          lng: locationLong
        },
        radius: 5000,
        type: type,
        key: this.configService.get('GOOGLE_API_KEY')
      }
    });

    let results = []

    for (const result of response.data.results) {
      results.push({
        name: result.name,
        business_status: result.business_status,
        vicinity: result.vicinity,
        opening_hours: result.opening_hours,
        place_id: result.place_id,
        geometry: result.geometry
      })
    }

    return results;
  }
}
