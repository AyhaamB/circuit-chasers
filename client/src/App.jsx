import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O4lpjH0VRa1NCtjpHyymJ7hdaoMtdDBjOs9r0RE5ba0HORH9S4rHZEfLeJbZYrFUIJjt9jaS2il6OQinxYvqPBN00XhZLLlMy');

//import header
import Header from './componets/Header.jsx'
import Footer from './componets/Footer.jsx'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Elements stripe={stripePromise}>
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh">
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    </ApolloProvider>
    </Elements>
  );
}

export default App;
