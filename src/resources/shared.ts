// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Transaction {
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
