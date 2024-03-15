'use client'

import { Button, ButtonProps } from '@shopify/polaris'
import { useFormStatus } from 'react-dom'

function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus()
  return <Button loading={pending} {...props} />
}

export { SubmitButton }
