import React from "react";
import { Route } from "react-router-dom";
import { withRouter, match } from "react-router";
import * as H from "history";

interface Props {
    path: string;
    exact?: boolean;
    auth?: boolean;
    component: any;
    layout: any;
}

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match;
}

const RouteWithLayout: React.FC<Props & RouteProps> = props => {
    const { layout: Layout, component: Component, auth, history, ...rest } = props;



    if (auth) {
        const user = null
        if (user == null) {
            //history.push("/signin");
        }
    }

    return (
        <Route
            {...rest}
            render={matchProps => {
                return (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                );
            }}
        />
    );
};

export default withRouter(RouteWithLayout);
