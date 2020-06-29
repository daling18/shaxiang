import {createApolloClient} from 'vue-cli-plugin-apollo/graphql-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {errorLink, addDatesLink} from '@/utils/http'
import runtimeArgs from '@/runtime-args'

const defaultOptions = {
  httpEndpoint: runtimeArgs.VUE_APP_AUTH_FRONTIER_URL,
  wsEndpoint: null,
  tokenName: 'apollo-token',
  persisting: false,
  websocketsOnly: false,
  ssr: false,
  httpLinkOptions: {
    includeExtensions: true,
    credentials: 'include',
  },
  link: errorLink.concat(addDatesLink),
  cache: new InMemoryCache({freezeResults: false}),
}

const {apolloClient} = createApolloClient({
  ...defaultOptions,
})

export default apolloClient
