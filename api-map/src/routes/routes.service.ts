import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';

type TOriginDestiny = {
  id: number,
  name: string,
  lat: number,
  long: number,
  origin_destiny_id: number,
  origin_id?: number
  destiny_id?: number
}

type TLocal = {
  origin?: TOriginDestiny,
  destiny?: TOriginDestiny
}

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) { }

  async create(createRouteDto: CreateRouteDto) {
    const routeIdPair = {
      origin_id: createRouteDto.origin_id,
      destiny_id: createRouteDto.destiny_id
    };

    let locals: TLocal = {};

    const originDestiny = await this.prisma.originDestiny.create({
      data: {
        origin_id: Number(createRouteDto.origin_id),
        destiny_id: Number(createRouteDto.destiny_id),
      }
    })

    for (const routerId in routeIdPair) {
      if (routerId === "origin_id") {
        const local = await this.prisma.local.create({
          data: {
            name: "nome origem",
            lat: 0,
            long: 0,
            origin_destiny_id: originDestiny.id
          }
        });
        locals.origin = { ...local, origin_id: Number(routeIdPair[routerId]) }

      }

      if (routerId === "destiny_id") {
        const local = await this.prisma.local.create({
          data: {
            name: "nome destino",
            lat: 0,
            long: 0,
            origin_destiny_id: originDestiny.id
          }
        });
        locals.destiny = { ...local, destiny_id: Number(routeIdPair[routerId]) }

      }
    }

    const RouteInfo = await this.prisma.routeInfo.create({
      data: {
        name: "nome da rota",
        origin_local_id: locals.origin.id,
        destiny_local_Id: locals.destiny.id,
        distance: 7.82,
        duration: 0.25
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
        duration: true
      }
    })
    return RouteInfo;
  }

  findAll() {
    return `This action returns all routes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
