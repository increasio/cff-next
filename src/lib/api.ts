import { getSdk } from '@/graphql/generated/sdk'
import { GraphQLClient } from 'graphql-request'

const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
const client = new GraphQLClient(endpoint)
export const api = getSdk(client)
