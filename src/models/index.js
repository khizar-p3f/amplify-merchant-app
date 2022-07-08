// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Payments, Merchants, PaymentsMerchants } = initSchema(schema);

export {
  Payments,
  Merchants,
  PaymentsMerchants
};