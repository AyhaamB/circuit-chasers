// Payment.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51O4lpjH0VRa1NCtjpHyymJ7hdaoMtdDBjOs9r0RE5ba0HORH9S4rHZEfLeJbZYrFUIJjt9jaS2il6OQinxYvqPBN00XhZLLlMy');

const Payment = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    // Fetch the client secret from your server
    fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems, currency: 'cad' }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [cartItems]);

  const handlePayment = async () => {
    if (!stripe || !elements) {

      return;
    }

    setProcessing(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name, 
        },
      },
    });

    if (result.error) {
      // Handle payment error
      console.error(result.error.message);
      setProcessing(false);
    } else {
      // Payment succeeded
      if (result.paymentIntent.status === 'succeeded') {

        console.log('Payment succeeded');
      }
    }
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <Elements stripe={stripePromise}>
        <div>
          <CardElement />
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handlePayment} disabled={processing}>
            {processing ? 'Processing...' : 'Proceed to pay.'}
          </button>
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
