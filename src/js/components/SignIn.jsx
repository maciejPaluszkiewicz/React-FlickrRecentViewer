import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import SignInIcon from "../images/flckr.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { actions, signin, signout } from "react-redux-oauth2";
import compose from "recompose/compose";

import { OAUTH_URL, USER_ID, API_KEY } from "../services/flickr-service";

const mapStateToProps = state => {
  return { oauth: state.oauth };
};
// const mapDispatchToProps = dispatch => ({});

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1)
    // backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends React.Component {
  // constructor(){
  //     super();
  //     this.classes  = useStyles();
  // }

  componentWillMount() {
    // const { classes } = this.props;
    const { dispatch } = this.props;
    dispatch(
      actions.config({
        token: "request_token",
        //client_id: USER_ID,
        //client_secret: API_KEY,
        oauth_consumer_key: API_KEY,
        url: OAUTH_URL,
        providers: {
          flickr: "authorize"
        }
      })
    );
  }
  async handleSignin(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    console.log(
      await dispatch(
        actions.signin(
          {
            username: this.refs.username.value,
            password: this.refs.password.value
          },
          console.log
        )
      ),
      "====="
    );
  }

  render() {
    // const classes = useStyles();

    const { oauth } = this.props;
    /*const Signinsubcomponent = signin({
      success(user) {
        console.log(user);
      }
    })(props => <button {...props} />);
    const Signoutsubcomponent = signout({
      success() {
        console.log(arguments);
      },
      failed() {
        console.log("error");
      }
    })(props => <button {...props} />);*/

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={"paper"}>
          <Avatar
            className={"avatar"}
            alt="LOG IN to FLICKR"
            src={SignInIcon}
          />

          <Typography component="h1" variant="h5">
            Sign in to Flickr
          </Typography>
          <form
            onSubmit={this.handleSignin.bind(this)}
            //className={useStyles.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              ref="username"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              ref="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              //className={useStyles.submit}
              disabled={oauth.authenticating}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Signinsubcomponent provider="flickr">
                Signin with Flickr
              </Signinsubcomponent>
              <hr />
              <Signoutsubcomponent>Signout</Signoutsubcomponent> */}
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withStyles(useStyles, { name: "SignIn" })
)(SignIn);
