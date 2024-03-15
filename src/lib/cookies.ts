import { cookies } from 'next/headers'
import { ACCESS_TOKEN_COOKIE, SHOP_COOKIE } from './constants'

function getAccessTokenCookie() {
  return cookies().get(ACCESS_TOKEN_COOKIE)?.value
}
function getShopCookie() {
  return cookies().get(SHOP_COOKIE)?.value
}

function setAuthCookies({
  accessToken,
  shop,
}: {
  accessToken: string
  shop: string
}) {
  const cookiesParams = {
    path: '/',
    maxAge: 3600 * 1000 * 24 * 365,
    httpOnly: true,
  }
  cookies().set({
    ...cookiesParams,
    name: ACCESS_TOKEN_COOKIE,
    value: accessToken,
  })
  cookies().set({
    ...cookiesParams,
    name: SHOP_COOKIE,
    value: shop,
  })
}

function deleteAuthCookies() {
  cookies().delete(SHOP_COOKIE)
  cookies().delete(ACCESS_TOKEN_COOKIE)
}

export {
  deleteAuthCookies,
  getAccessTokenCookie,
  getShopCookie,
  setAuthCookies,
}
