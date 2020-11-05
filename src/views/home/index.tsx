import React, { useState } from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

interface Props {
    //content: Content
}

const HomeView: React.FC<RouteProps & Props> = (props) => {
    const { match } = props
    return (
        <div >
            <div style={{ width: '100%' }}>
                <Paper style={{ width: "50%", margin: 'auto', marginTop: 100 }}>

                </Paper>
            </div>
        </div>
    );
}

export default HomeView;
