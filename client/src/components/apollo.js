import {ApolloClient, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';

const link = createUploadLink({
  uri: 'http://localhost:4000/graphql'
});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client
