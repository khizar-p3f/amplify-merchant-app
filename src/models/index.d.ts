import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PaymentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MerchantsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentsMerchantsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Payments {
  readonly id: string;
  readonly vendor_name?: string | null;
  readonly api_key?: string | null;
  readonly secret_key?: string | null;
  readonly email?: string | null;
  readonly logo?: string | null;
  readonly Merchants?: (PaymentsMerchants | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Payments, PaymentsMetaData>);
  static copyOf(source: Payments, mutator: (draft: MutableModel<Payments, PaymentsMetaData>) => MutableModel<Payments, PaymentsMetaData> | void): Payments;
}

export declare class Merchants {
  readonly id: string;
  readonly name?: string | null;
  readonly company?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly paymentss?: (PaymentsMerchants | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Merchants, MerchantsMetaData>);
  static copyOf(source: Merchants, mutator: (draft: MutableModel<Merchants, MerchantsMetaData>) => MutableModel<Merchants, MerchantsMetaData> | void): Merchants;
}

export declare class PaymentsMerchants {
  readonly id: string;
  readonly payments: Payments;
  readonly merchants: Merchants;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PaymentsMerchants, PaymentsMerchantsMetaData>);
  static copyOf(source: PaymentsMerchants, mutator: (draft: MutableModel<PaymentsMerchants, PaymentsMerchantsMetaData>) => MutableModel<PaymentsMerchants, PaymentsMerchantsMetaData> | void): PaymentsMerchants;
}