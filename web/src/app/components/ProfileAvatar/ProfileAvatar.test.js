import React, {Component} from "react";
import {shallow} from "enzyme"
import toJson from "enzyme-to-json"
import ProfileAvatarTest from "./ProfileAvatar"


describe('ProfileAvatar', ()=> {

    test('Component should render match snap shot', () => {

        const component = shallow(<ProfileAvatarTest profile={{ profileImage: "profileImage.jpg" }} />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()

    })

    test('Component className should be profile-avatar-medium by default ', () => {

        const component = shallow(<ProfileAvatarTest profile={{ profileImage: "profileImage.jpg" }} />)
        expect(component.find('.profile-avatar-medium')).toHaveLength(1)

    })

    test('Component className should be profile-avatar-large when passing prop type size = large ', () => {

        const component = shallow(<ProfileAvatarTest profile={{ profileImage: "profileImage.jpg" }} size="large" />)
        expect(component.find('.profile-avatar-large')).toHaveLength(1)

    })

    test('Component ProfileAvatar onclick should call callback function', () => {

        const mockFunction = jest.fn()

        const component = shallow(<ProfileAvatarTest profile={{ profileImage: "profileImage.jpg" }} callback={mockFunction} />)

        //trigger the click event
        component.find('.profile-link').simulate('click')

        expect(mockFunction).toBeCalled()

    })


})



