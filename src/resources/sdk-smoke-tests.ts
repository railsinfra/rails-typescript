// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SDKSmokeTests extends APIResource {
  /**
   * SDK smoke test
   */
  ping(options?: RequestOptions): APIPromise<SDKSmokeTestPingResponse> {
    return this._client.get('/api/v1/sdk-smoke-test', options);
  }
}

export interface SDKSmokeTestPingResponse {
  ok: boolean;
}

export declare namespace SDKSmokeTests {
  export { type SDKSmokeTestPingResponse as SDKSmokeTestPingResponse };
}
