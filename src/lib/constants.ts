export const API_KEY = process.env.SHOPIFY_API_KEY!
export const API_SECRET_KEY = process.env.SHOPIFY_API_SECRET_KEY!
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME!

export const SERVER_HOST_SCHEME = process.env.SERVER_HOST_SCHEME as
  | 'http'
  | 'https'
export const SHOPIFY_SCOPES = process.env.SHOPIFY_SCOPES!

export const ACCESS_TOKEN_COOKIE = 'accessToken'
export const SHOP_COOKIE = 'shop'
