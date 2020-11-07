import React from "react";
import { Button, Typography, Paper, TextField } from "@material-ui/core";
import { match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useAuth } from "../../utils/util";

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

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("アドレスが正しくありません")
        .oneOf(
            [Yup.ref("email")],
            "メールアドレスが間違っています"
        )
        .required("必須項目です"),
    password: Yup.string()
        .required("必須項目です")
        .min(8, "8文字以上にしてください")
        .max(16, "16文字以下にしてください")
        .matches(/^[a-zA-Z0-9]+$/, "半角英数字を使用してください"),
});

interface SigninProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
    history: H.History;
}

export const SigninView: React.FC<RouteProps> = (props) => {
    const { history } = props;
    const classes = useStyles();
    const { signIn } = useAuth()

    type FormData = {
        email: string;
        password: string;
    };

    const { handleSubmit, errors, control } = useForm<FormData>({
        resolver: yupResolver(signInSchema)
    });
    const login = handleSubmit(({ email, password }) => {
        try {
            console.log("logindata: ", email, password)
            signIn(email, password)
            history.push("/userhome")
        } catch (err) {

        }
    });

    const toSignupPage = () => {
        history.push("/signup")
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <Typography className={classes.title}>{"Signin"}</Typography>
                    <Controller
                        as={<TextField className={classes.text_field} label="Email" />}
                        name="email"
                        required
                        helperText={errors.email ? errors.email.message : ""}
                        error={errors.email ? true : false}
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        as={<TextField className={classes.text_field} label="Password" />}
                        name="password"
                        required
                        helperText={errors.password ? errors.password.message : ""}
                        error={errors.password ? true : false}
                        control={control}
                        type="password"
                        defaultValue=""
                    />

                    <div className={classes.button_container}>
                        <Button className={classes.button} onClick={login} variant="contained" color={'primary'}>{"ログイン"}</Button>
                        <Button className={classes.button} onClick={toSignupPage}>{"新規登録する"}</Button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const signUpSchema = Yup.object().shape({
    name: Yup.string()
        .required("必須項目です"),
    email: Yup.string()
        .email("アドレスが正しくありません")
        .oneOf(
            [Yup.ref("email")],
            "メールアドレスが間違っています"
        )
        .required("必須項目です"),
    password: Yup.string()
        .required("必須項目です")
        .min(8, "8文字以上にしてください")
        .max(16, "16文字以下にしてください")
        .matches(/^[a-zA-Z0-9]+$/, "半角英数字を使用してください"),
    passwordConfirm: Yup.string()
        .oneOf(
            [Yup.ref("password")],
            "パスワードが間違っています"
        )
        .required("必須項目です")
});

interface SignupProps {
    setPage: React.Dispatch<React.SetStateAction<"signin" | "signup">>
    history: H.History;
}

export const SignupView: React.FC<RouteProps> = (props) => {
    const { history } = props;
    const classes = useStyles();
    const { signUp } = useAuth()

    type FormData = {
        name: string;
        email: string;
        password: string;
        passwordConfirm: string;
    };

    const { handleSubmit, errors, control } = useForm<FormData>({
        resolver: yupResolver(signUpSchema)
    });
    const signup = handleSubmit(({ name, email, password, passwordConfirm }) => {
        console.log("sign up", name, email, password, passwordConfirm)
        try {
            signUp(name, email, password)
            history.push("/userhome")
        } catch (err) {

        }
    });

    const toSigninPage = () => {
        history.push("/signin")
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <Typography className={classes.title}>{"Signup"}</Typography>
                    <Controller
                        as={<TextField className={classes.text_field} label="Username" />}
                        name="name"
                        required
                        helperText={errors.name ? errors.name.message : ""}
                        error={errors.name ? true : false}
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        as={<TextField className={classes.text_field} label="Email" />}
                        name="email"
                        required
                        helperText={errors.email ? errors.email.message : ""}
                        error={errors.email ? true : false}
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        as={<TextField className={classes.text_field} label="Password" />}
                        name="password"
                        required
                        helperText={errors.password ? errors.password.message : ""}
                        error={errors.password ? true : false}
                        control={control}
                        type="password"
                        defaultValue=""
                    />
                    <Controller
                        as={<TextField className={classes.text_field} label="Password(確認)" />}
                        name="passwordConfirm"
                        required
                        helperText={errors.passwordConfirm ? errors.passwordConfirm.message : ""}
                        error={errors.passwordConfirm ? true : false}
                        control={control}
                        type="password"
                        defaultValue=""
                    />

                    <div className={classes.button_container}>
                        <Button className={classes.button} onClick={signup} variant="contained" color={'primary'}>{"新規登録する"}</Button>
                        <Button className={classes.button} onClick={toSigninPage}>{"ログインする"}</Button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}


