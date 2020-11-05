import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Drawer, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 260;

interface Props {
    className?: string;
    children?: any;
    title: string
}

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
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
}

const MainAppBar: React.FC<AppBarProps> = (props) => {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div className={classes.grow}>

            <MainDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <AppBar position="static">
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
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const MainLayout: React.FC<Props> = props => {
    const { children, title } = props;


    return (
        <div>
            <MainAppBar />
            {children}
        </div>
    );
};

export default MainLayout;
