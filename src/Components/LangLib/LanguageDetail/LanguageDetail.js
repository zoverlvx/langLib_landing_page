import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import FrenchPronouns from "./Languages/French/FrenchPronouns";
import FrenchNumbers from "./Languages/French/FrenchNumbers";
import FrenchVerbs from "./Languages/French/FrenchVerbs";
import GermanPronouns from "./Languages/German/GermanPronouns";
import GermanNumbers from "./Languages/German/GermanNumbers";
import GermanVerbs from "./Languages/German/GermanVerbs";
import RussianPronouns from "./Languages/Russian/RussianPronouns";
import RussianNumbers from "./Languages/Russian/RussianNumbers";
import RussianVerbs from "./Languages/Russian/RussianVerbs";

const LanguageDetail = ({location}) => {
    const {pathname} = location;
    return(
        pathname === "/langlib/french/pronouns" ? 
        <FrenchPronouns /> :
        pathname === "/langlib/french/ordinal_and_cardinal_numbers" ?
        <FrenchNumbers /> :
        pathname === "/langlib/french/regular_verb_conjugations" ?
        <FrenchVerbs /> :
        pathname === "/langlib/german/pronouns" ?
        <GermanPronouns /> :
        pathname === "/langlib/german/ordinal_and_cardinal_numbers" ?
        <GermanNumbers /> :
        pathname === "/langlib/german/regular_verb_conjugations" ?
        <GermanVerbs /> :
        pathname === "/langlib/russian/pronouns" ?
        <RussianPronouns /> :
        pathname === "/langlib/russian/ordinal_and_cardinal_numbers" ?
        <RussianNumbers /> :
        pathname === "/langlib/russian/regular_verb_conjugations" ? 
        <RussianVerbs />
        :
        null
        
    )
}

function mapStateToProps({languages, dropdown}) {
    return {
        language: languages,
        dropdown
    }
}

export default withRouter(connect(mapStateToProps)(LanguageDetail));
