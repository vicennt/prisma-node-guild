import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Post()
  create(@Body() createProjectVersionDto) {
    return this.projectsService.create(createProjectVersionDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: any) {
    return this.projectsService.update({
      where: { id: Number(id) },
      data: { ...updateProjectDto },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove({ id: Number(id)});
  }
}
