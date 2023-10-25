import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from "react";

const stripePromise = loadStripe('pk_test_51O4lpjH0VRa1NCtjpHyymJ7hdaoMtdDBjOs9r0RE5ba0HORH9S4rHZEfLeJbZYrFUIJjt9jaS2il6OQinxYvqPBN00XhZLLlMy');

//import header
import Header from './componets/Header.jsx'
import Footer from './componets/Footer.jsx'
import Login from './componets/Login.jsx'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Elements stripe={stripePromise}>
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh">
        <Header toggleLoginOpen={() => setIsLoginOpen(true)}/>
        <Outlet />
        <Footer/>
      </div>
      {isLoginOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsLoginOpen(false)}>
                &times;
              </span>
              <Login />
            </div>
          </div>
        )}
    </ApolloProvider>
    </Elements>
  );
}

export default App;
