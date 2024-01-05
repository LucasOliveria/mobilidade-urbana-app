import { Test, TestingModule } from '@nestjs/testing';
import { StaticMapsService } from './static-maps.service';

describe('StaticMapsService', () => {
  let service: StaticMapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaticMapsService],
    }).compile();

    service = module.get<StaticMapsService>(StaticMapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
