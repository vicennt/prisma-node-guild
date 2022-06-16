import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectVersionsModule } from './project-versions/project-versions.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ProjectsModule, ProjectVersionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
