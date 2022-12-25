import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { UploadService } from './upload.service';

export const multerOptions = {
  // Enable file size limits
  limits: {
    fileSize: 200000,
  },
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
};

@Controller('upload')
@ApiTags('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  //   @UseGuards(AuthGuard())
  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.upload(file);
  }
}
