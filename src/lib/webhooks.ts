import { DeliveryMethod } from '@shopify/shopify-api'
import '@shopify/shopify-api/adapters/web-api'

const webhookParams = {
  deliveryMethod: DeliveryMethod.Http as const,
  callbackUrl: '/api/webhooks',
  async callback(
    topic: string,
    shop: string,
    webhookRequestBody: string,
    webhookId: string,
  ) {
    console.log({ topic, shop, webhookId })
  },
}

const webhooks = {
  PRODUCTS_CREATE: [webhookParams],
  PRODUCTS_UPDATE: [webhookParams],
}

export { webhooks }
