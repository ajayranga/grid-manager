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

import { UseSignUpSlice } from './slice';
import { selectError, selectSuccess } from './slice/selectors';
import { signUpSchema } from './schemas';

export default function StateTextFields() {
  const { actions } = UseSignUpSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const error = useSelector(selectError);
  const signUpSuccess = useSelector(selectSuccess);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    submit: null,
  };
  useEffect(() => {
    if (error !== '') setShowSnackBar(true);
  }, [error, dispatch]);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, action) => {
        dispatch(
          actions.start({
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          })
        );
        action.resetForm();
      },
    });
  useEffect(() => {
    if (signUpSuccess) navigate('/home');
  }, [navigate, signUpSuccess]);

  return (
    <Box
      component="main"
      sx={{
        width: '50vw',
        minWidth: '350px',
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
        onClose={() => setShowSnackBar(false)}
      >
        <Alert
          severity="warning"
          color="warning"
          variant="outlined"
          sx={{ minWidth: '250px' }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name">Your Name</InputLabel>
              <OutlinedInput
                id="name"
                type="name"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter name"
                fullWidth
                error={Boolean(touched.name && errors.name)}
              />
              {touched.name && errors.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter email address"
                fullWidth
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="phone">Phone Number</InputLabel>
              <OutlinedInput
                id="phone"
                type="phone"
                value={values.phone}
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                fullWidth
                error={Boolean(touched.phone && errors.phone)}
              />
              {touched.phone && errors.phone && (
                <FormHelperText error>{errors.phone}</FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(touched.password && errors.password)}
                id="-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
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
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                id="-confirmPassword"
                type="password"
                value={values.confirmPassword}
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter confirmPassword"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormHelperText error>{errors.confirmPassword}</FormHelperText>
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
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Link
              variant="h6"
              component={RouterLink}
              to="/"
              color="text.primary"
              fontSize={'medium'}
              sx={{ textDecoration: 'none' }}
            >
              Already have an account! Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
