import { Test, TestingModule } from '@nestjs/testing';
import { RoutemapsService } from './routemaps.service';

describe('RoutemapsService', () => {
  let service: RoutemapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutemapsService],
    }).compile();

    service = module.get<RoutemapsService>(RoutemapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
