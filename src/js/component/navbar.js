import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BusinessIcon from "@material-ui/icons/Business";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../img/logo azul.png";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import teal from "@material-ui/core/colors/teal";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Fade from "react-reveal/Fade";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		backgroundColor: "rgba(250, 250, 250, 0.9)",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		paddingTop: "5px",
		paddingBottom: "5px"
	},
	appBarInicio: {
		backgroundColor: "transparent",
		marginTop: "10px"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: drawerWidth
	},
	title: {
		flexGrow: 1,
		cursor: "pointer"
	},
	logoSize: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	menuIcon: {
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	menuBar: {
		position: "absolute",
		zIndex: 1,
		top: 15,
		width: "100%",
		left: "30%",
		right: "50%",
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	menuBarBtn: {
		marginRight: "30px",
		borderWidth: 0,
		outline: 0,
		"&$notchedOutline": {
			borderWidth: 0
		},
		"&$focused": {
			borderWidth: 0
		}
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: "rgba(250, 250, 250, 0.9)"
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginRight: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: 0
	},
	focused: {},
	notchedOutline: {}
}));
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return React.cloneElement(children, {
		elevation: trigger ? 5 : 0
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func
};

export const Navbar = props => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const primary = teal[700];
	const secondary = teal[200];
	const history = useHistory();
	const location = useLocation();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			{location.pathname === "/" ? (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar position="top" className={classes.appBarInicio}>
						<Toolbar>
							<div className={classes.title}>
								<Fade duration={1000} delay={500} distance="30px">
									<Avatar
										onClick={e => history.push(`/`)}
										src={Logo}
										className={classes.logoSize}
										noWrap
									/>
								</Fade>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			) : (
				<div className={classes.root}>
					<CssBaseline />
					<ElevationScroll {...props}>
						<AppBar
							position="fixed"
							className={clsx(classes.appBar, {
								[classes.appBarShift]: open
							})}>
							<Toolbar>
								<div className={classes.title}>
									<Fade duration={1000} delay={500} distance="30px">
										<Avatar
											onClick={e => history.push(`/`)}
											src={Logo}
											className={classes.logoSize}
											noWrap
										/>
									</Fade>
								</div>
								<div className={classes.menuBar}>
									<Button
										onClick={e => history.push(`/`)}
										className={classes.menuBarBtn}
										color={primary}>
										Inicio
									</Button>
									<Button
										onClick={e => history.push(`/cormineco`)}
										className={classes.menuBarBtn}
										color={primary}>
										Cormineco
									</Button>
									<Button
										onClick={e => history.push(`/compromiso`)}
										className={classes.menuBarBtn}
										color={primary}>
										Compromiso
									</Button>
									<Button
										onClick={e => history.push(`/alcance`)}
										className={classes.menuBarBtn}
										color={primary}>
										Alcance
									</Button>
									<Button
										onClick={e => history.push(`/contacto`)}
										className={classes.menuBarBtn}
										color={primary}>
										Contacto
									</Button>
								</div>
								<div className={classes.menuIcon}>
									<IconButton
										aria-label="open drawer"
										edge="end"
										onClick={handleDrawerOpen}
										className={clsx(open && classes.hide)}>
										<MenuIcon />
									</IconButton>
								</div>
							</Toolbar>
						</AppBar>
					</ElevationScroll>
					<ElevationScroll {...props}>
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="right"
							open={open}
							classes={{
								paper: classes.drawerPaper
							}}>
							<div className={classes.drawerHeader}>
								<IconButton onClick={handleDrawerClose}>
									{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
								</IconButton>
							</div>
							<List>
								<ListItem
									onClick={e => {
										history.push(`/`);
										handleDrawerClose();
									}}
									button>
									<ListItemIcon>
										<HomeIcon />
									</ListItemIcon>
									<ListItemText>Inicio</ListItemText>
								</ListItem>
								<ListItem
									onClick={e => {
										history.push(`/cormineco`);
										handleDrawerClose();
									}}
									button>
									<ListItemIcon>
										<BusinessIcon />
									</ListItemIcon>
									<ListItemText>Cormineco</ListItemText>
								</ListItem>
								<ListItem
									onClick={e => {
										history.push(`/compromiso`);
										handleDrawerClose();
									}}
									button>
									<ListItemIcon>
										<VerifiedUserIcon />
									</ListItemIcon>
									<ListItemText>Compromiso</ListItemText>
								</ListItem>
								<ListItem
									onClick={e => {
										history.push(`/alcance`);
										handleDrawerClose();
									}}
									button>
									<ListItemIcon>
										<TrendingUpIcon />
									</ListItemIcon>
									<ListItemText>Alcance</ListItemText>
								</ListItem>
								<ListItem
									onClick={e => {
										history.push(`/contacto`);
										handleDrawerClose();
									}}
									button>
									<ListItemIcon>
										<ImportContactsIcon />
									</ListItemIcon>
									<ListItemText>Contacto</ListItemText>
								</ListItem>
							</List>
						</Drawer>
					</ElevationScroll>
				</div>
			)}
		</>
	);
};

// navBar: {
// 	backgroundColor: "rgba(250, 250, 250, 0.9)"
// }
