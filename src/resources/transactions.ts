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

export interface TransactionListByAccountParams {
  limit?: number;
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListByAccountResponse as TransactionListByAccountResponse,
    type TransactionListByAccountParams as TransactionListByAccountParams,
  };
}
