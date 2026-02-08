// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieve transaction
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/api/v1/transactions/${id}`, options);
  }

  /**
   * List transactions by organization
   */
  list(query: TransactionListParams, options?: RequestOptions): APIPromise<TransactionListResponse> {
    return this._client.get('/api/v1/transactions', { query, ...options });
  }

  /**
   * List account transactions
   */
  listByAccount(
    accountID: string,
    query: TransactionListByAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListByAccountResponse> {
    return this._client.get(path`/api/v1/accounts/${accountID}/transactions`, { query, ...options });
  }
}

export interface TransactionRetrieveResponse {
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

export interface TransactionListResponse {
  data: Array<TransactionListResponse.Data>;

  pagination: TransactionListResponse.Pagination;
}

export namespace TransactionListResponse {
  /**
   * Transaction as returned by list-by-organization (organization_id,
   * from/to_account_id, transaction_kind).
   */
  export interface Data {
    id: string;

    /**
     * Amount in minor units
     */
    amount: number;

    created_at: string;

    currency: string;

    from_account_id: string;

    organization_id: string;

    status: 'pending' | 'posted' | 'failed';

    to_account_id: string;

    transaction_kind: 'deposit' | 'withdraw' | 'transfer';

    updated_at: string;

    environment?: string | null;

    failure_reason?: string | null;

    idempotency_key?: string;
  }

  export interface Pagination {
    page: number;

    per_page: number;

    total_count: number;

    total_pages: number;
  }
}

export type TransactionListByAccountResponse =
  Array<TransactionListByAccountResponse.TransactionListByAccountResponseItem>;

export namespace TransactionListByAccountResponse {
  export interface TransactionListByAccountResponseItem {
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

export interface TransactionListParams {
  organization_id: string;

  page?: number;

  per_page?: number;
}

export interface TransactionListByAccountParams {
  limit?: number;
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListByAccountResponse as TransactionListByAccountResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionListByAccountParams as TransactionListByAccountParams,
  };
}
