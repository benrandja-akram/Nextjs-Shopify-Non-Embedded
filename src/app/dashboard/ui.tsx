'use client'

import { Card, IndexTable, Text, useIndexResourceState } from '@shopify/polaris'

export function ProductsList({
  products,
}: {
  products: {
    title: string
    id: string
    createdAt: Date
    productType: string
  }[]
}) {
  const resourceName = {
    singular: 'product',
    plural: 'products',
  }

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products)

  const rowMarkup = products.map(
    ({ id, createdAt: date, productType: customer, title: name }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            #{id}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{name}</IndexTable.Cell>
        <IndexTable.Cell>
          {new Date(date).toLocaleDateString('en', {
            dateStyle: 'medium',
          })}
        </IndexTable.Cell>
        <IndexTable.Cell>{customer}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  )

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={products.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: 'ID' },
          { title: 'Product' },
          { title: 'Date' },
          { title: 'Type' },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  )
}
