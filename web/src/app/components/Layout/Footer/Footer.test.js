import React, { Component } from 'react'
import Footer from './Footer'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'


describe('Footer', ()=> {

    test('Component Should render', ()=> {

        const component = shallow(<Footer/>)
        expect(component.find('.footer')).toHaveLength(1)

    })

    test('Render and match snapshot', ()=> {

        const component = shallow(<Footer/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()

    })

})