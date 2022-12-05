import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ResponseData } from 'src/common/response/ResponseData';
import { UpdateUserInfoDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard())
  @Get('profile')
  async getProfile(@Req() req: any) {
    const data = req.user;

    return new ResponseData(HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard())
  @Put('update-info')
  async updateInfo(@Req() req: any, @Body() updateUser: UpdateUserInfoDto) {
    const { id, user } = req.user;
    const data = await this.userService.updateInfo(id, updateUser);
    return new ResponseData(HttpStatus.OK, data);
  }
  // @UseGuards(AuthGuard())
  // @Put('/:id')
  // public async updateCustomer(
  //   @Res() res,
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserInfoDto,
  // ) {
  //   try {
  //     const user = await this.userService.update(id, updateUserDto);
  //     if (!user) {
  //       throw new NotFoundException('User does not exist!');
  //     }
  //     return res.status(HttpStatus.OK).json({
  //       message: 'User has been successfully updated',
  //       user,
  //     });
  //   } catch (err) {
  //     return res.status(HttpStatus.BAD_REQUEST).json({
  //       message: 'Error: Customer not updated!',
  //       status: 400,
  //     });
  //   }
  // }
}
