/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPayments = /* GraphQL */ `
  query GetPayments($id: ID!) {
    getPayments(id: $id) {
      id
      merchant_id
      vendor_name
      secret_key
      email
      logo
      api_key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        merchant_id
        vendor_name
        secret_key
        email
        logo
        api_key
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        merchant_id
        vendor_name
        secret_key
        email
        logo
        api_key
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMerchants = /* GraphQL */ `
  query GetMerchants($id: ID!) {
    getMerchants(id: $id) {
      id
      merchant_id
      company
      established
      country
      state
      city
      email
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMerchants = /* GraphQL */ `
  query ListMerchants(
    $filter: ModelMerchantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMerchants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        merchant_id
        company
        established
        country
        state
        city
        email
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMerchants = /* GraphQL */ `
  query SyncMerchants(
    $filter: ModelMerchantsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMerchants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        merchant_id
        company
        established
        country
        state
        city
        email
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
