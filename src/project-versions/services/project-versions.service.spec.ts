import { Test, TestingModule } from '@nestjs/testing';
import { ProjectVersionsService } from './project-versions.service';

describe('ProjectVersionsService', () => {
  let service: ProjectVersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectVersionsService],
    }).compile();

    service = module.get<ProjectVersionsService>(ProjectVersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
