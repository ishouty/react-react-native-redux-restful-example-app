import PlainLayout from '../PlainLayout'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jsdom-global/register'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { initialState } from '../../mocks/initialState'

const mockStore = configureStore([thunk])
const store = mockStore({ ...initialState })

describe('PlainLayout', () => {
  it.only('Should match snapshot and render main within PlainLayout', () => {
    const wrapper = mount(
      <Provider store={store}>
        <PlainLayout children={'hello plain layout'} />
      </Provider>
    )

    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
})
