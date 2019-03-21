import * as React from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import * as actionTypes from "../actions/actionTypes"
//components
import {CommonText} from "../constants/text/text"

import ListPageLoader from "../components/ListPageLoader/ListPageLoader"
import EmptyPlaceholder from "../components/EmptyPlaceholder/EmptyPlaceholder"
import UserList from "../components/User/User"
import ModalBox from "../components/Modal/Modal"

export function renderUsersList(users, loadFunction = {}, dispatch,
                                emptyImageUrl, emptyHelpTitle, emptyHelpDetail,
                                page = 0, totalPages = 0, showMenu = false) {



    return (
        <div>
            <ModalBox />
            {page === -1 || users.length > 0 ?
                <div id="users-list" className="users-list-container">
                    <ul>
                        <ReactCSSTransitionGroup
                            transitionName="base"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {users.map((user) =>
                                <li key={user.id.value} onClick={() => { dispatch({type: actionTypes.USER_DETAIL_MODAL, payload: {...user, display: true},  }) }}>
                                    <UserList user={user} showMenu={showMenu}/>
                                </li>
                            )}
                        </ReactCSSTransitionGroup>
                    </ul>

                    <ListPageLoader label={CommonText.loadMoreUsers}
                                    page={page} totalPages={totalPages} currentListSize={users.length}
                                    loadFunction={loadFunction}/>
                </div>
                :
                <EmptyPlaceholder imageUrl={emptyImageUrl}
                                  helpTextTitle={emptyHelpTitle}
                                  helpTextDetail={emptyHelpDetail}/>
            }
        </div>
    )

}

