import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('take') take: number, @Query('page') page: number) {
    return this.usersService.find({
      take: take,
      page: page,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: any) {
    return this.usersService.update({
      where: { id: Number(id) },
      data: { ...updateProjectDto },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id: Number(id)});
  }
}
