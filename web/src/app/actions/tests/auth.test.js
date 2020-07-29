import { submitLoginUser } from '../auth'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import userReducer, { initialState } from '../../reducers/users'
import axios from 'axios'
import { browserHistory } from 'react-router'

jest.mock('axios')
jest.mock('../../selectors/auth')

jest.mock('react-router', () => ({
  browserHistory: {
    push: jest.fn()
  }
}))

import { getinstanceAxios } from '../../services/http'

jest.mock('../../services/http', () => ({
  getinstanceAxios: () => ({
    defaults: {
      headers: {
        common: []
      }
    }
  })
}))

import { getAccessTokenSelector } from '../../selectors/auth'

const mockStore = configureStore([thunk])
const store = mockStore({ ...initialState })
store.replaceReducer(userReducer)

describe('auth actions', () => {
  it('successful login should direct the user to /app/users', async (done) => {
    try {
      axios.post.mockImplementation(() =>
        Promise.resolve({ data: { results: [] } })
      )

      getAccessTokenSelector.mockImplementation(() => {
        return 'mock access token'
      })

      await submitLoginUser(
        { email: 'hhu@huh.com', password: 'test' },
        store.dispatch
      )

      done()

      expect(browserHistory.push).toBeCalledWith('/app/users')
    } catch (error) {
      console.log(error)
      done()
    }
  })
})
