import React, { useState } from "react";
import { Grid, Button, Typography, AppBar, Toolbar, Paper, TextField } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";


interface SigninProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

const SigninView: React.FC<SigninProps> = (props) => {
    const { setPage } = props

    return (
        <div style={{ width: '100%', height: '100vh', display: 'inline-block', verticalAlign: 'middle' }}>
            <Paper style={{ width: '40%', height: '40%', margin: 'auto' }}>
                <Typography style={{ fontSize: 30, }}>{"Signin"}</Typography>
                <TextField label="Email" />
                <TextField label="Password" />
                <Button variant="contained">{"ログイン"}</Button>
                <Button onClick={() => setPage('signup')}>{"新規登録する"}</Button>
            </Paper>
        </div>
    )
}

interface SignupProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

const SignupView: React.FC<SignupProps> = (props) => {
    const { setPage } = props

    return (
        <div style={{ width: '100%', height: '100vh', display: 'inline-block', verticalAlign: 'middle' }}>
            <Paper style={{ width: '40%', height: '40%', margin: 'auto' }}>
                <Typography style={{ fontSize: 30, margin: 10 }}>{"Signup"}</Typography>
                <TextField label="Username" />
                <TextField label="Email" />
                <TextField label="Password" />
                <TextField label="Password(確認)" />
                <Button variant="contained">{"登録する"}</Button>
                <Button onClick={() => setPage('signin')}>{"ログインする"}</Button>
            </Paper>
        </div>
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
            {page === 'signin' ? <SigninView setPage={setPage} /> : <SignupView setPage={setPage} />}
        </div>
    );
}

export default SignView;
