import React, { useState } from "react";
import { Grid, Button, Typography, AppBar, Toolbar, Paper, TextField } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        height: "94vh",
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gainsboro'
    },
    paper_container: {
        width: '40%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    form_container: {
        display: 'flex',
        flexDirection: 'column'
    },
    button_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        margin: 20
    },
    text_field: {
        marginTop: 20
    },
});

interface SigninProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
    history: H.History;
}

const SigninView: React.FC<SigninProps> = (props) => {
    const { history } = props;
    const classes = useStyles();
    const { setPage } = props

    const login = () => {
        history.push("/userhome")
    }

    const toSignupPage = () => {
        setPage('signup')
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <Typography className={classes.title}>{"Signin"}</Typography>
                    <TextField className={classes.text_field} label="Email" />
                    <TextField className={classes.text_field} label="Password" />

                    <div className={classes.button_container}>
                        <Button className={classes.button} onClick={login} variant="contained" color={'primary'}>{"ログイン"}</Button>
                        <Button className={classes.button} onClick={toSignupPage}>{"新規登録する"}</Button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

interface SignupProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
    history: H.History;
}

const SignupView: React.FC<SignupProps> = (props) => {
    const { setPage } = props
    const { history } = props;
    const classes = useStyles();

    const signup = () => {
        history.push("/userhome")
    }

    const toSigninPage = () => {
        setPage('signin')
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <Typography className={classes.title}>{"Signup"}</Typography>
                    <TextField className={classes.text_field} label="Username" />
                    <TextField className={classes.text_field} label="Email" />
                    <TextField className={classes.text_field} label="Password" />
                    <TextField className={classes.text_field} label="Password(確認)" />

                    <div className={classes.button_container}>
                        <Button className={classes.button} onClick={signup} variant="contained" color={'primary'}>{"新規登録する"}</Button>
                        <Button className={classes.button} onClick={toSigninPage}>{"ログインする"}</Button>
                    </div>
                </div>
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


const SignView: React.FC<RouteProps> = (props) => {
    const { history } = props;
    const [page, setPage] = useState<'signin' | 'signup'>('signin')
    console.log("debug")
    return (
        <div>
            {page === 'signin' ? <SigninView setPage={setPage} history={history} /> : <SignupView setPage={setPage} history={history} />}
        </div>
    );
}

export default SignView;
