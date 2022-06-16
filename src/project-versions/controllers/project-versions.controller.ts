import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectVersionsService } from '../services/project-versions.service';

@Controller('project-versions')
export class ProjectVersionsController {
  constructor(
    private readonly projectVersionsService: ProjectVersionsService,
  ) {}

  @Post()
  create(@Body() createProjectVersionDto) {
    return this.projectVersionsService.create(createProjectVersionDto);
  }

  @Get()
  findAll() {
    return this.projectVersionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectVersionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectVersionDto) {
    return this.projectVersionsService.update(+id, updateProjectVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectVersionsService.remove(+id);
  }
}
