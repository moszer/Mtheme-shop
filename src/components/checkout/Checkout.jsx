// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('sk_test_51OG3ONAEKN9WuSMCKd6q4JznCKuooUlbzuJ2dbbz1PvGZxdXGpIJz1FKFkcQgILQhSjANkvHCPZXte3m26LnhzY300BXKrQt3v');

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
