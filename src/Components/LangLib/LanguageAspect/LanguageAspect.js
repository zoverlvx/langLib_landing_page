import React from "react";
import {changePartOfSpeech} from "../../../Actions";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";

const LanguageAspect = (
    {
        dispatch,
        dropdown,
        aspectPath,
        item
    }
) => {
    return (
        <li
            className="language_dropdown"
            onClick={() => dispatch(changePartOfSpeech(aspectPath))}
        >
            <Link
                className="language_dropdown_link"
                to={`/langlib/${dropdown}/${aspectPath}`}
            >
                {item}
            </Link>
        </li>
    )
}

function mapStateToProps({dropdown}){
    return {
        dropdown: dropdown.language
    }
}

export default withRouter(connect(mapStateToProps)(LanguageAspect));
