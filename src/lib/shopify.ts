import {
  createAdminApiClient,
  createAdminRestApiClient,
} from '@shopify/admin-api-client'
import { ApiVersion, shopifyApi } from '@shopify/shopify-api'
import '@shopify/shopify-api/adapters/web-api'

import {
  API_KEY,
  API_SECRET_KEY,
  SERVER_HOSTNAME,
  SERVER_HOST_SCHEME,
  SHOPIFY_SCOPES,
} from './constants'
import { getAccessTokenCookie, getShopCookie } from './cookies'
import { webhooks } from './webhooks'

const scopes = SHOPIFY_SCOPES.split(',')

const shopify = shopifyApi({
  apiKey: API_KEY,
  apiSecretKey: API_SECRET_KEY,
  hostName: SERVER_HOSTNAME || 'localhost:3000',
  hostScheme: SERVER_HOST_SCHEME,
  apiVersion: ApiVersion.January24,
  isEmbeddedApp: false,
  scopes,
})

shopify.webhooks.addHandlers(webhooks)

const getParams = () => ({
  apiVersion: ApiVersion.January24,
  accessToken: getAccessTokenCookie()!,
  storeDomain: getShopCookie()!,
})

const getGraphqlClient = () => {
  return createAdminApiClient(getParams())
}

const getRestClient = () => {
  return createAdminRestApiClient(getParams())
}

export { getGraphqlClient, getParams, getRestClient, shopify }
