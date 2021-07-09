import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider} from '@apollo/client';

import './index.css';
import client from './components/apollo';
import App from './components/App';



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
