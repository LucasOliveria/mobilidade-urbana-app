import { Client as GoogleClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
  constructor(private configService: ConfigService, private googleClient: GoogleClient) { }

  async findPlace(text: string) {
    const response = await this.googleClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['formatted_address', 'geometry', 'name', 'place_id'],
        key: this.configService.get('GOOGLE_API_KEY')
      }
    })

    return response.data
  }

  async findPlaces(origin: string, destiny: string) {
    const responseOrigin = await this.googleClient.findPlaceFromText({
      params: {
        input: origin,
        inputtype: PlaceInputType.textQuery,
        fields: ['formatted_address', 'geometry', 'name', 'place_id'],
        key: this.configService.get('GOOGLE_API_KEY')
      }
    })

    const responseDestiny = await this.googleClient.findPlaceFromText({
      params: {
        input: destiny,
        inputtype: PlaceInputType.textQuery,
        fields: ['formatted_address', 'geometry', 'name', 'place_id'],
        key: this.configService.get('GOOGLE_API_KEY')
      }
    })

    return [responseOrigin.data, responseDestiny.data]
  }
}
