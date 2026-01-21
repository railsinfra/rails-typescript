// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rails from 'rails';

const client = new Rails({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create({
      email: 'dev@stainless.com',
      first_name: 'first_name',
      last_name: 'last_name',
      password: 'password',
      'X-Environment': 'sandbox',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.users.create({
      email: 'dev@stainless.com',
      first_name: 'first_name',
      last_name: 'last_name',
      password: 'password',
      'X-Environment': 'sandbox',
    });
  });
});
