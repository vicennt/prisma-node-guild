import { Module } from '@nestjs/common';
import { ProjectVersionsService } from './services/project-versions.service';
import { ProjectVersionsController } from './controllers/project-versions.controller';

@Module({
  controllers: [ProjectVersionsController],
  providers: [ProjectVersionsService],
})
export class ProjectVersionsModule {}
