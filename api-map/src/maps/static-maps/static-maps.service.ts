import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { staticMapUrl } from "static-google-map";

@Injectable()
export class StaticMapsService {
  constructor(private configService: ConfigService) { }

  async getStaticMap(enc: string, origin: string, destiny: string) {
    const url = staticMapUrl({
      key: this.configService.get('GOOGLE_API_KEY'),
      size: '1600x800',
      format: 'png',
      maptype: 'roadmap',
      markers: [
        {
          color: 'green',
          label: "O",
          location: origin
        },
        {
          color: 'red',
          label: "D",
          location: destiny
        }
      ],
      paths: [
        {
          color: '0x0000ff',
          points: `enc:${enc}`
        }
      ]
    })
    return { url }
  }
}
