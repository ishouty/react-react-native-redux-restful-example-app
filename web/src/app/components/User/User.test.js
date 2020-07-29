import React, { Component } from 'React'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import User from './User'

describe('User', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it.only('should render the entire user profile', () => {
    const component = shallow(
      <User
        user={{
          name: {
            first: 'nguyen',
            last: 'nguyen'
          },
          firstName: 'andy',
          lastName: 'nguyen',
          email: 'admin@test.com',
          userType: 'admin',
          cell: '09393093093',
          picture: {
            picture: {
              medium: 'http://www.image.jpg'
            }
          }
        }}
      />
    )

    const componentHtml = component.html()

    expect(componentHtml).toMatchSnapshot()
    expect(componentHtml).toMatch(/andy/)
    expect(componentHtml).toMatch(/nguyen/)
    expect(componentHtml).toMatch(/admin@test.com/)
    expect(componentHtml).toMatch(/andy/)
    expect(componentHtml).toMatch(/09393093093/)
    expect(componentHtml).toMatch(/profile-container/)
  })

  it('should render the user profile without profile avatar', () => {
    const component = shallow(
      <User
        user={{
          firstName: 'andy',
          lastName: 'nguyen',
          email: 'admin@test.com',
          userType: 'admin',
          cell: '09393093093'
        }}
        displayAvatar={false}
      />
    )

    expect(component.find('.profile-container').exists()).toBe(false)
  })
})
