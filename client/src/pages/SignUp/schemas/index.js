import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('Please enter your name'),
  email: Yup.string().email().required('Please enter your email'),
  role: Yup.string().required().oneOf(['user', 'admin']),
  phone: Yup.string()
    .matches(/^[0-9]*$/, 'Phone number can only contain digits')
    .max(10)
    .required('Please enter your phone number'),
  password: Yup.string().min(8).required('Please enter your password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
});
