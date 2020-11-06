import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { MainLayout, HomeLayout } from "./layouts";
import RouteWithLayout from "./layouts/route_with_layout";
import {
    ContentView,
    HomeView,
    AccountView,
    SettingsView,
    SigninView,
    SignupView,
    UserHomeView,
    NotFoundView
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
                component={SigninView}
                exact
                layout={HomeLayout}
                path="/signin"
            />
            <RouteWithLayout
                component={SignupView}
                exact
                layout={HomeLayout}
                path="/signup"
            />
            <RouteWithLayout
                component={UserHomeView}
                exact
                auth
                layout={MainLayout}
                path="/userhome"
            />
            <RouteWithLayout
                component={SettingsView}
                exact
                auth
                layout={MainLayout}
                path="/settings"
            />
            <Redirect exact from="/account" to="/account/profile" />
            <RouteWithLayout
                component={AccountView}
                exact
                auth
                layout={MainLayout}
                path="/account/:page"
            />
            <RouteWithLayout
                component={ContentView}
                exact
                auth
                layout={MainLayout}
                path="/content/:contentId"
            />
            <RouteWithLayout
                component={NotFoundView}
                exact
                layout={HomeLayout}
                path="/not_found"
            />
            <Redirect to="/not_found" />
        </Switch>
    );
};

export default Routes;
