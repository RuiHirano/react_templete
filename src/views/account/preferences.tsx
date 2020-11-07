import React from 'react';
import { Button, Typography, Select, FormControlLabel, Checkbox, MenuItem, Paper } from "@material-ui/core";
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";


const usePreferencesViewStyles = makeStyles({
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
    select: {
        width: "50%",
        height: 40
    },
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const PreferencesView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = usePreferencesViewStyles();

    const renderLanguage = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"言語と地域"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"言語"}</Typography>
                        <Select className={classes.select} variant="outlined" value={"Japanese"} placeholder="言語">
                            <MenuItem value={"Japanese"}>日本語</MenuItem>
                            <MenuItem value={"English"}>English</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"タイムゾーン"}</Typography>
                        <Select className={classes.select} variant="outlined" value={"Asia/Tokyo"} placeholder="タイムゾーン">
                            <MenuItem value={"Asia/Tokyo"}>Asia/Tokyo</MenuItem>
                            <MenuItem value={"British/London"}>British/London</MenuItem>
                        </Select>
                    </div>
                    <Button variant="contained" className={classes.button} >{"変更を保存"}</Button>
                </div>
            </Paper>
        </div>
    )

    const renderNotify = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"通知設定"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>
                    <div className={classes.text_field_container}>
                        <Typography className={classes.text_field_title} >{"通知"}</Typography>
                        <FormControlLabel
                            control={<Checkbox checked={true} onChange={() => { }} name="antoine" />}
                            label="メール通知"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={true} onChange={() => { }} name="antoine" />}
                            label="アプリ内通知"
                        />
                    </div>
                    <Button variant="contained" className={classes.button} >{"変更を保存"}</Button>
                </div>
            </Paper>
        </div>
    )

    const renderDeleteAccount = () => (
        <div className={classes.section_container}>
            <Typography className={classes.sub_title}>{"アカウントの削除"}</Typography>
            <Paper className={classes.paper_container}>
                <div className={classes.form_container}>

                    <Typography >{"アカウントを削除すると、react templeteアカウントを使用したサービスへアクセスできなくなり、個人データが完全に消去されます。14 日間以内であれば、削除を取り消すことが可能です。"}</Typography>
                    <Button variant="contained" className={classes.button} >{"アカウントの削除"}</Button>
                </div>
            </Paper>
        </div>
    )

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Preferences</Typography>
            {renderLanguage()}
            {renderNotify()}
            {renderDeleteAccount()}
        </div>
    );
}

export default withRouter(PreferencesView);
