import navigationReducer, { initialState } from '../navigation'
import { createStore } from 'redux'
import * as actionTypes from '../../actions/actionTypes'

describe('navigation reducer', () => {
  it('modal display and details updated', () => {
    const mockStore = createStore(navigationReducer)

    mockStore.dispatch({
      type: actionTypes.SAVE_HISTORY,
      payload: {
        href: 'http://www.yahoo.co.uk'
      }
    })

    expect(mockStore.getState()).toEqual({
      ...initialState,
      previousRoute: [
        {
          href: 'http://www.yahoo.co.uk'
        }
      ]
    })
  })
})
