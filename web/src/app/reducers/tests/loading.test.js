import loadingReducer from '../loading'
import { createStore } from 'redux'
import * as actionTypes from '../../actions/actionTypes'

describe('loading reducer', () => {
  it('loading button and loading page set to true', () => {
    const mockStore = createStore(loadingReducer)

    mockStore.dispatch({
      type: actionTypes.LOADING_BTN,
      payload: {
        common: {
          loading: true
        }
      }
    })

    expect(mockStore.getState()).toEqual({
      loading: {
        common: {
          loading: true
        }
      }
    })
  })
})
