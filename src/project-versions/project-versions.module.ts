import { Module } from '@nestjs/common';
import { ProjectVersionService } from './services/project-version.service';
import { ProjectVersionController } from './controllers/project-version.controller';
import { PrismaService } from '../core/services/prisma.service';

@Module({
  controllers: [ProjectVersionController],
  providers: [ProjectVersionService, PrismaService],
})
export class ProjectVersionsModule {}
