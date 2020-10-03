import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * REFERENCE: https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a
 */
export class BaseApi {
  [x: string]: any;

  public constructor(config?: AxiosRequestConfig) {
    // create axios instance
    this.service = axios.create(config);
    // interceptor request
    this.service.interceptors.request.use((param: AxiosRequestConfig) => ({
      baseURL: process.env.API_BASE_URL,
      ...param
    }));
    // interceptor response
    this.service.interceptors.response.use((param: AxiosResponse) => ({
      ...param
    }));

    this.getUri = this.getUri.bind(this);
    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
    this.head = this.head.bind(this);
    this.patch = this.patch.bind(this);
  }

  /**
   * Get URI
   * 
   * @memberof Api
   * @access public
   * @param config - axios request configuration.
   * @returns {string}
   */
  public getUri(config?: AxiosRequestConfig): string {
    return this.service.getUri(config);
  }

  /**
   * Generic request
   * 
   * @memberof Api
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param config - axios request configuration.
   * @returns {Promise<R>} - HTTP axios response payload.
   */
  public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
    return this.service.request(config);
  }

  /**
   * HTTP GET method
   * 
   * @memberof Api
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint to reach.
   * @param config - axios request configuration.
   * @returns {Promise<R>} - HTTP `axios` response payload.
   */
  public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.service.get(url, config);
  }

  /**
   * HTTP POST method
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint you want to reach.
   * @param data - payload to be send as the `request body`.
   * @param config - axios request configuration.
   */
  public post<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.api.post(url, data, config);
  }

  /**
   * HTTP PUT method
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint you want to reach.
   * @param data - payload to be send as the `request body`.
   * @param config - axios request configuration.
   */
  public put<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.api.put(url, data, config);
  }

    /**
   * HTTP DELETE method
   * 
   * @memberof Api
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint to reach.
   * @param config - axios request configuration.
   */
  public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.service.delete(url, config);
  }

    /**
   * HTTP HEAD method
   * 
   * @memberof Api
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint to reach.
   * @param config - axios request configuration.
   */
  public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.service.head(url, config);
  }

  /**
   * HTTP PATCH method
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param url - endpoint you want to reach.
   * @param data - payload to be send as the `request body`.
   * @param config - axios request configuration.
   */
  public patch<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.api.patch(url, data, config);
  }

  public success<T> (response: AxiosResponse<T>): T {
    return response.data;
  }

  public error (error: AxiosError<Error>) {
      throw error;
  }
}
