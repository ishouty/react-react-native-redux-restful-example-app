import modalReducer from '../modal'
import { createStore } from 'redux'
import * as actionTypes from '../../actions/actionTypes'

describe('modal reducer', () => {
  it('modal display and details updated', () => {
    const mockStore = createStore(modalReducer)

    mockStore.dispatch({
      type: actionTypes.USER_DETAIL_MODAL,
      payload: {
        userDetails: {
          display: true,
          details: {
            firstName: 'andy',
            lastName: 'nguyen',
            cell: '3983983'
          }
        }
      }
    })

    expect(mockStore.getState()).toEqual({
      modal: {
        userDetails: {
          details: {
            userDetails: {
              display: true,
              details: {
                firstName: 'andy',
                lastName: 'nguyen',
                cell: '3983983'
              }
            }
          }
        }
      }
    })
  })
})
