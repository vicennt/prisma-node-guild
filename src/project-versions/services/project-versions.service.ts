import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectVersionsService {
  create(createProjectVersionDto) {
    return 'This action adds a new projectVersion';
  }

  findAll() {
    return `This action returns all projectVersions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectVersion`;
  }

  update(id: number, updateProjectVersionDto) {
    return `This action updates a #${id} projectVersion`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectVersion`;
  }
}
