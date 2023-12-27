import { PartialType } from '@nestjs/mapped-types';
import { CreateRoutemapDto } from './create-routemap.dto';

export class UpdateRoutemapDto extends PartialType(CreateRoutemapDto) {}
