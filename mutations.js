/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayments = /* GraphQL */ `
  mutation CreatePayments(
    $input: CreatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    createPayments(input: $input, condition: $condition) {
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
export const updatePayments = /* GraphQL */ `
  mutation UpdatePayments(
    $input: UpdatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    updatePayments(input: $input, condition: $condition) {
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
export const deletePayments = /* GraphQL */ `
  mutation DeletePayments(
    $input: DeletePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    deletePayments(input: $input, condition: $condition) {
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
export const createMerchants = /* GraphQL */ `
  mutation CreateMerchants(
    $input: CreateMerchantsInput!
    $condition: ModelMerchantsConditionInput
  ) {
    createMerchants(input: $input, condition: $condition) {
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
export const updateMerchants = /* GraphQL */ `
  mutation UpdateMerchants(
    $input: UpdateMerchantsInput!
    $condition: ModelMerchantsConditionInput
  ) {
    updateMerchants(input: $input, condition: $condition) {
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
export const deleteMerchants = /* GraphQL */ `
  mutation DeleteMerchants(
    $input: DeleteMerchantsInput!
    $condition: ModelMerchantsConditionInput
  ) {
    deleteMerchants(input: $input, condition: $condition) {
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
