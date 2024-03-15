'use client'

import {
  Button,
  Card,
  Form,
  FormLayout,
  Text,
  TextField,
} from '@shopify/polaris'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

export default function HomePage() {
  const { trigger, isMutating, data } = useSWRMutation(
    '/api/auth/auth-url',
    getAuthURL,
  )
  const [shop, setShop] = useState('')

  return (
    <div className="mx-auto max-w-lg  ">
      <Card roundedAbove="lg">
        <Form
          onSubmit={(e) => {
            const data = new FormData(e.currentTarget)
            const shop = data.get('shop') as string
            trigger(shop)
          }}
        >
          <FormLayout>
            <Text as="h1" variant="headingXl">
              Get started
            </Text>
            <TextField
              value={shop}
              onChange={setShop}
              requiredIndicator
              label="Shop"
              type="text"
              name="shop"
              autoComplete="off"
              helpText={
                <span>
                  We’ll use this email address to inform you on future changes
                  to Polaris.
                </span>
              }
              connectedRight={
                <Text as="span" variant="headingMd">
                  .myshopify.com
                </Text>
              }
            />

            <Button loading={isMutating || !!data} submit variant="primary">
              Submit
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </div>
  )
}

async function getAuthURL(path: string, { arg: shop }: { arg: string }) {
  const url = new URL(path, location.href)
  url.searchParams.append('shop', shop + '.myshopify.com')
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      location.href = data.url
      return data
    })
}
