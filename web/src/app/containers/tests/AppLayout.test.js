import MainLayout from '../AppLayout'
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

describe('AppLayout', () => {
  it('Should match snapshot and render main within AppLayout', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MainLayout main={'hello main'} />
      </Provider>
    )

    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should render children within appLayout if main does not exist', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MainLayout children={'hello children'} />
      </Provider>
    )

    expect(wrapper.html()).toMatch(/hello children/gi)
  })
})
