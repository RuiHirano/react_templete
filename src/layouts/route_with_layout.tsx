import React from "react";
import { Route } from "react-router-dom";

interface Props {
    path: string;
    exact?: boolean;
    auth?: boolean;
    component: any;
    layout: any;
}

const RouteWithLayout: React.FC<Props> = props => {
    const { layout: Layout, component: Component, auth, ...rest } = props;

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

export default RouteWithLayout;
