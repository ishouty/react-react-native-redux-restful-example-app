import React, {Component} from "react";
import {shallow, mount} from "enzyme"
import toJson from "enzyme-to-json"
import ProfileAvatarName from "./ProfileAvatarName"


describe('ProfileAvatarName', ()=>{

    test('Component should render match snap shot', () => {

        const component = shallow(<ProfileAvatarName profile={ { name: { first: 'mock name' }, picture: { medium: 'thumbnail.png'} }} size="large"/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    test('Component should render component ProfileAvatar', ()=> {

        const component = shallow(<ProfileAvatarName profile={ { name: { first: 'mock name' }, picture: { medium: 'thumbnail.png'} }} size="large"/>)
        expect(component.find('ProfileAvatar').html()).toEqual('<div class=\"inline\"><div class=\"profile-avatar-large\" style=\"background-image:url(thumbnail.png)\"></div></div>')
        //could not get thiclears to mount and render the child element but was able to render the html mark up using shallow.
    })


})


