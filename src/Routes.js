import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Installation from "./containers/Installation";
import Contribution from "./containers/Contribution";
import AboutUs from "./containers/AboutUs";
import Screenshots from "./containers/Screenshots";
import Documentation from "./containers/Documentation";
import News from "./containers/News";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/news">
                <News />
            </Route>

            <Route exact path="/installation">
                <Installation />
            </Route>

            <Route exact path="/contribution">
                <Contribution />
            </Route>

            <Route exact path="/about">
                <AboutUs />
            </Route>

            <Route exact path="/screenshots">
                <Screenshots />
            </Route>

            <Route exact path="/documentation">
                <Documentation />
            </Route>

            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}