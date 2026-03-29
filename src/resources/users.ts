// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
// User management is not exposed via the SDK. Use the dashboard (JWT) for platform users.
// Business holders are identified by email + names when creating accounts (POST /api/v1/accounts).

import { APIResource } from '../core/resource';

export class Users extends APIResource {
  // No SDK methods: user creation and listing are platform-only (dashboard).
}

export interface UserCreateResponse {
  status: string;
  user_id: string;
}

export interface UserCreateParams {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  'X-Environment': 'sandbox' | 'production';
}

export declare namespace Users {
  export { type UserCreateResponse as UserCreateResponse, type UserCreateParams as UserCreateParams };
}
