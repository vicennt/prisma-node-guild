import { Module } from '@nestjs/common';
import { ProjectVersionService } from './services/project-version.service';
import { ProjectVersionController } from './controllers/project-version.controller';

@Module({
  controllers: [ProjectVersionController],
  providers: [ProjectVersionService],
})
export class ProjectVersionsModule {}
