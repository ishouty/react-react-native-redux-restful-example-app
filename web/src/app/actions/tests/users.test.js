import { getUsersList } from '../users'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import userReducer, { initialState } from '../../reducers/users'

import { getinstanceThirdPartyAxios } from '../../services/http'

jest.mock('../../services/http', () => ({
  getinstanceThirdPartyAxios: () => {
    const users = {
      users: [{ firstName: 'andy', lastName: 'nguyen' }],
      page: 0,
      totalPages: 20
    }

    return {
      get: jest.fn().mockImplementation(() => {
        return Promise.resolve({ data: { results: users } })
      })
    }
  }
}))

const mockStore = configureStore([thunk])
const store = mockStore({ ...initialState })
store.replaceReducer(userReducer)

describe('users actions', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('getUsersList', () => {
    it('should call @@ishouty/LOADED_USERS', async (done) => {
      const page = 1
      const pageSize = 10
      const filter = 'all'

      store
        .dispatch(getUsersList(page, pageSize, filter))
        .then(() => {
          expect(store.getActions()[2]).toEqual({
            page: 1,
            payload: {
              page: 0,
              totalPages: 20,
              users: [
                {
                  firstName: 'andy',
                  lastName: 'nguyen'
                }
              ]
            },
            type: '@@ishouty/LOADED_USERS'
          })
          done()
        })
    })
  })
})
