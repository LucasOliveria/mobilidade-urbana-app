import { DirectionsRequest, Client as GoogleClient, Language, TravelMode, } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DirectionsService {

  constructor(private configService: ConfigService, private googleClient: GoogleClient) { }

  async getDirections(originId: string, destinyId: string) {
    const params: DirectionsRequest['params'] = {
      origin: `place_id:${originId}`,
      destination: `place_id:${destinyId}`,
      mode: TravelMode.driving,
      language: Language.pt_BR,
      key: this.configService.get('GOOGLE_API_KEY')
    }
    const response = await this.googleClient.directions({
      params
    })

    return {
      ...response.data,
      request: {
        origin: {
          place_id: params.origin,
          location: {
            lat: response.data.routes[0].legs[0].start_location.lat,
            long: response.data.routes[0].legs[0].start_location.lng
          }
        },
        destiny: {
          place_id: params.destination,
          location: {
            lat: response.data.routes[0].legs[0].end_location.lat,
            long: response.data.routes[0].legs[0].end_location.lng
          }
        },
        mode: params.mode
      }
    }
  }
}
