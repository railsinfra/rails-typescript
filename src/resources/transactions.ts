// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transactions
 */
export class Transactions extends APIResource {
  /**
   * Retrieve transaction
   */
  retrieve(
    id: string,
    params: TransactionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Transaction> {
    const { 'X-Environment': xEnvironment } = params ?? {};
    return this._client.get(path`/api/v1/transactions/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List transactions by organization
   */
  list(params: TransactionListParams, options?: RequestOptions): APIPromise<TransactionListResponse> {
    const { 'X-Environment': xEnvironment, ...query } = params;
    return this._client.get('/api/v1/transactions', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List account transactions
   */
  listByAccount(
    accountID: string,
    params: TransactionListByAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListByAccountResponse> {
    const { 'X-Environment': xEnvironment, ...query } = params ?? {};
    return this._client.get(path`/api/v1/accounts/${accountID}/transactions`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xEnvironment?.toString() != null ? { 'X-Environment': xEnvironment?.toString() } : undefined) },
        options?.headers,
      ]),
    });
  }
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

export type TransactionListByAccountResponse = Array<Shared.Transaction>;

export interface TransactionRetrieveParams {
  /**
   * Target environment for the request. Defaults to `sandbox` if not specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface TransactionListParams {
  /**
   * Query param
   */
  organization_id: string;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  per_page?: number;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export interface TransactionListByAccountParams {
  /**
   * Query param
   */
  limit?: number;

  /**
   * Header param: Target environment for the request. Defaults to `sandbox` if not
   * specified.
   */
  'X-Environment'?: 'sandbox' | 'production';
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListByAccountResponse as TransactionListByAccountResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
    type TransactionListByAccountParams as TransactionListByAccountParams,
  };
}
