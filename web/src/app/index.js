import "@babel/polyfill"
import React from "react"
import { render } from "react-dom"
import Root from "./Root"
import "./assets/less/index.less"

(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        // ... whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments);
    }
})(window.history)


render(<Root />, document.getElementById("root"))
