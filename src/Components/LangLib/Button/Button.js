import React from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {toggleDropdown} from "../../../Actions";
import ListLanguageAspects from "../ListLanguageAspects/ListLanguageAspects";

const Button = ({name, toggleDropdown, dropdown}) => {
    const languagePath = name.toLowerCase();
    return (
        <div className="center inline">
            <span
                className="btn_span"
                onClick={() => toggleDropdown(languagePath)}
            >
                <Link 
                    className="btn_link"
                    to={`/langlib/${languagePath}`}
                >
                    {name}
                </Link>
            </span>
            {
                dropdown.open 
                && 
                (dropdown.language === languagePath)
                ?
                <ListLanguageAspects />
                :
                null
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropdown: nextLanguage => dispatch(toggleDropdown(nextLanguage))
    }
}

const mapStateToProps = ({languages, dropdown}) => {
    return {
        languages,
        dropdown
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Button)
);
