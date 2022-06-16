import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client-guild';
import { GenericResponse } from '../../core/interfaces/generic-response.interface';
import { PrismaService } from '../../core/services/prisma.service';

const DEFAULT_LIMIT = 50;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async find(params: {
    page?: number;
    take?: number;
  }): Promise<GenericResponse> {

    const take = Math.abs(Number(params.take)) || DEFAULT_LIMIT;
    const page = Math.abs(Number(params.page)) || 1;
    const skip = take * (page - 1);

    const productsCount = await this.prisma.user.count();

    const result = await this.prisma.user.findMany({
      skip,
      take,
    });

    return {
      data: result,
      pagination: {
        total: productsCount,
        resultLength: result?.length,
        pageCount: Math.ceil(productsCount / take),
        currentPage: page,
        perPage: take,
        from: (page - 1) * take + 1,
        to: (page - 1) * take + result?.length,
      },
    };
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
