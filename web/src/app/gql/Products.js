import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query {
    products(filter: {}) {
      title
      price
      description
      imagesUrl
    }
  }
`
