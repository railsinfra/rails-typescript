// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rails from 'rails';

const client = new Rails({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.create({ account_type: 'checking' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.create({
      account_type: 'checking',
      currency: 'currency',
      email: 'dev@stainless.com',
      environment: 'environment',
      first_name: 'first_name',
      last_name: 'last_name',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.accounts.list({ user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.accounts.list({ user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Mock server tests are disabled
  test.skip('close', async () => {
    const responsePromise = client.accounts.close('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deposit: only required params', async () => {
    const responsePromise = client.accounts.deposit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deposit: required and optional params', async () => {
    const response = await client.accounts.deposit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
      description: 'description',
    });
  });

  // Mock server tests are disabled
  test.skip('transfer: only required params', async () => {
    const responsePromise = client.accounts.transfer('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
      to_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('transfer: required and optional params', async () => {
    const response = await client.accounts.transfer('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
      to_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'description',
    });
  });

  // Mock server tests are disabled
  test.skip('updateStatus', async () => {
    const responsePromise = client.accounts.updateStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('withdraw: only required params', async () => {
    const responsePromise = client.accounts.withdraw('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('withdraw: required and optional params', async () => {
    const response = await client.accounts.withdraw('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 'amount',
      description: 'description',
    });
  });
});
