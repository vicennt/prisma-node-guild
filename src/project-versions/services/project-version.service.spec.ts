import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../../core/services/prisma.service';
import { ProjectVersionService } from './project-version.service';

describe('ProjectVersionService', () => {
  let service: ProjectVersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectVersionService,
        {
          provide: PrismaService,
          useFactory: () => mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    service = module.get<ProjectVersionService>(ProjectVersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
