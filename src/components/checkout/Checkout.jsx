// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51OG3ONAEKN9WuSMCX2XcTXmSRHKKJRQc4gZkJ6WtChrt21420M6rWT1LzZBUKZunQZ6mjV8S2OapeUIgx63aQ4DP00YfyUNagx');

const Checkout = () => {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
