import React from "react";
import { Switch, Route } from "react-router";
import Register from "./Register.js"
import Homepage from "./Homepage.js";
import Admin from "./Admin";

function Routes({ signup }) {

    return (
        <div className="pt-5">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/signup">
                    <Register signup={signup} />
                </Route>
            </Switch>
    </div>
    )
}

export default Routes;