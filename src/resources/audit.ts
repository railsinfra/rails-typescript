// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Audit
 */
export class Audit extends APIResource {
  events: Events = new Events(this._client);
}

/**
 * Audit events
 */
export class Events extends APIResource {
  /**
   * List audit events
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/api/v1/audit/events', { query, ...options });
  }
}

export interface EventListResponse {
  data: Array<EventListResponse.Data>;

  pagination: EventListResponse.Pagination;
}

export namespace EventListResponse {
  export interface Data {
    id: string;

    action: string;

    actor: Data.Actor;

    correlation_id: string;

    created_at: string;

    environment: 'sandbox' | 'production' | string;

    metadata: unknown;

    occurred_at: string;

    organization_id: string;

    outcome: 'success' | 'client_error' | 'server_error' | string;

    request: Data.Request;

    schema_version: number;

    source_service: string;

    target: Data.Target;

    reason?: string | null;
  }

  export namespace Data {
    export interface Actor {
      id: string;

      roles: Array<string>;

      type: 'user' | 'api_key' | 'internal_service' | 'anonymous' | string;
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

export interface EventListParams {
  action?: string;

  environment?: 'sandbox' | 'production';

  from?: string;

  outcome?: 'success' | 'client_error' | 'server_error';

  page?: number;

  per_page?: number;

  target_id?: string;

  target_type?: string;

  to?: string;
}

export declare namespace Audit {
  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
