import React, { useState } from "react";
import {Grid, CircularProgress, Typography, Button, Tabs, Tab, Fade} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

// styles
import useStyles from "./styles";

// logo
import logo from "../../images/confinement.png";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser, registerUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading]                     = useState(false);
  var [error, setError]                             = useState(null);
  var [activeTabId, setActiveTabId]                 = useState(0);
  var [firstNameValue, setFirstNameValue]           = useState("");
  var [lastNameValue,  setLastNameValue]            = useState("");
  var [nickNameValue,  setNickNameValue]            = useState("");
  var [emailValue,     setEmailValue]               = useState("");
  var [passwordValue,  setPasswordValue]            = useState("");
  var [verifpasswordValue,  setVerifPasswordValue]  = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Se connecter avec Google
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Quelque chose ne vas pas avec votre mot de passe ou votre login ? :(
                </Typography>
              </Fade>
              <ValidatorForm name="formLogin" onSubmit={() =>
                      loginUser(
                        userDispatch,
                        emailValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    } /*ref="form" onSubmit={this.handleSubmit}*/ onError={errors => console.log(errors)}>
                <TextValidator
                  id="email"
                  validators={['required', 'isEmail']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={emailValue}
                  onChange={e => setEmailValue(e.target.value)}
                  errorMessages={['Ce champ est obligatoire', "Ceci n'est pas un email"]}
                  margin="normal"
                  placeholder="Adresse email"
                  type="email"
                  fullWidth
                  required
                />
                <TextValidator
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  errorMessages={['Ce champ est obligatoire']}
                  margin="normal"
                  placeholder="Mot de passe"
                  type="password"
                  fullWidth
                  required
                />
              </ValidatorForm>
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      emailValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        emailValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Connexion
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Mot de passe oublié ?
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Quelque chose ne vas pas avec votre mot de passe :(
                </Typography>
              </Fade>
              <ValidatorForm name="register"  /*ref="form" onSubmit={this.handleSubmit}*/> 
                <TextValidator
                  id="firstname"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={firstNameValue}
                  validators={['required']}
                  errorMessages={['Vous devez saisir un prénom']}
                  onChange={e => setFirstNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Prénom"
                  type="text"
                  fullWidth
                  required
                />
                <TextValidator
                  id="lastname"
                  validators={['required']}
                  errorMessages={['Vous devez saisir un nom']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={lastNameValue}
                  onChange={e => setLastNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Nom"
                  type="text"
                  fullWidth
                  required
                />
                <TextValidator
                  id="nickname"
                  validators={['required']}
                  errorMessages={['Saisissez votre pseudo']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={nickNameValue}
                  onChange={e => setNickNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Pseudo"
                  type="text"
                  fullWidth
                  required
                />
                <TextValidator
                  id="email"
                  validators={['required', 'isEmail']}
                  errorMessages={['Ce champ est obligatoire', 'Vous devez saisir un email']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={emailValue}
                  onChange={e => setEmailValue(e.target.value)}
                  margin="normal"
                  placeholder="Adresse mail"
                  type="email"
                  fullWidth
                  required
                />
                <TextValidator
                  id="password"
                  validators={['required']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Mot de passe"
                  type="password"
                  fullWidth
                  required
                />
                
                <TextValidator
                  id="verifpasswordValue"
                  validators={['required']}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={verifpasswordValue}
                  onChange={e => setVerifPasswordValue(e.target.value)}
                  errorMessages={['Ce champ est obligatoire', "Le mot de passe est différent du premier saisie"]}
                  margin="normal"
                  placeholder="confirmation de mot de passe"
                  type="password"
                  fullWidth
                  required
                />
              </ValidatorForm>
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button name="register"
                    onClick={() =>
                      registerUser(
                        firstNameValue,
                        lastNameValue,
                        passwordValue,
                        emailValue,
                        nickNameValue,
                        userDispatch,
                        props.history,
                        setIsLoading,
                        setError,
                      )}
                    disabled={
                      emailValue.length === 0 ||
                      passwordValue.length === 0 ||
                      firstNameValue.length === 0 ||
                      lastNameValue.length === 0 ||
                      nickNameValue.length === 0 ||
                      passwordValue !== verifpasswordValue
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Créer un compte
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames( 
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Se connecter avec Google
              </Button>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2019-2020 Confinement Expernet CDA2, MRRD. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}
export default withRouter(Login);