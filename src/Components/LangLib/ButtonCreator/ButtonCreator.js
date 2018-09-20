import React from "react";
import {connect} from "react-redux";
import Button from "../Button/Button";

const ButtonCreator = ({languages}) => {
    function createButtons() {
        return languages.map((language, i) => {
            return (
                <Button
                    name={language.name}
                    key={i}
                />
            );
        });
    }
    return (
        <div className="wrapper">
            {createButtons()}
        </div>
    )
}

function mapStateToProps({languages}) {
    return {
        languages
    }
}

export default connect(mapStateToProps)(ButtonCreator);
