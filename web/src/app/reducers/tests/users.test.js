import usersReducer, { initialState } from '../users'
import { createStore } from 'redux'
import * as actionTypes from '../../actions/actionTypes'
const mockStore = createStore(usersReducer)

describe('users reducer', () => {
  describe('LOADED_USERS', () => {
    it('should return payload if page is equal 1 or doesnt match criteria', () => {
      mockStore.dispatch({
        type: actionTypes.LOADED_USERS,
        page: 1,
        payload: [
          {
            firstName: 'mock',
            lastName: 'test',
            cell: '920290299'
          }
        ]
      })

      expect(mockStore.getState()).toEqual({
        users: [
          { cell: '920290299', firstName: 'mock', lastName: 'test' }
        ],
        usersPage: 1,
        usersTotalPages: 100
      })
    })

    it('should return payload of initial state plus new payload items', () => {
      mockStore.dispatch({
        type: actionTypes.CLEAR_STATE
      })

      const mockUsersPage1 = [
        {
          firstName: 'mock',
          lastName: 'test 1',
          cell: '920290299'
        },
        {
          firstName: 'mock',
          lastName: 'test 2',
          cell: '920290299'
        }
      ]

      const mockUsersPage2 = [
        {
          firstName: 'mock',
          lastName: 'test 3',
          cell: '920290299'
        },
        {
          firstName: 'mock',
          lastName: 'test 4',
          cell: '920290299'
        }
      ]

      mockStore.dispatch({
        type: actionTypes.LOADED_USERS,
        page: 1,
        payload: mockUsersPage1
      })

      //before
      mockStore.dispatch({
        type: actionTypes.LOADED_USERS,
        page: 2,
        payload: mockUsersPage2
      })

      expect(mockStore.getState()).toEqual({
        users: [
          {
            firstName: 'mock',
            lastName: 'test 1',
            cell: '920290299'
          },
          {
            firstName: 'mock',
            lastName: 'test 2',
            cell: '920290299'
          },
          {
            firstName: 'mock',
            lastName: 'test 3',
            cell: '920290299'
          },
          { firstName: 'mock', lastName: 'test 4', cell: '920290299' }
        ],
        usersPage: 2,
        usersTotalPages: 100
      })
    })
  })
})

it('should reset password completeResetPassword to true ', () => {
  const mockStoreInitial = createStore(usersReducer)

  mockStoreInitial.dispatch({
    type: actionTypes.RESET_PASSWORD,
    payload: {
      completeResetPassword: true
    }
  })

  expect(mockStoreInitial.getState()).toEqual({
    ...initialState,
    users: [],
    usersPage: 1,
    usersTotalPages: 100,
    completeResetPassword: { completeResetPassword: true }
  })
})
