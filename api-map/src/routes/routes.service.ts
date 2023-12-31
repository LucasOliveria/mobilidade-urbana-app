import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DirectionsService } from 'src/maps/directions/directions.service';
import { StaticMapsService } from 'src/maps/static-maps/static-maps.service';

type TOriginDestiny = {
  id: number,
  name: string,
  lat: number,
  long: number,
  origin_destiny_id: number,
  origin_id?: string
  destiny_id?: string
}

type TLocal = {
  origin?: TOriginDestiny,
  destiny?: TOriginDestiny
}

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService, private directionsService: DirectionsService, private staticMapsService: StaticMapsService) { }

  async create(createRouteDto: CreateRouteDto) {
    const { routes } = await this.directionsService.getDirections(
      createRouteDto.origin_id,
      createRouteDto.destiny_id
    )

    const steps = routes[0].legs[0].steps;
    const arraySteps = [];
    const legs = routes[0].legs[0];
    const overview_polyline = routes[0].overview_polyline.points;

    for (const step of steps) {
      arraySteps.push(step.html_instructions);
    }

    const routeIdPair = {
      origin_id: createRouteDto.origin_id,
      destiny_id: createRouteDto.destiny_id
    };

    let locals: TLocal = {};

    const originDestiny = await this.prisma.originDestiny.create({
      data: {
        origin_id: createRouteDto.origin_id,
        destiny_id: createRouteDto.destiny_id
      }
    })

    for (const routerId in routeIdPair) {
      if (routerId === "origin_id") {
        const local = await this.prisma.local.create({
          data: {
            name: legs.start_address,
            lat: legs.start_location.lat,
            long: legs.start_location.lng,
            origin_destiny_id: originDestiny.id
          }
        });

        locals.origin = { ...local, origin_id: routeIdPair[routerId] }
      }

      if (routerId === "destiny_id") {
        const local = await this.prisma.local.create({
          data: {
            name: legs.end_address,
            lat: legs.end_location.lat,
            long: legs.end_location.lng,
            origin_destiny_id: originDestiny.id
          }
        });

        locals.destiny = { ...local, destiny_id: routeIdPair[routerId] }
      }
    }

    const routeInfo = await this.prisma.routeInfo.create({
      data: {
        name: createRouteDto.name,
        origin_local_id: locals.origin.id,
        destiny_local_Id: locals.destiny.id,
        distance: legs.distance.value,
        duration: legs.duration.value,
        path_to_destination: arraySteps
      },
      select: {
        id: true,
        name: true,
        origin: {
          select: {
            id: true,
            name: true,
            lat: true,
            long: true,
            OriginDestiny: {
              select: {
                origin_id: true
              }
            }
          }
        },
        destiny: {
          select: {
            id: true,
            name: true,
            lat: true,
            long: true,
            OriginDestiny: {
              select: {
                destiny_id: true
              }
            }
          }
        },
        distance: true,
        duration: true,
        path_to_destination: true
      }
    });

    const { url } = await this.staticMapsService.getStaticMap(overview_polyline, routeInfo.origin.name, routeInfo.destiny.name)

    return { ...routeInfo, overview_polyline, url };
  }

  findAll() {
    return ``;
  }

  findOne(id: number) {
    return ``;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return ``;
  }

  remove(id: number) {
    return ``;
  }
}
