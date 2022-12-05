import { Paging } from './Paging';

export class ResponseData {
  readonly status: number;
  readonly success: string;
  readonly data: any;
  readonly paging?: Paging;
  readonly code?: number;
  constructor(
    status: number,
    data: any,
    success?: string,
    paging?: Paging,
    code?: number,
  ) {
    this.status = status;
    this.success = success || 'true';
    this.data = data;
    this.paging = paging;
    this.code = code;
  }
}
