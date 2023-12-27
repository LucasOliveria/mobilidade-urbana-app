import { Test, TestingModule } from '@nestjs/testing';
import { RoutemapsController } from './routemaps.controller';
import { RoutemapsService } from './routemaps.service';

describe('RoutemapsController', () => {
  let controller: RoutemapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutemapsController],
      providers: [RoutemapsService],
    }).compile();

    controller = module.get<RoutemapsController>(RoutemapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
