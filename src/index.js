import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import reducers from "./Reducers";
import App from './Components/App/App';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
const mount = document.getElementById("root");

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    mount
);
registerServiceWorker();
