import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProjectVersionService } from '../services/project-version.service';

@Controller('project-version')
export class ProjectVersionController {
  constructor(private readonly projectVersionService: ProjectVersionService) {}

  @Post()
  create(@Body() createProjectVersionDto) {
    return this.projectVersionService.create(createProjectVersionDto);
  }

  @Get()
  findAll() {
    return this.projectVersionService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectVesionDto: any) {
    return this.projectVersionService.update({
      where: { id: Number(id) },
      data: { ...updateProjectVesionDto },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectVersionService.remove({ id: Number(id)});
  }
}
