import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { MainLayout, HomeLayout } from "./layouts";
import RouteWithLayout from "./layouts/route_with_layout";
import {
    ContentView,
    HomeView,
    SignView,
    UserHomeView,
} from "./views";

const Routes: React.FC = () => {

    return (
        <Switch>
            <RouteWithLayout
                component={HomeView}
                exact
                layout={HomeLayout}
                path="/"
            />
            <RouteWithLayout
                component={SignView}
                exact
                layout={HomeLayout}
                path="/sign"
            />
            <RouteWithLayout
                component={UserHomeView}
                exact
                auth
                layout={MainLayout}
                path="/userhome"
            />
            <RouteWithLayout
                component={ContentView}
                exact
                auth
                layout={MainLayout}
                path="/content/:contentId"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
