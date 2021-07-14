import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({uri:'http://localhost:3000/graphql'}),
  cache: new InMemoryCache()
});

const App =  
<ApolloProvider client={client}>
  <Routes />
</ApolloProvider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
