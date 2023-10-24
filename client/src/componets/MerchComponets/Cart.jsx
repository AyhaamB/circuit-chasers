import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51O4lpjH0VRa1NCtjpHyymJ7hdaoMtdDBjOs9r0RE5ba0HORH9S4rHZEfLeJbZYrFUIJjt9jaS2il6OQinxYvqPBN00XhZLLlMy');
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



export default function Cart() {

    const [name, setName] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const { token, error } = await stripe.createToken(elements.getElement(CardElement), {
          name,
        });
    
        if (error) {
          console.error(error);
        } else {
          // Send 'token' to server for processing the payment
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Cardholder Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Card Details:
            <CardElement />
          </label>
          <button type="submit">Pay</button>
        </form>
      );
    };

