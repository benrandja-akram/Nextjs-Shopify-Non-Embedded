import { gql } from '~/lib/gql'
import { getGraphqlClient } from '~/lib/shopify'
import { ProductsList } from './ui'

export default async function ProductsPage() {
  const client = getGraphqlClient()
  const response = await client.request(gql`
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            createdAt
            productType
          }
        }
      }
    }
  `)

  return (
    <ProductsList
      products={response.data.products.edges.map(({ node }: any) => ({
        ...node,
        id: node.id.split('/').pop(),
      }))}
    />
  )
}
