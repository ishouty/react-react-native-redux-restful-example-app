import gql from 'graphql-tag'

export const GET_USERS = gql`
  query {
    users {
      id
      userType
      lastName
      firstName
      email
    }
  }
`
