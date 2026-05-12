// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rails from 'rails';

const client = new Rails({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audit.events', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.audit.events.list({
      action: 'accounts.money.transfer',
      environment: 'sandbox',
      page: 1,
      per_page: 25,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
