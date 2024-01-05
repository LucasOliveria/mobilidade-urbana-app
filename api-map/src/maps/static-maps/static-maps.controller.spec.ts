import { Test, TestingModule } from '@nestjs/testing';
import { StaticMapsController } from './static-maps.controller';

describe('StaticMapsController', () => {
  let controller: StaticMapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaticMapsController],
    }).compile();

    controller = module.get<StaticMapsController>(StaticMapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
