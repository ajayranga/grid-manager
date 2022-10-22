import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Snackbar,
  Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { UseLoginSlice } from './slice';
import { selectError, selectSuccess } from './slice/selectors';
import { signInSchema } from './schemas';

export default function Login() {
  const { actions } = UseLoginSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const error = useSelector(selectError);
  const loginSuccess = useSelector(selectSuccess);

  useEffect(() => {
    if (error !== '') setShowSnackBar(true);
  }, [error]);

  const initialValues = {
    email: '',
    password: '',
    submit: null,
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, action) => {
        dispatch(
          actions.start({ email: values.email, password: values.password })
        );
        action.resetForm();
      },
    });
  useEffect(() => {
    if (loginSuccess) navigate('/home');
  }, [navigate, loginSuccess]);

  return (
    <Box
      component="main"
      sx={{
        width: '50vw',
        minWidth: '350px',
        maxWidth: '550px',
        margin: 'auto',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Snackbar
        open={showSnackBar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={() => {
          dispatch(actions.reset());
          setShowSnackBar(false);
        }}
      >
        <Alert
          severity="warning"
          color="warning"
          variant="outlined"
          sx={{ minWidth: '250px' }}
        >
          <AlertTitle>Error</AlertTitle>
          {JSON.stringify(error)}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Email Address</InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter email address"
                fullWidth
                size="small"
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-login">Password</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(touched.password && errors.password)}
                id="-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                size="small"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e: any) => e.preventDefault()}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter password"
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </Stack>
          </Grid>
          {errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>

          <Grid item>
            <Link
              variant="h6"
              component={RouterLink}
              to="/signup"
              color="text.primary"
              fontSize={'medium'}
              sx={{ textDecoration: 'none' }}
            >
              Don't have an account! Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
