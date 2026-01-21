// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Create user
   */
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.post('/api/v1/users', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-Environment': xEnvironment.toString() }, options?.headers]),
    });
  }
}

export interface UserCreateResponse {
  status: string;

  user_id: string;
}

export interface UserCreateParams {
  /**
   * Body param
   */
  email: string;

  /**
   * Body param
   */
  first_name: string;

  /**
   * Body param
   */
  last_name: string;

  /**
   * Body param
   */
  password: string;

  /**
   * Header param
   */
  'X-Environment': 'sandbox' | 'production';
}

export declare namespace Users {
  export { type UserCreateResponse as UserCreateResponse, type UserCreateParams as UserCreateParams };
}
