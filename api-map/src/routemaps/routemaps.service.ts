import { Injectable } from '@nestjs/common';
import { CreateRoutemapDto } from './dto/create-routemap.dto';
import { UpdateRoutemapDto } from './dto/update-routemap.dto';

@Injectable()
export class RoutemapsService {
  create(createRoutemapDto: CreateRoutemapDto) {
    return 'This action adds a new routemap';
  }

  findAll() {
    return `This action returns all routemaps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routemap`;
  }

  update(id: number, updateRoutemapDto: UpdateRoutemapDto) {
    return `This action updates a #${id} routemap`;
  }

  remove(id: number) {
    return `This action removes a #${id} routemap`;
  }
}
