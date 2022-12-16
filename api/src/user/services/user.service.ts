import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserInfoDto } from '../dto/updateUserInfoDto';
import { UpdatePhoneDto } from '../dto/update-phone.dto';
import { updateEmailDto } from '../dto/update-email.dto';
import { updatePasswordDto } from '../dto/update-password.dto';
import { S3Service } from 'src/aws-s3/s3.service';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private s3Service: S3Service,
  ) {}

  async create(userDto: CreateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, 10);

    // check exists
    const userInDb = await this.userRepository.findByCondition({
      email: userDto.email,
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.userRepository.create(userDto);
  }

  async findByLogin({ email, password }: LoginUserDto) {
    const user = await this.userRepository.findByCondition({
      email: email,
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const is_equal = bcrypt.compareSync(password, user.password);

    if (!is_equal) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findByEmail(email) {
    return await this.userRepository.findByCondition({
      email: email,
    });
  }

  async findById(id) {
    return await this.userRepository.findByCondition({
      _id: id,
    });
  }

  async updateInfo(id: string, updateInfo: UpdateUserInfoDto) {
    const updatedUser = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      updateInfo,
    );

    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }

  async updateOne(id: string, data: any) {
    // data.password = await bcrypt.hash(data.password, 10);
    const updatedUser = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      data,
    );

    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }

  async updatePhone(id: string, updatePhone: UpdatePhoneDto) {
    const user = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      updatePhone,
    );

    const checkPhone = await this.userRepository.findByCondition({
      phone: user.phone,
    });
    if (checkPhone) {
      throw new HttpException(
        `Error update phone ${user.phone} user`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    user.phone = updatePhone.phone;

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updateEmail(id: string, updateEmail: updateEmailDto) {
    const user = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      updateEmail,
    );

    const checkPhone = await this.userRepository.findByCondition({
      email: user.email,
    });
    if (checkPhone) {
      throw new HttpException(
        `Error update phone ${user.email} user`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    user.email = updateEmail.email;

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updatePassword(id: string, updatePassword: updatePasswordDto) {
    updatePassword.password = await bcrypt.hash(updatePassword.password, 10);
    const updatedUser = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      updatePassword,
    );

    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }
  async addAvatar(file: Express.Multer.File, id: string) {
    const user = await this.userRepository.findByCondition({
      _id: id,
    });

    if (user.id !== id) {
      throw new HttpException('You cannot update your profile picture!', 400);
    }
    const bucketKey = `${file.fieldname}${Date.now()}`;
    const url = await this.s3Service.uploadFile(file, bucketKey);

    const updatedUser = await this.userRepository.findByIdAndUpdate(
      { _id: id },
      { profileImage: url },
    );
    return updatedUser;
  }
}
