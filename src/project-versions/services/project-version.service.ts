import { Injectable } from '@nestjs/common';
import { ProjectVersion, Prisma } from '@prisma/client-guild';
import { PrismaService } from '../../core/services/prisma.service';

@Injectable()
export class ProjectVersionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.projectVersion.findMany();
  }

  async create(
    data: Prisma.ProjectVersionCreateInput
  ): Promise<ProjectVersion> {
    return this.prisma.projectVersion.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ProjectVersionWhereUniqueInput;
    data: Prisma.ProjectVersionUpdateInput;
  }): Promise<ProjectVersion> {
    const { where, data } = params;
    return this.prisma.projectVersion.update({
      data,
      where,
    });
  }

  async remove(
    where: Prisma.ProjectVersionWhereUniqueInput
  ): Promise<ProjectVersion> {
    return this.prisma.projectVersion.delete({
      where,
    });
  }
}
