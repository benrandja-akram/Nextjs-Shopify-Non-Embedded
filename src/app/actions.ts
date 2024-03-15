'use server'

import { redirect } from 'next/navigation'
import { deleteAuthCookies } from '~/lib/cookies'

export async function logout() {
  deleteAuthCookies()
  redirect('/')
}
