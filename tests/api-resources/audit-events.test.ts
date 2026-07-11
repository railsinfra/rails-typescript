// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rails from 'railsinfra';

const client = new Rails({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditEvents', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.auditEvents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auditEvents.list(
        {
          action: 'action',
          environment: 'sandbox',
          from: '2019-12-27T18:11:19.117Z',
          outcome: 'success',
          page: 1,
          per_page: 1,
          target_id: 'target_id',
          target_type: 'target_type',
          to: '2019-12-27T18:11:19.117Z',
          'X-Environment': 'sandbox',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Rails.NotFoundError);
  });
});
