import React, { useState } from "react";
import { Grid, Button, Typography, AppBar, Toolbar, Paper, TextField } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";

const SigninView: React.FC = () => {

    return (
        <div style={{ height: "100vh", backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
            <Paper style={{ width: 300 }}>
                <Typography style={{ fontSize: 30, margin: 10 }}>{"Signin"}</Typography>
                <TextField label="Email" />
                <TextField label="Password" />
                <Button>{"ログイン"}</Button>
            </Paper>
        </div>
    )
}

const SignupView: React.FC = () => {

    return (
        <Paper style={{ width: '100vh', height: '100%' }}>
            <Typography style={{ fontSize: 30, margin: 10 }}>{"Signup"}</Typography>
            <TextField label="Username" />
            <TextField label="Email" />
            <TextField label="Password" />
            <TextField label="Password(確認)" />
            <Button>{"登録する"}</Button>
        </Paper>
    )
}

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

interface Props {
    //content: Content
}


const SignView: React.FC<RouteProps> = () => {
    const [page, setPage] = useState<'signin' | 'signup'>('signin')
    console.log("debug")
    return (
        <div style={{ backgroundColor: 'red', height: '100vh' }}>
            {page === 'signin' ? <SigninView /> : <SignupView />}
        </div>
    );
}

export default SignView;
