import React, { useEffect, useState } from 'react';
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Box } from '@mui/system';

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { createAlertSchema } from './schemas';
import { selectError, selectSuccess } from './slice/selectors';
import { UseCreateAlertSlice } from './slice/index';

export default function Login() {
  const { actions } = UseCreateAlertSlice();
  const [showSnackBar, setShowSnackBar] = useState(false);

  const dispatch = useDispatch();

  const success = useSelector(selectSuccess);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error !== '' || success) setShowSnackBar(true);
  }, [error, success]);

  const initialValues = {
    name: '',
    criteria: 'greater',
    value: 0,
    alertDays: ['Monday'],
    priceSignal: 'Dk-1',
    email: '',
    phone: '',
    submit: null,
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: createAlertSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, action) => {
        dispatch(
          actions.start({
            name: values.name,
            phone: values.phone,
            email: values.email,
            criteria: values.criteria,
            value: values.value,
            alertDays: values.alertDays,
            priceSignal: values.priceSignal,
          })
        );
        // action.resetForm();
      },
    });

  return (
    <>
      <Box
        component='main'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Snackbar
          open={showSnackBar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={6000}
          onClose={() => {
            setShowSnackBar(false);
            dispatch(actions.reset());
          }}
        >
          <Alert
            severity={error ? 'error' : success ? 'success' : 'info'}
            color={error ? 'error' : success ? 'success' : 'info'}
            variant='outlined'
            sx={{ minWidth: '250px' }}
          >
            <AlertTitle>
              {error ? 'Error' : success ? 'Congratulations' : ''}
            </AlertTitle>
            {error ? error : success ? 'Saved Successfully' : ''}
          </Alert>
        </Snackbar>

        <form
          onSubmit={handleSubmit}
          style={{ margin: 'auto', padding: '20px 16px' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h5' component='h5'>
                Create Alert
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <OutlinedInput
                  id='name'
                  type='name'
                  value={values.name}
                  name='name'
                  size='medium'
                  placeholder='name'
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.name && errors.name)}
                />
                {touched.name && errors.name && (
                  <FormHelperText error>{errors.name}</FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor='criteria'>Criteria</InputLabel>
              <Stack spacing={1}>
                <RadioGroup
                  row
                  name='criteria'
                  value={values.criteria}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value='greater'
                    control={<Radio />}
                    label='Greater than'
                  />
                  <FormControlLabel
                    value='less'
                    control={<Radio />}
                    label='Less than'
                  />
                </RadioGroup>
                {touched.criteria && errors.criteria && (
                  <FormHelperText error>{errors.criteria}</FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <OutlinedInput
                  id='value'
                  type='number'
                  value={values.value}
                  name='value'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  size='medium'
                  placeholder='value'
                  fullWidth
                  error={Boolean(touched.value && errors.value)}
                />
                {touched.value && errors.value && (
                  <FormHelperText error>{errors.value}</FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl>
                  <InputLabel id='alert-Days'>Day</InputLabel>
                  <Select
                    labelId='alert-Days'
                    id='alertDays'
                    name='alertDays'
                    multiple
                    value={values.alertDays}
                    onChange={handleChange}
                    fullWidth
                    size='medium'
                    input={<OutlinedInput label='Days' />}
                    onBlur={handleBlur}
                    error={Boolean(touched.alertDays && errors.alertDays)}
                  >
                    {[
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday',
                    ].map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {touched.alertDays && errors.alertDays && (
                  <FormHelperText error>{errors.alertDays}</FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl>
                  <InputLabel id='price-Signal'>Price Signal</InputLabel>
                  <Select
                    labelId='price-Signal'
                    id='priceSignal'
                    name='priceSignal'
                    value={values.priceSignal}
                    fullWidth
                    size='medium'
                    input={<OutlinedInput label='Price Signal' />}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.priceSignal && errors.priceSignal)}
                  >
                    {['Dk-1', 'Dk-2', 'Dk-Gas'].map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {touched.priceSignal && errors.priceSignal && (
                  <FormHelperText error>{errors.priceSignal}</FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <OutlinedInput
                  id='email'
                  type='email'
                  value={values.email}
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  size='medium'
                  placeholder='Email address'
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
                <OutlinedInput
                  id='phone'
                  type='phone'
                  value={values.phone}
                  name='phone'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  size='medium'
                  placeholder='Phone Number'
                  fullWidth
                  error={Boolean(touched.phone && errors.phone)}
                />
                {touched.phone && errors.phone && (
                  <FormHelperText error>{errors.phone}</FormHelperText>
                )}
              </Stack>
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item>
              <Button
                size='large'
                type='submit'
                variant='contained'
                color='primary'
                sx={{ pl: 5, pr: 5 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
