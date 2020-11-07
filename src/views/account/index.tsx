import React, { useEffect } from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import { match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import PreferencesView from './preferences'
import SecurityView from './security'
import MailView from './mail'
import ProfileView from './profile'


const useSettingsStyles = makeStyles((theme) => ({
    root: {
        height: '94vh',
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        backgroundColor: 'whitesmoke',
        width: 350,
    },
    page_container: {
        width: '100%'
    }
}));

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ page: string }>;
}

interface Props {
}



const AccountView: React.FC<RouteProps & Props> = (props) => {
    const { history, match } = props
    const page = match.params.page
    const classes = useSettingsStyles();
    useEffect(() => {
        if (!["profile", "mail", "security", "preferences"].includes(page)) {
            history.push("profile")
        }
    }, [])

    const renderPage = (page: string) => {
        switch (page) {
            case "profile":
                return <ProfileView />
            case "mail":
                return <MailView />
            case "security":
                return <SecurityView />
            case "preferences":
                return <PreferencesView />
            default:
                return <ProfileView />
        }
    }

    const changePage = () => {

    }

    const lists = [
        { name: "Profile", path: "/account/profile" },
        { name: "Mail", path: "/account/mail" },
        { name: "Security", path: "/account/security" },
        { name: "Preferences", path: "/account/preferences" },
    ]

    return (
        <div className={classes.root}>
            <List className={classes.list}>
                {lists.map((list, index) => (
                    <ListItem button key={list.name} onClick={() => { history.push(list.path) }}>
                        <InboxIcon />
                        <ListItemText primary={list.name} />
                    </ListItem>
                ))}
            </List>
            <div className={classes.page_container}>
                {renderPage(page)}
            </div>
        </div>
    )
}

export default AccountView;
