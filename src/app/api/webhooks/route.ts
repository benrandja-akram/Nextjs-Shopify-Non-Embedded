import { NextRequest, NextResponse } from 'next/server'
import { shopify } from '~/lib/shopify'

export async function POST(request: NextRequest) {
  await shopify.webhooks.process({
    rawBody: await request.text(),
    rawRequest: request,
  })
  return new NextResponse('Success')
}
