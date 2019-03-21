import React from "react"
import {shallow} from "enzyme"
import toJson from "enzyme-to-json"
import Header from "./Header"
import { initialState } from  "../../../../reducers/navigation"

describe('Header', ()=> {

    test('renders component and match snap shot', () => {

        const component = shallow(<Header navigation={initialState.navigationLinks.links} />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()

    })

})