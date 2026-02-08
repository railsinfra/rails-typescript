// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create account
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/api/v1/accounts', { body, ...options });
  }

  /**
   * Retrieve account
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/api/v1/accounts/${id}`, options);
  }

  /**
   * List accounts
   */
  list(query: AccountListParams, options?: RequestOptions): APIPromise<AccountListResponse> {
    return this._client.get('/api/v1/accounts', { query, ...options });
  }

  /**
   * Close account
   */
  close(id: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.delete(path`/api/v1/accounts/${id}`, options);
  }

  /**
   * Deposit into account
   */
  deposit(
    id: string,
    body: AccountDepositParams,
    options?: RequestOptions,
  ): APIPromise<AccountDepositResponse> {
    return this._client.post(path`/api/v1/accounts/${id}/deposit`, { body, ...options });
  }

  /**
   * Transfer between accounts
   */
  transfer(
    id: string,
    body: AccountTransferParams,
    options?: RequestOptions,
  ): APIPromise<AccountTransferResponse> {
    return this._client.post(path`/api/v1/accounts/${id}/transfer`, { body, ...options });
  }

  /**
   * Update account status
   */
  updateStatus(id: string, body: AccountUpdateStatusParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/api/v1/accounts/${id}`, { body, ...options });
  }

  /**
   * Withdraw from account
   */
  withdraw(
    id: string,
    body: AccountWithdrawParams,
    options?: RequestOptions,
  ): APIPromise<AccountWithdrawResponse> {
    return this._client.post(path`/api/v1/accounts/${id}/withdraw`, { body, ...options });
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
  account_type: 'checking' | 'saving';

  user_id: string;

  currency?: string;

  environment?: string | null;

  organization_id?: string | null;
}

export interface AccountListParams {
  user_id: string;
}

export interface AccountDepositParams {
  amount: string;

  description?: string | null;
}

export interface AccountTransferParams {
  amount: string;

  to_account_id: string;

  description?: string | null;
}

export interface AccountUpdateStatusParams {
  status?: 'active' | 'suspended' | 'closed';
}

export interface AccountWithdrawParams {
  amount: string;

  description?: string | null;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountDepositResponse as AccountDepositResponse,
    type AccountTransferResponse as AccountTransferResponse,
    type AccountWithdrawResponse as AccountWithdrawResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
    type AccountDepositParams as AccountDepositParams,
    type AccountTransferParams as AccountTransferParams,
    type AccountUpdateStatusParams as AccountUpdateStatusParams,
    type AccountWithdrawParams as AccountWithdrawParams,
  };
}
