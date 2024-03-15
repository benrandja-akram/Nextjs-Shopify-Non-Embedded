import { NextRequest, NextResponse } from 'next/server'
import { setAuthCookies } from '~/lib/cookies'
import { shopify } from '~/lib/shopify'

export async function GET(request: NextRequest) {
  try {
    const result = await shopify.auth.callback({
      rawRequest: request,
      rawResponse: new NextResponse(),
    })
    if (!result.session.accessToken) throw new Error('NO access token')

    await shopify.webhooks.register({
      session: result.session,
    })
    setAuthCookies({
      accessToken: result.session.accessToken,
      shop: result.session.shop,
    })

    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  } catch (e: any) {
    console.error(e)

    return NextResponse.redirect(new URL(`/?error=${e.code}`, request.nextUrl))
  }
}
export const dynamic = 'force-dynamic'
