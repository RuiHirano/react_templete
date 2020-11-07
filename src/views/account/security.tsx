import React, { useContext } from 'react';
import { Button, Typography, TextField, Paper } from "@material-ui/core";
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useUser } from '../../utils/util';
import { UserStore } from '../../store/user';


const useSecurityViewStyles = makeStyles({
    root: {
        backgroundColor: 'white_smoke',
        height: '94vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    paper_container: {
        padding: 20
    },
    form_container: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column'
    },
    password_container: {
        width: '50%',
        marginTop: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sub_title: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text_field: {
        width: '80%'
    },
    text_field_title: {
        fontSize: 13,
        color: 'dimgray',
        fontWeight: 'bold'
    },
    text_field_container: {
        margin: 5,
        width: '100%'
    },
    button: {
        margin: 10
    },
});

const passwordSchema = Yup.object().shape({
    password: Yup.string()
        .required("必須項目です")
        .min(8, "8文字以上にしてください")
        .max(16, "16文字以下にしてください")
        .matches(/^[a-zA-Z0-9]+$/, "半角英数字を使用してください"),
    newPassword: Yup.string()
        .required("必須項目です")
        .min(8, "8文字以上にしてください")
        .max(16, "16文字以下にしてください")
        .matches(/^[a-zA-Z0-9]+$/, "半角英数字を使用してください"),
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const SecurityView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useSecurityViewStyles();
    const { updatePassword } = useUser()
    const user = useContext(UserStore).state.user

    type FormData = {
        password: string;
        newPassword: string;
    };

    const { handleSubmit, errors, control } = useForm<FormData>({
        resolver: yupResolver(passwordSchema)
    });
    const updateUserPassword = handleSubmit(({ password, newPassword }) => {
        try {
            updatePassword(password, newPassword)
        } catch (err) {

        }
    });

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Security</Typography>
            <div className={classes.password_container}>
                <Typography className={classes.sub_title}>{"パスワードを変更する"}</Typography>
                <Paper className={classes.paper_container}>
                    <div className={classes.form_container}>
                        <div className={classes.text_field_container}>
                            <Typography className={classes.text_field_title} >{"現在のパスワード"}</Typography>
                            <Controller
                                as={<TextField variant="outlined" className={classes.text_field} margin="dense" placeholder="現在のパスワードを入力してください" />}
                                name="password"
                                required
                                helperText={errors.password ? errors.password.message : ""}
                                error={errors.password ? true : false}
                                control={control}
                                type="password"
                                defaultValue=""
                            />
                        </div>
                        <div className={classes.text_field_container}>
                            <Typography className={classes.text_field_title} >{"新しいパスワード"}</Typography>
                            <Controller
                                as={<TextField variant="outlined" className={classes.text_field} margin="dense" placeholder="新しいパスワードを入力してください" />}
                                name="newPassword"
                                required
                                helperText={errors.newPassword ? errors.newPassword.message : ""}
                                error={errors.newPassword ? true : false}
                                control={control}
                                type="password"
                                defaultValue=""
                            />
                        </div>
                        <Button variant="contained" className={classes.button} onClick={updateUserPassword}>{"変更を保存"}</Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default withRouter(SecurityView);
