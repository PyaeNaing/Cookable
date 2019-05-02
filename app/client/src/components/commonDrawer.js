import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Avatar from "@material-ui/core/Avatar";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBox2tone from '@material-ui/icons/AccountBoxTwoTone';
import StarBorderTwoTone from '@material-ui/icons/StarBorderTwoTone';
import PaletteTwoTone from '@material-ui/icons/PaletteTwoTone';
import Pantry from "./pantry";
import ProfileSettings from "./profile";
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

class CommonDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
      currentSubPage : 'pantry',
      };
    }
    
    handleSubPageChange = (page) => {
      this.setState({ currentSubPage: page });
      console.log(this.state.currentSubPage);
    }
    
    render() {

      const { classes } = this.props;
      //const { currentSubPage } = this.currentSubPage;
      const renderPantry = (
        <Pantry handleSubPageChange={this.handleSubPageChange} />
      );
      const renderProfile = (
        <ProfileSettings />
      );

        return (
            <div className={classes.root}>
              <CssBaseline />
              {/* Clipped drawer toolbar removed as depreceated */}
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
                <MenuList>
                <MenuItem className={classes.menuItem} onClick={() => this.handleSubPageChange('profileSettings') }>
                  <ListItemIcon className={classes.icon}>
                    <AccountBox2tone />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.primary }} inset primary="Profile and Settings" />
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => this.handleSubPageChange('pantry')}>
                  <ListItemIcon className={classes.icon}>
                    <PaletteTwoTone />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.primary }} inset primary="Pantry" />
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => this.handleSubPageChange('pantry')}>
                  <ListItemIcon className={classes.icon}>
                    <StarBorderTwoTone />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.primary }} inset primary="Favorites" />
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => this.handleSubPageChange('pantry')}>
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
                {(this.state.currentSubPage === 'pantry') ? renderPantry : undefined }
				        {(this.state.currentSubPage === 'pantry') ? renderPantry : undefined }
				        {(this.state.currentSubPage === 'pantry') ? renderPantry : undefined }
				        {(this.state.currentSubPage === 'profileSettings') ? renderProfile : undefined }
              </main>
            </div>
          );
          
    }
  }
  
CommonDrawer.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(CommonDrawer);