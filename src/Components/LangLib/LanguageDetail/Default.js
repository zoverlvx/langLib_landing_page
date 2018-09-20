import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const Default = () => (
    <div id="margin_top">
        <h2>Please, select a language.</h2>
    </div>
);


export default withRouter(connect()(Default))
