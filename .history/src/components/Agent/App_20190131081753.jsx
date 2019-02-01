import React, { Component } from "react";
import Routes from "../Router/route";
import  rootReducer from "../../Reducers/DashBoardReducers"
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

var store = createStore(rootReducer,applyMiddleware(thunk));



var render = function () {
    console.log("--------------->", store.getState());
    ReactDOM.render(<CreateOrderPageRedux storeprop={store} />, rootElement);
};

store.subscribe(render);
render();

export default class App extends Component {
    render() {
        return <Routes mystore={store} />;
    }



}
