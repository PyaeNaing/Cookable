import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBox2tone from '@material-ui/icons/AccountBoxTwoTone';
import StarBorderTwoTone from '@material-ui/icons/StarBorderTwoTone';
import PaletteTwoTone from '@material-ui/icons/PaletteTwoTone';
import Pantry from "./pantry";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginTop: '4%',
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    //paddingTop: 4,
    marginTop: '5%',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  }
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Avatar
          alt="Profile picture"
          src="/static/images/avatar/1.jpg"
          className={classes.bigAvatar}
        />
        <br />
        <br />
        <br />
        {/* <List>
          {["Pantry", "My Recipes", "Favorite Recipes", "Profile"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <MenuList>
        <MenuItem className={classes.menuItem} onClick={() => this.handlePageChange('profile')}>
          <ListItemIcon className={classes.icon}>
            <AccountBox2tone />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Profile and Settings" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => this.handlePageChange('pantry')}>
          <ListItemIcon className={classes.icon}>
            <PaletteTwoTone />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Pantry" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => this.handlePageChange('favorites')}>
          <ListItemIcon className={classes.icon}>
            <StarBorderTwoTone />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Favorites" />
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => this.handlePageChange('myRecipes')}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Recipes" />
        </MenuItem>
      </MenuList>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Pantry />
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);