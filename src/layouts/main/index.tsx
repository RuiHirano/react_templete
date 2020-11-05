import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Drawer, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withRouter, match } from "react-router";
import * as H from "history";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
    },
    title: {
        display: 'none',
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        color: 'black',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        color: 'black',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    app_bar: {
        backgroundColor: 'white'
    },
}));

const useDrawerStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

interface DrawerProps {
    openDrawer: boolean
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const MainDrawer: React.FC<DrawerProps> = (props) => {
    const classes = useDrawerStyles();
    const { openDrawer, setOpenDrawer } = props

    return (
        <div>
            <Drawer anchor={"left"} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

interface AppBarProps {
    history: H.History;
}

const MainAppBar: React.FC<AppBarProps> = (props) => {
    const classes = useStyles();
    const { history } = props;

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toMyPage = () => {
        setOpenMenu(false)
        history.push("/mypage")
    }
    const toSettings = () => {
        setOpenMenu(false)
        history.push("/settings")
    }
    const logout = () => {
        setOpenMenu(false)
        history.push("/")
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openMenu}
            onClose={() => setOpenMenu(false)}
        >
            <MenuItem onClick={toMyPage}>MyPage</MenuItem>
            <MenuItem onClick={toSettings}>Settings</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>

            <MainDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        React Templete
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="default">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="default">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="default"
                            onClick={(event: any) => { setAnchorEl(event.currentTarget); setOpenMenu(true) }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}

interface Props {
    className?: string;
    children?: any;
    title: string
}
interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}


const MainLayout: React.FC<Props & RouteProps> = (props) => {
    const { children, history } = props;

    return (
        <div>
            <MainAppBar history={history} />
            {children}
        </div>
    );
};

export default withRouter(MainLayout);
