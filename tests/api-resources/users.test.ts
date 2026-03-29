// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
// User management is not exposed via the SDK; see src/resources/users.ts.

import Rails from 'rails';

const client = new Rails({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('users resource is present on client', () => {
    expect(client.users).toBeDefined();
    expect(client.users).toBeInstanceOf(Rails.Users);
  });
});
