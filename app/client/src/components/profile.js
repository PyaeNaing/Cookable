import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  pageTitle: {

  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 25,
    marginRight: 25,
    width: 200
  },
});

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      gender: "",
      email: "",
      username: "",
      dob: new Date(),
      oldPassword: "",
      newPassword: "",
    };
  }
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      dob: date,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            <Paper >
              <Typography style={styles.pageTitle} variant="headline">Profile</Typography>
              <form style={styles.container}>
                    <TextField
                      style={styles.textField}
                      id="fName"
                      label="First Name"
                      value={this.state.fName}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      style={styles.textField}
                      id="lName"
                      label="Last Name"
                      value={this.state.lName}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                    <MenuItem>
                      <MenuItem>Male</MenuItem>
                      <MenuItem>Female</MenuItem>
                      <MenuItem>Don't want to specify</MenuItem>
                    </MenuItem>
                    <TextField
                      style={styles.textField}
                      id="username"
                      label="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                    {/* <TextField
                      style={styles.textField}
                      id="dob"
                      label="Date of Birth"
                      value={this.state.dob}
                      onChange={this.handleDateChange}
                      margin="normal"
                      variant="outlined"
                    /> */}
                    <DatePicker
                      style={styles.textField}
                      selected={this.state.dob}
                      onChange={this.handleDateChange}
                    />
                    <Button variant="contained" className={classes.button}>
                    Save Info
                    </Button>
                    <Button variant="contained" className={classes.button}>
                    Return without Saving
                    </Button>
                  </form>
            </Paper>
            <Paper >
              <Typography style={styles.pageTitle} variant="headline">Update Password</Typography>
              <TextField
                      style={styles.textField}
                      id="oldPassword"
                      label="Old Password"
                      value={this.state.oldPassword}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
              <TextField
                      style={styles.textField}
                      id="newPassword"
                      label="New Password"
                      value={this.state.newPassword}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
              <Button variant="contained" className={classes.button}>
              Update Password
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProfileSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileSettings);
