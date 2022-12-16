import { Injectable, Logger } from '@nestjs/common';
import {
  S3,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Express } from 'express';

@Injectable()
export class S3Service {
  private logger = new Logger(S3Service.name);
  private accessKeyId: string;
  private secretAccessKey: string;
  private region: string;
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.region = configService.get<string>('S3_REGION');
    this.accessKeyId = configService.get<string>('S3_ACCESS_KEY_ID');
    this.secretAccessKey = configService.get<string>('S3_SECRET_ACCESS_KEY');
    this.s3 = new S3({
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }

  async uploadFile(file: Express.Multer.File, key: string): Promise<string> {
    const bucket = this.configService.get<string>('S3_BUCKET');
    const input: PutObjectCommandInput = {
      Body: file.buffer,
      Bucket: bucket,
      Key: key,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };

    try {
      const response: PutObjectCommandOutput = await this.s3.send(
        new PutObjectCommand(input),
      );
      if (response.$metadata.httpStatusCode === 200) {
        return `https://${bucket}.s3.${this.region}.amazonaws.com/${key}`;
      }
      throw new Error('Image not saved in s3!');
    } catch (err) {
      this.logger.error('Cannot save file to s3,', err);
      throw err;
    }
  }
}
