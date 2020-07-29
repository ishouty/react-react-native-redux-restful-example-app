import notificationsReducer, { initialState } from '../notifications'
import { createStore } from 'redux'
import * as actionTypes from '../../actions/actionTypes'

describe('notificationsReducer', () => {
  it('will reset the notifications banner', () => {
    const mockStore = createStore(notificationsReducer)

    mockStore.dispatch({
      type: actionTypes.CLEAR_STATE
    })

    expect(mockStore.getState()).toEqual(initialState)
  })

  it('modal display and details updated', () => {
    const mockStore = createStore(notificationsReducer)

    mockStore.dispatch({
      type: actionTypes.BANNER_NOTIFICATION,
      payload: {
        banner: {
          fail: false,
          success: true,
          message: 'show banner '
        }
      }
    })

    expect(mockStore.getState()).toEqual({
      banner: {
        banner: {
          fail: false,
          success: true,
          message: 'show banner '
        }
      }
    })
  })
})
