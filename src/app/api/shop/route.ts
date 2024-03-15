import { NextRequest, NextResponse } from 'next/server'
import { getGraphqlClient } from '~/lib/shopify'

export async function GET(request: NextRequest) {
  const client = getGraphqlClient()
  const data = await client.request(`
  query { 
    shop {
      name
      currencyCode
      checkoutApiSupported
      taxesIncluded
      resourceLimits {
        maxProductVariants
      }
    }
  }
  `)

  return NextResponse.json(data)
}

export const dynamic = 'force-dynamic'
