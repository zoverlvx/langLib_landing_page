import React from "react";
import {Switch, Route} from "react-router-dom";
import About from "../About/About";
import LangLib from "../LangLib/LangLib";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/langlib" component={LangLib} />
        </Switch>
    </main>
)

export default Main;
