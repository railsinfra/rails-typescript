// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Rails } from '../client';

export abstract class APIResource {
  protected _client: Rails;

  constructor(client: Rails) {
    this._client = client;
  }
}
