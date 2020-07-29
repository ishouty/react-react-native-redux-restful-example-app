import { path } from 'ramda'

export const getAccessTokenSelector = (login) => {
  console.log('get access token selector')
  return path(['data', 'access_token'], login)
}
