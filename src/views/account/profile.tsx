import React, { useContext, useState } from 'react';
import { Button, Typography, Avatar, TextField, CardMedia, IconButton, Paper } from "@material-ui/core";
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles, withStyles, } from "@material-ui/core/styles";
import imgPath from "../../assets/office.jpg"
import { UserStore } from '../../store/user';
import { useUser } from '../../utils/util';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Profile } from '../../types';

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: 0,
            },
            '&:hover fieldset': {
                borderColor: 'gray',
                borderWidth: 2,
            },
            '&.Mui-focused fieldset': {
                borderColor: 'deepskyblue',
                borderWidth: 2,
            },
        },
    },
})(TextField);


const useProfileViewStyles = makeStyles({
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
    section_container: {
        width: '50%',
        marginTop: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sub_title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text_field: {
        width: '80%',
        borderColor: 'red',
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
    header: {
        height: 150,
    },
    avatar: {
        height: 100,
        width: 100
    },
    email_text: {
        fontSize: 15,
        margin: 5
    },
});

const profileSchema = Yup.object().shape({
    name: Yup.string()
        .required("必須項目です")
        .max(30, "30文字以下にしてください"),
    message: Yup.string()
        .max(200, "200文字以下にしてください")
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const ProfileView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useProfileViewStyles();
    const user = useContext(UserStore).state.user
    const { updateProfile } = useUser()

    type FormData = {
        name: string;
        message: string;
    };

    const { handleSubmit, errors, control } = useForm<FormData>({
        resolver: yupResolver(profileSchema)
    });
    const updateUserProfile = handleSubmit(({ name, message }) => {
        try {
            console.log("data: ", name, message)
            const newProfile: Profile = JSON.parse(JSON.stringify(user.Profile))
            newProfile.Name = name
            newProfile.Message = message
            updateProfile(newProfile)
        } catch (err) {

        }
    });

    const updateAvatar = () => {
        console.log("updateAvatar")
    }

    const renderProfileImage = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"プロファイル写真とヘッダー画像"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <div className={classes.text_field_container}>
                        <CardMedia image={imgPath} className={classes.header}></CardMedia>
                        <IconButton onClick={updateAvatar}>
                            <Avatar className={classes.avatar} src={"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"} />
                        </IconButton>
                    </div>
                </div>
            </Paper>
        </div>
    )
    const renderUserInfo = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"ユーザ情報"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"氏名"}</Typography>
                        <Controller
                            as={<CssTextField variant="outlined" className={classes.text_field} margin="dense" placeholder="氏名" />}
                            name="name"
                            required
                            helperText={errors.name ? errors.name.message : ""}
                            error={errors.name ? true : false}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"紹介文"}</Typography>
                        <Controller
                            as={<CssTextField variant="outlined" className={classes.text_field} margin="dense" placeholder="紹介文" />}
                            name="message"
                            required
                            helperText={errors.message ? errors.message.message : ""}
                            error={errors.message ? true : false}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <Button variant="contained" className={classes.button} onClick={updateUserProfile}>{"変更を保存"}</Button>
                </div>
            </Paper>
        </div>
    )

    const renderContact = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"連絡先"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"メールアドレス"}</Typography>
                        <Typography className={classes.email_text}>{"r.hrn@gmail.com"}</Typography>
                    </div>
                </div>
            </Paper>
        </div>
    )
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Profile</Typography>
            {renderProfileImage()}
            {renderUserInfo()}
            {renderContact()}
        </div>
    );
}

export default withRouter(ProfileView);
