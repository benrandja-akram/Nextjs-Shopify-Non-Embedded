'use client'

import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'

function PolarisProvider({ children }: React.PropsWithChildren) {
  return <AppProvider i18n={enTranslations}>{children}</AppProvider>
}

export { PolarisProvider }

export * from '@shopify/polaris'
