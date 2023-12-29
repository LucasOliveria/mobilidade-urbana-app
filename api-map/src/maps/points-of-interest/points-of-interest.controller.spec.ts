import { Test, TestingModule } from '@nestjs/testing';
import { PointsOfInterestController } from './points-of-interest.controller';

describe('PointsOfInterestController', () => {
  let controller: PointsOfInterestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointsOfInterestController],
    }).compile();

    controller = module.get<PointsOfInterestController>(PointsOfInterestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
