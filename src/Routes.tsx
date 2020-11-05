import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { MainLayout, HomeLayout } from "./layouts";
import RouteWithLayout from "./layouts/route_with_layout";
import {
    ContentView,
    HomeView,
    MyPageView,
    SettingsView,
    SigninView,
    SignupView,
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
            <RouteWithLayout
                component={MyPageView}
                exact
                auth
                layout={MainLayout}
                path="/mypage"
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
