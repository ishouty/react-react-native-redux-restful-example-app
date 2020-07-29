import ApolloClient from 'apollo-boost'
import Config from 'Config'

export const apolloClient = new ApolloClient({
  uri: Config.APOLLO_URL,
  request: (operation) => {
    const token = localStorage.getItem('access_token')

    console.log('get token details from apollo client', token)
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        clientId: Config.CLIENT_ID
      }
    })
  }
})
