// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Audit events
 */
export class AuditEvents extends APIResource {
  /**
   * List audit events
   */
  list(
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditEventListResponse> {
    return this._client.get('/api/v1/audit/events', { query, ...options });
  }
}

export interface AuditEventListResponse {
  data: Array<AuditEventListResponse.Data>;

  pagination: AuditEventListResponse.Pagination;
}

export namespace AuditEventListResponse {
  export interface Data {
    id: string;

    action:
      | 'users.business.register'
      | 'users.auth.login'
      | 'users.auth.refresh'
      | 'users.auth.revoke'
      | 'users.password_reset.request'
      | 'users.password_reset.complete'
      | 'users.beta.apply'
      | 'users.api_key.create'
      | 'users.api_key.revoke'
      | 'accounts.account.create'
      | 'accounts.account.update_status'
      | 'accounts.account.close'
      | 'accounts.money.deposit'
      | 'accounts.money.withdraw'
      | 'accounts.money.transfer'
      | 'ledger.transaction.post';

    actor: Data.Actor;

    correlation_id: string;

    created_at: string;

    environment: 'sandbox' | 'production';

    metadata: { [key: string]: string };

    occurred_at: string;

    organization_id: string;

    outcome: 'success' | 'client_error' | 'server_error';

    request: Data.Request;

    schema_version: 1;

    source_service: 'users' | 'accounts' | 'ledger';

    target: Data.Target;

    reason?: string | null;
  }

  export namespace Data {
    export interface Actor {
      id: string;

      type: 'user' | 'api_key' | 'internal_service' | 'anonymous';

      roles?: Array<string>;
    }

    export interface Request {
      id: string;

      method: string;

      path: string;

      ip?: string;

      user_agent?: string;
    }

    export interface Target {
      id: string;

      type: string;
    }
  }

  export interface Pagination {
    page: number;

    per_page: number;

    total_count: number;

    total_pages: number;
  }
}

export interface AuditEventListParams {
  action?: string;

  /**
   * Environment to list audit events from. Defaults to sandbox when omitted.
   */
  environment?: 'sandbox' | 'production';

  from?: string;

  outcome?: 'success' | 'client_error' | 'server_error';

  page?: number;

  per_page?: number;

  target_id?: string;

  target_type?: string;

  to?: string;
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
