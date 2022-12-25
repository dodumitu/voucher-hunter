import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/aws-s3/s3.service';

@Injectable()
export class UploadService {
  constructor(private s3Service: S3Service) {}
  async upload(file: Express.Multer.File) {
    const bucketKey = `${file.fieldname}${Date.now()}`;
    const url = await this.s3Service.uploadFile(file, bucketKey);

    return { success: true, url: url };
  }
}
