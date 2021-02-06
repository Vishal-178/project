import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
// import { Link, Redirect, useHistory, Router } from "react-router-dom";

import {
  Box,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(0),
  },

  ok1: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "50%",
    backgroundColor: "#2cb039",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),

    display: "flex",
    justify: "center",
  },
  card: {
    minWidth: 275,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const LoginView = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <div className={classes.ok1}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Card className={classes.card}>
              <CardContent>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Must be a valid email")
                      .max(255)
                      .required("Email is required"),
                    password: Yup.string()
                      .required("Please Enter your password")
                      .max(255)
                      .min(8, "Password is too short")
                      .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        "A-z,0-9,!@.."
                      ),
                  })}
                  onSubmit={(fields) => {
                    <RouterLink to="/"></RouterLink>;
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Box
                        alignItems="center"
                        display="flex"
                        flexDirection="column"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/image/avtar.jpg"
                          className={classes.large}
                        />
                        <Typography variant="h6">Admin Login</Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                          Sign in to your account
                        </Typography>
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label="Email Address"
                          margin="normal"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          variant="outlined"
                          value={values.email}
                        />
                        <TextField
                          error={Boolean(touched.password && errors.password)}
                          fullWidth
                          helperText={touched.password && errors.password}
                          label="Password"
                          margin="normal"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          variant="outlined"
                        />
                        <Grid item>
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label="Remember me"
                          />
                          <ThemeProvider theme={theme}>
                            <Button
                              variant="contained"
                              color="primary"
                              //   disabled={isSubmitting}
                              type="submit"
                            >
                              Login
                            </Button>
                          </ThemeProvider>
                        </Grid>
                      </Box>
                    </form>
                  )}
                </Formik>
              </CardContent>
              <Container>
                <Grid item>
                  <Box fullWidth>
                    <Typography color="textSecondary" variant="subtitle2">
                      Contect with us
                      <Button>
                        <Avatar alt="Remy Sharp" src={"/image/fb.png"} />
                      </Button>
                      <Button>
                        <Avatar alt="Remy Sharp" src="/image/tw.jpg" />
                      </Button>
                    </Typography>
                  </Box>
                </Grid>
              </Container>
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
