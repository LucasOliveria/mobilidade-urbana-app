import { Test, TestingModule } from '@nestjs/testing';
import { PointsOfInterestService } from './points-of-interest.service';

describe('PointsOfInterestService', () => {
  let service: PointsOfInterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointsOfInterestService],
    }).compile();

    service = module.get<PointsOfInterestService>(PointsOfInterestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
