import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoutemapsService } from './routemaps.service';
import { CreateRoutemapDto } from './dto/create-routemap.dto';
import { UpdateRoutemapDto } from './dto/update-routemap.dto';

@Controller('routemaps')
export class RoutemapsController {
  constructor(private readonly routemapsService: RoutemapsService) { }

  @Post()
  create(@Body() createRoutemapDto: CreateRoutemapDto) {
    return this.routemapsService.create(createRoutemapDto);
  }

  @Get()
  findAll() {
    return this.routemapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routemapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoutemapDto: UpdateRoutemapDto) {
    return this.routemapsService.update(+id, updateRoutemapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routemapsService.remove(+id);
  }
}
