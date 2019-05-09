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
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    height: 140,
    width: 200,
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  control: {
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200,
    flexBasis: 200,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
      confirmNewPassword: ""
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
  
  handleRadioChange = (gender) => {
    this.setState({
      gender: gender,
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
              <form style={styles.form}>
                    <TextField
                      style={styles.textField}
                      id="fName"
                      label="First Name"
                      value={this.state.fName}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                   <br />
                    <TextField
                      style={styles.textField}
                      id="lName"
                      label="Last Name"
                      value={this.state.lName}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                    <br />
                    <div className={classes.root}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            className={classes.group}
                            value={this.state.gender}
                            onChange={this.handleRadioChange}
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                          </RadioGroup>
                      </FormControl>
                    </div>
                    <br />
                    <TextField
                      style={styles.textField}
                      id="username"
                      label="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                    />
                    <br /><br />
                    <DatePicker
                      style={styles.textField}
                      selected={this.state.dob}
                      onChange={this.handleDateChange}
                    />
                    <br /><br />
                    <div className={classes.heroButtons}>
										<Grid container spacing={16} justify="center">
											<Grid item>
												<Button variant="contained" color="primary" onClick={() => this.handlePageChange('loginPage')}>
                        Save Info
												</Button>
											</Grid>
											<Grid item>
												<Button variant="outlined" color="primary" onClick={() => this.handlePageChange('registerPage')}>
                        Cancel
												</Button>
											</Grid>
										</Grid>
                    <br />
									</div>
                  </form>
            </Paper>
            <Paper >
              <form style={styles.form}>
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
              <br />
              <TextField
                      style={styles.textField}
                      id="newPassword"
                      label="New Password"
                      value={this.state.newPassword}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
              />
              <br />
              <TextField
                      style={styles.textField}
                      id="confirmNewPassword"
                      label="Confirm New Password"
                      value={this.state.confirmNewPassword}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
              />
              <br />
              <Button variant="contained" className={classes.button} style={styles.button}>
              Update Password
              </Button>
              </form>
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
