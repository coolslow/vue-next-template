import { AxiosRequestConfig } from 'axios';
import { BaseApi } from '../common/request/base';

export class UserApi extends BaseApi {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }
}

