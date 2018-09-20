import React from "react";
import {Route, Switch} from "react-router";
import ButtonCreator from "./ButtonCreator/ButtonCreator";
import LanguageDetail from "./LanguageDetail/LanguageDetail";
import Default from "./LanguageDetail/Default";

const LangLib = () => (
    <div>
        <ButtonCreator />
        <Switch>
            <Route exact path="/langlib" component={Default} />
            <Route
                path="/:language/:partofspeech"
                component={LanguageDetail}
            />
        </Switch>
    </div>
)

export default LangLib;
