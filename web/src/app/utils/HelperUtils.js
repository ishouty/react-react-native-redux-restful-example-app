import moment from "moment"
import MobileDetect from "mobile-detect"
import * as constants from '../constants/index'


export const maxLength = (max, value) => {

    value && value.length > max ? `Must be ${max} characters or less` : undefined

}




export const required = name => value => value ? undefined : `${name} is required`

export function mobileDetect () {

    var md = new MobileDetect(window.navigator.userAgent);
    return md;

    /*console.log(window.navigator.userAgent);
    console.log( md.mobile() );          // 'Sony'
    console.log( md.phone() );           // 'Sony'
    console.log( md.tablet() );          // null
    console.log( md.userAgent() );       // 'Safari'
    console.log( md.os() );              // 'AndroidOS'
    console.log( md.is('iPhone') );      // false
    console.log( md.is('bot') );         // false
    console.log( md.version('Webkit') );         // 534.3
    console.log( md.versionStr('Build') );       // '4.1.A.0.562'
    console.log( md.match('playstation|xbox') ); // false*/

}

export function linkify(text, target = '_self') {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return '<a target="'+ target +'" href="' + url + '">' + url + '</a>'
    })
}
