import * as Yup from 'yup';

export const createAlertSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('Please enter your name'),
  criteria: Yup.string().required().oneOf(['greater', 'less']),
  value: Yup.number()
    .integer()
    .positive()
    .max(100)
    .required('Please enter value'),
  alertDays: Yup.array().required('Choose at least one day'),
  priceSignal: Yup.string().required().oneOf(['Dk-1', 'Dk-2', 'Dk-Gas']),
  email: Yup.string().email().required('Please enter your email'),
  phone: Yup.string()
    .matches(/^[0-9]*$/, 'Phone number can only contain digits')
    .max(10)
    .required('Please enter your phone number'),
  submit: null,
});
