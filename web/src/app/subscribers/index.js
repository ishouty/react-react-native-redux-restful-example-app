import watch from 'redux-watch'
import { BANNER_NOTIFICATION } from '../../app/constants'
import {store} from "../../app/store"

export default function Subscribers(store) {

    let w = watch(store.getState, 'notifications.banner')

    store.subscribe(w((newVal, oldVal, objectPath) => {
        if (newVal.fail || newVal.success) {
            setTimeout(()=> {
                store.dispatch({type: BANNER_NOTIFICATION, payload: {fail: false, success: false, message: ''}})
            }, 6000)
        }

    }))

}