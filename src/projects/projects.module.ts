import { Module } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { ProjectController } from './controllers/project.controller';
import { PrismaService } from '../core/services/prisma.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService],
})
export class ProjectsModule {}
