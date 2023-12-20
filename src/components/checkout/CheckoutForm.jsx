// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // You may want to validate the amount here before creating a token

    const { token, error } = await stripe.createToken(cardElement, {
      currency: 'usd',
      value: amount * 100, // Convert amount to cents
    });

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server to handle the payment
      console.log(token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Custom Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
