import { Test, TestingModule } from '@nestjs/testing';
import { ProjectVersionController } from './project-version.controller';
import { ProjectVersionService } from '../services/project-version.service';
import { PrismaService } from '../../core/services/prisma.service';
import { mockDeep } from 'jest-mock-extended';

describe('ProjectVersionController', () => {
  let controller: ProjectVersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectVersionController],
      providers: [
        ProjectVersionService,
        {
          provide: PrismaService,
          useFactory: () => mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    controller = module.get<ProjectVersionController>(ProjectVersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
