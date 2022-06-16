import { Test, TestingModule } from '@nestjs/testing';
import { ProjectVersionsController } from './project-versions.controller';
import { ProjectVersionsService } from '../services/project-versions.service';

describe('ProjectVersionsController', () => {
  let controller: ProjectVersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectVersionsController],
      providers: [ProjectVersionsService],
    }).compile();

    controller = module.get<ProjectVersionsController>(
      ProjectVersionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
