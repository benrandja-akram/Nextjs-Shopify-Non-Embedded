/**
 * TODO: implement your own auth logic
 */

import { getAccessTokenCookie, getShopCookie } from './cookies'

function isAuthenticated() {
  return Boolean(getAccessTokenCookie() && getShopCookie())
}

export { isAuthenticated }
