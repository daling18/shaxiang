import Vue from 'vue'
import VueApollo from 'vue-apollo'
import 'isomorphic-unfetch'
import {createApolloClient} from 'vue-cli-plugin-apollo/graphql-client'

import runtimeArgs from '@/runtime-args'
import {errorLink, addDatesLink} from '@/utils/http'

import authClient from './auth-apollo.js'

Vue.use(VueApollo)

const defaultOptions = {
  httpEndpoint: runtimeArgs.VUE_APP_GRAPHQL_HTTP,
  tokenName: 'apollo-token',
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,
  httpLinkOptions: {
    includeExtensions: true,
    credentials: 'include',
  },
  link: errorLink.concat(addDatesLink),
}

export function createProvider (options = {}) {
  const {apolloClient} = createApolloClient({
    ...defaultOptions,
    ...options,
  })

  return new VueApollo({
    clients: {
      authClient,
      apolloClient,
      apolloUserClient: authClient,
    },
    defaultClient: apolloClient,
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
  })
}
