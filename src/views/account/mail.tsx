import React, { useContext } from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, IconButton, TextField, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useUser } from '../../utils/util';
import { UserStore } from '../../store/user';


const useMailViewStyles = makeStyles({
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
    email_container: {
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

const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email("アドレスが正しくありません")
        .oneOf(
            [Yup.ref("email")],
            "メールアドレスが間違っています"
        )
        .required("必須項目です"),
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const MailView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useMailViewStyles();
    const { updateEmail } = useUser()
    const user = useContext(UserStore).state.user

    type FormData = {
        email: string;
    };

    const { handleSubmit, errors, control } = useForm<FormData>({
        resolver: yupResolver(emailSchema)
    });
    const updateUserEmail = handleSubmit(({ email }) => {
        try {
            updateEmail(email)
        } catch (err) {

        }
    });

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Mail</Typography>
            <Typography >{`現在のメールアドレスは${user.Setting.Email}です`}</Typography>
            <div className={classes.email_container}>
                <Typography className={classes.sub_title}>{"メールアドレスを変更"}</Typography>
                <Paper className={classes.paper_container}>
                    <div className={classes.form_container}>
                        <div className={classes.text_field_container}>
                            <Typography className={classes.text_field_title} >{"新しいメールアドレス"}</Typography>
                            <Controller
                                as={<TextField variant="outlined" className={classes.text_field} margin="dense" placeholder="新しいメールアドレス" />}
                                name="email"
                                required
                                helperText={errors.email ? errors.email.message : ""}
                                error={errors.email ? true : false}
                                control={control}
                                defaultValue=""
                            />
                        </div>
                        <Button variant="contained" className={classes.button} onClick={updateUserEmail}>{"変更を保存"}</Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default withRouter(MailView);
