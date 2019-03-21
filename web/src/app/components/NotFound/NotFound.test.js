import React, {Component} from "react";
import {shallow} from "enzyme"
import toJson from "enzyme-to-json"
import NotFound from "./NotFound"


describe('NotFound', ()=> {

    test('Component should render match snap shot', () => {

        const component = shallow(<NotFound />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()

    })

})
