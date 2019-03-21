import React, {Component} from 'React'
import {shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import ResetPassword from './ResetPassword'


describe('ResetPassword', ()=> {

    test('Component should render and display',()=> {

        const props = {
            resetPassword: {
                completeResetPassword: {
                    completeForm: false
                }
            }
        }

        const component = shallow(<ResetPassword {...props} />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

})

