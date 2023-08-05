import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIP_SECRETE_KEY, {
  apiVersion: '2022-11-15',
});

export { stripe };
