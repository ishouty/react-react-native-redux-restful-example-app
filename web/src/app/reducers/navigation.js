import * as actionTypes from "../actions/actionTypes"
import { NavigationLinkText } from "../constants/text/text"

export const initialState = {
    previousRoute: [],
    navigationLinks: {
        links: [
            {
                title: NavigationLinkText.item1,
                href: "/app/users",
                className: "nav-users",
                icon: "fa-user-circle-o"
            },
            {
                title: NavigationLinkText.item2,
                href: "/app/female-users",
                className: "nav-female-users",
                icon: "fa-female"
            },
            {
                title: NavigationLinkText.item3,
                href: "/app/male-users",
                className: "nav-male-users",
                icon: "fa-male"
            },
            {
                title: NavigationLinkText.item4,
                href: "/sign-out",
                className: "nav-sign-out",
                icon: "fa-sign-out"
            }
        ]
    }
}

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action

    switch (type) {

        case actionTypes.SAVE_HISTORY:

            var items = state.previousRoute
            items.push(payload)

            return {
                ...state,
                previousRoute: items
            }

        default:
            return state
    }
}
