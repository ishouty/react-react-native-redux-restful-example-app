import React, { Component } from 'react'
import Navigation from './Navigation'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { initialState } from '../../../reducers/navigation'

describe('Navigation', () => {
  test('Navigation Component renders Links', () => {
    const component = shallow(
      <Navigation
        navigationLinks={initialState.navigationLinks.links}
      />
    )

    expect(component.find('li').length).toBe(5)
  })
})
