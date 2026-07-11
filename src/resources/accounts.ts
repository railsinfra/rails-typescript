// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Accounts
 */
export class Accounts extends APIResource {
  /**
   * Create account
   */
  create(params: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.post('/api/v1/accounts', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve account
   */
  retrieve(
    id: string,
    params: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    const { 'X-Environment': xEnvironment } = params ?? {};
    return this._client.get(path`/api/v1/accounts/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List accounts
   */
  list(params: AccountListParams, options?: RequestOptions): APIPromise<AccountListResponse> {
    const { 'X-Environment': xEnvironment, ...query } = params;
    return this._client.get('/api/v1/accounts', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Close account
   */
  close(
    id: string,
    params: AccountCloseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    const { 'X-Environment': xEnvironment } = params ?? {};
    return this._client.delete(path`/api/v1/accounts/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deposit into account
   */
  deposit(
    id: string,
    params: AccountDepositParams,
    options?: RequestOptions,
  ): APIPromise<AccountDepositResponse> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.post(path`/api/v1/accounts/${id}/deposit`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Transfer between accounts
   */
  transfer(
    id: string,
    params: AccountTransferParams,
    options?: RequestOptions,
  ): APIPromise<AccountTransferResponse> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.post(path`/api/v1/accounts/${id}/transfer`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Update account status
   */
  updateStatus(id: string, params: AccountUpdateStatusParams, options?: RequestOptions): APIPromise<Account> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.patch(path`/api/v1/accounts/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Withdraw from account
   */
  withdraw(
    id: string,
    params: AccountWithdrawParams,
    options?: RequestOptions,
  ): APIPromise<AccountWithdrawResponse> {
    const { 'X-Environment': xEnvironment, ...body } = params;
    return this._client.post(path`/api/v1/accounts/${id}/withdraw`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Account {
  id: string;

  account_number: string;

  account_type: 'checking' | 'saving';

  balance: string;

  currency: string;

  environment: string;

  status: 'active' | 'suspended' | 'closed';

  user_id: string;

  admin_user_id?: string | null;

  created_at?: string | null;

  organization_id?: string | null;

  updated_at?: string | null;

  user_role?: string | null;
}

export type AccountListResponse = Array<Account>;

export interface AccountDepositResponse {
  account: Account;

  transaction: Shared.Transaction;
}

export interface AccountTransferResponse {
  from_account: Account;

  to_account: Account;

  transaction: Shared.Transaction;
}

export interface AccountWithdrawResponse {
  account: Account;

  transaction: Shared.Transaction;
}

export interface AccountCreateParams {
  /**
   * Body param
   */
  account_type: 'checking' | 'saving';

  /**
   * Body param: Three-letter uppercase ISO currency code, for example USD or ZAR.
   */
  currency: string;

  /**
   * Body param
   */
  user_id: string;

  /**
   * Body param
   */
  environment?: string | null;

  /**
   * Body param
   */
  organization_id?: string | null;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountRetrieveParams {
  /**
   * Target environment for the request. Defaults to `sandbox` if not specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountListParams {
  /**
   * Query param
   */
  user_id: string;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountCloseParams {
  /**
   * Target environment for the request. Defaults to `sandbox` if not specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountDepositParams {
  /**
   * Body param
   */
  amount: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountTransferParams {
  /**
   * Body param
   */
  amount: string;

  /**
   * Body param
   */
  to_account_id: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountUpdateStatusParams {
  /**
   * Body param
   */
  status?: 'active' | 'suspended' | 'closed';

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface AccountWithdrawParams {
  /**
   * Body param
   */
  amount: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountDepositResponse as AccountDepositResponse,
    type AccountTransferResponse as AccountTransferResponse,
    type AccountWithdrawResponse as AccountWithdrawResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountListParams as AccountListParams,
    type AccountCloseParams as AccountCloseParams,
    type AccountDepositParams as AccountDepositParams,
    type AccountTransferParams as AccountTransferParams,
    type AccountUpdateStatusParams as AccountUpdateStatusParams,
    type AccountWithdrawParams as AccountWithdrawParams,
  };
}
