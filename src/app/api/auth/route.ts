import { NextRequest } from 'next/server'
import { shopify } from '~/lib/shopify'

export async function GET(request: NextRequest) {
  const shop = request.nextUrl.searchParams.get('shop') as string

  const callback: Response = await shopify.auth.begin({
    shop,
    callbackPath: '/api/auth/callback',
    rawRequest: request,
    isOnline: false,
  })

  return callback
}
