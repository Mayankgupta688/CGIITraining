import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers/index";

import AppComponentConnected from "./AppComponent";
import AppOtherComponentConnected from "./AppOtherComponent";

var applicationStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={applicationStore}>
        <AppOtherComponentConnected></AppOtherComponentConnected>
        <AppComponentConnected></AppComponentConnected>
    </Provider>
), document.getElementById("root"))
