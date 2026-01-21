// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create account
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/api/v1/accounts', { body, ...options });
  }

  /**
   * Retrieve account
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
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
  close(id: string, options?: RequestOptions): APIPromise<AccountCloseResponse> {
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
  updateStatus(
    id: string,
    body: AccountUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<AccountUpdateStatusResponse> {
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

export interface AccountCreateResponse {
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

export interface AccountRetrieveResponse {
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

export type AccountListResponse = Array<AccountListResponse.AccountListResponseItem>;

export namespace AccountListResponse {
  export interface AccountListResponseItem {
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
}

export interface AccountCloseResponse {
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

export interface AccountDepositResponse {
  account: AccountDepositResponse.Account;

  transaction: AccountDepositResponse.Transaction;
}

export namespace AccountDepositResponse {
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

  export interface Transaction {
    id: string;

    account_id: string;

    amount: string;

    balance_after: string;

    created_at: string;

    currency: string;

    status: 'pending' | 'completed' | 'failed' | 'cancelled';

    transaction_type: 'deposit' | 'withdrawal' | 'transfer' | 'recurring_payment' | 'savings_withdraw';

    updated_at: string;

    description?: string | null;

    external_recipient_id?: string | null;

    recipient_account_id?: string | null;

    reference_id?: string | null;
  }
}

export interface AccountTransferResponse {
  from_account: AccountTransferResponse.FromAccount;

  to_account: AccountTransferResponse.ToAccount;

  transaction: AccountTransferResponse.Transaction;
}

export namespace AccountTransferResponse {
  export interface FromAccount {
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

  export interface ToAccount {
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

  export interface Transaction {
    id: string;

    account_id: string;

    amount: string;

    balance_after: string;

    created_at: string;

    currency: string;

    status: 'pending' | 'completed' | 'failed' | 'cancelled';

    transaction_type: 'deposit' | 'withdrawal' | 'transfer' | 'recurring_payment' | 'savings_withdraw';

    updated_at: string;

    description?: string | null;

    external_recipient_id?: string | null;

    recipient_account_id?: string | null;

    reference_id?: string | null;
  }
}

export interface AccountUpdateStatusResponse {
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

export interface AccountWithdrawResponse {
  account: AccountWithdrawResponse.Account;

  transaction: AccountWithdrawResponse.Transaction;
}

export namespace AccountWithdrawResponse {
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

  export interface Transaction {
    id: string;

    account_id: string;

    amount: string;

    balance_after: string;

    created_at: string;

    currency: string;

    status: 'pending' | 'completed' | 'failed' | 'cancelled';

    transaction_type: 'deposit' | 'withdrawal' | 'transfer' | 'recurring_payment' | 'savings_withdraw';

    updated_at: string;

    description?: string | null;

    external_recipient_id?: string | null;

    recipient_account_id?: string | null;

    reference_id?: string | null;
  }
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
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountCloseResponse as AccountCloseResponse,
    type AccountDepositResponse as AccountDepositResponse,
    type AccountTransferResponse as AccountTransferResponse,
    type AccountUpdateStatusResponse as AccountUpdateStatusResponse,
    type AccountWithdrawResponse as AccountWithdrawResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
    type AccountDepositParams as AccountDepositParams,
    type AccountTransferParams as AccountTransferParams,
    type AccountUpdateStatusParams as AccountUpdateStatusParams,
    type AccountWithdrawParams as AccountWithdrawParams,
  };
}
