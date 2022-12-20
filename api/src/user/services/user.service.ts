import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserInfoDto } from '../dto/updateUserInfoDto';
import { UpdatePhoneDto } from '../dto/update-phone.dto';
import { updateEmailDto } from '../dto/update-email.dto';
import { updatePasswordDto } from '../dto/update-password.dto';
import { S3Service } from 'src/aws-s3/s3.service';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../models/user.model';
import { Model } from 'mongoose';
import { UploadPictureDto } from '../dto/upload-picture.dto';
import { Not } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private s3Service: S3Service,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, 10);

    // check exists
    const userInDb = await this.userModel.findOne({ email: userDto.email });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.userModel.create(userDto);
  }

  async findByLogin({ email, password }: LoginUserDto) {
    const user = await this.userModel.findOne({ email: email });

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
    return await this.userModel.findOne({
      email: email,
    });
  }

  async findById(id) {
    return await this.userModel.findOne({
      _id: id,
    });
  }

  async updateInfo(id: string, updateInfo: UpdateUserInfoDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateInfo, {
      new: true,
    });

    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }

  async updatePhone(id: string, updatePhone: UpdatePhoneDto): Promise<User> {
    const user = await this.userModel.findById(id);

    const checkPhone = await this.userModel.findOne({
      phone: updatePhone.phone,
      id: { $ne: user.id },
    });
    if (checkPhone) {
      throw new HttpException(
        'Số điện thoại này đã được dùng',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } else {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        updatePhone,
        {
          new: true,
        },
      );
      return updatedUser;
    }
  }

  async updateEmail(id: string, updateEmail: updateEmailDto): Promise<User> {
    const user = await this.userModel.findById(id);

    const checkEmail = await this.userModel.findOne({
      email: updateEmail.email,
      id: { $ne: user.id },
    });
    if (checkEmail) {
      console.log(checkEmail);
      throw new HttpException(
        'Email này đã được dùng',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } else {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        updateEmail,
        {
          new: true,
        },
      );
      return updatedUser;
    }
  }

  async updatePassword(
    id: string,
    updatePassword: updatePasswordDto,
  ): Promise<User> {
    updatePassword.password = await bcrypt.hash(updatePassword.password, 10);
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updatePassword,
      { new: true },
    );

    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }
  async addAvatar(file: Express.Multer.File, id: string): Promise<User> {
    const user = await this.userModel.findOne({
      _id: id,
    });
    const bucketKey = `${file.fieldname}${Date.now()}`;
    const url = await this.s3Service.uploadFile(file, bucketKey);

    user.profileImage = url;
    return user.save();
  }
}
