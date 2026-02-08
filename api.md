# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>

Methods:

- <code title="post /api/v1/users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountCloseResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountDepositResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountTransferResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountUpdateStatusResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountWithdrawResponse</a></code>

Methods:

- <code title="post /api/v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>
- <code title="get /api/v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>
- <code title="get /api/v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /api/v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">close</a>(id) -> AccountCloseResponse</code>
- <code title="post /api/v1/accounts/{id}/deposit">client.accounts.<a href="./src/resources/accounts.ts">deposit</a>(id, { ...params }) -> AccountDepositResponse</code>
- <code title="post /api/v1/accounts/{id}/transfer">client.accounts.<a href="./src/resources/accounts.ts">transfer</a>(id, { ...params }) -> AccountTransferResponse</code>
- <code title="patch /api/v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">updateStatus</a>(id, { ...params }) -> AccountUpdateStatusResponse</code>
- <code title="post /api/v1/accounts/{id}/withdraw">client.accounts.<a href="./src/resources/accounts.ts">withdraw</a>(id, { ...params }) -> AccountWithdrawResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListByAccountResponse</a></code>

Methods:

- <code title="get /api/v1/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(id) -> TransactionRetrieveResponse</code>
- <code title="get /api/v1/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="get /api/v1/accounts/{account_id}/transactions">client.transactions.<a href="./src/resources/transactions.ts">listByAccount</a>(accountID, { ...params }) -> TransactionListByAccountResponse</code>
