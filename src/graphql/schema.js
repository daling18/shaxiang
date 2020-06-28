/*
 * 本地 Schema
 *
 * 在 GraphQL 服务端未就绪前，本地 Schema 可用于前端先行实现接口请求逻辑
 */

import gql from 'graphql-tag'

/*
 * Schema 定义
 */
export const typeDefs = gql`
  type Query {
    platformStats: PlatformStats!
  }
  
  type PlatformStats {
    publishedAssets: Int!
    apiInvoked: Int!
    sentRecords: Int!
    totalPV: Int!
  }
`

/*
 * Resolver 定义
 */
export const resolvers = {
  Query: {
    platformStats: () => ({
      __typename: 'PlatformStats',
      publishedAssets: 3323,
      apiInvoked: 530000000,
      sentRecords: 790000000,
      totalPV: 750000000,
    }),
  },
}
