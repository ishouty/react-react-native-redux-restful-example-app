import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EmptyPlaceHolder from './EmptyPlaceHolder'

describe('EmptyPlaceHolder', () => {
  test('Component should render and match snap shot', () => {
    const component = shallow(
      <EmptyPlaceHolder
        imageUrl="/src.jpg"
        helpTextTitle="sampletest"
        helpTextDetail="example test detail"
      />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
