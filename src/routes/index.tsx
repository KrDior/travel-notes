import React, {Fragment} from "react";
import {Switch, Route} from "react-router-dom";
import {MainNavigationMenu, Home, TripPage, Notes} from "../components";

const routes = (
    <div className="App">
        <Fragment>
            <MainNavigationMenu/>
            <Switch>
                <Route exact path="/" render={() => <Home/>}/>
                <Route exact path="/tripPage" render={() => <TripPage/>}/>
                <Route exact path="/notes" render={() => <Notes/>}/>
            </Switch>
        </Fragment>
    </div>
);

export default routes;
