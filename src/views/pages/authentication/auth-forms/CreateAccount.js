import React, { useState } from 'react';

import {
  TextField,
  Button,
  Box,
  Divider,
  Grid,
  Typography,
  Stack,
  useMediaQuery
} from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';

const CreateAccount = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [name,setName] = useState('');

  const phoneRegex = /^(\+\d{1,3}\s?)?(\()?\d{3}(\))?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const pincodeRegex = /^\d{6}$/;

  const [errors, setErrors] = useState({
    nameError:undefined,
    phoneError: undefined,
    emailError: undefined,
    pincodeError: undefined
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.nameError = 'Name is required';
    }

    if (!phoneRegex.test(phone)) {
      newErrors.phoneError = 'Invalid phone number';
    }

    if (!emailRegex.test(email)) {
      newErrors.emailError = 'Invalid email address';
    }

    if (!pincodeRegex.test(pincode)) {
      newErrors.pincodeError = 'Invalid pin code';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    localStorage.setItem('name',name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('pincode', pincode);

    window.location.href = '/personal-details';
  };

  const clearError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: undefined
      }));
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          clearError('nameError');
        }}
        margin="normal"
        error={errors.nameError !== undefined}
        helperText={errors.nameError}
        fullWidth
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value);
          clearError('phoneError');
        }}
        margin="normal"
        error={errors.phoneError !== undefined}
        helperText={errors.phoneError}
        fullWidth
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          clearError('emailError');
        }}
        margin="normal"
        error={errors.emailError !== undefined}
        helperText={errors.emailError}
        fullWidth
      />
      <TextField
        label="Pincode"
        value={pincode}
        onChange={(event) => {
          setPincode(event.target.value);
          clearError('pincodeError');
        }}
        margin="normal"
        error={errors.pincodeError !== undefined}
        helperText={errors.pincodeError}
        fullWidth
      />
      <Stack alignItems="center" justifyContent="center" spacing={1}>
                         
                         <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                         Before you begin your journey, please keep your original PAN and Aadhaar ready with you.
                         </Typography>
                       </Stack>
      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button
            onClick={handleSubmit}
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Open Now
          </Button>
        </AnimateButton>
      </Box>

      <Grid item xs={12}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

          <Button
            variant="outlined"
            sx={{
              cursor: 'unset',
              m: 2,
              py: 0.5,
              px: 7,
              borderColor: `${theme.palette.grey[100]} !important`,
              color: `${theme.palette.grey[900]}!important`,
              fontWeight: 500,
              borderRadius: `12px`
            }}
            disableRipple
            disabled
          >
            OR
          </Button>

          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        </Box>
      </Grid>
      <Grid item xs={12} container alignItems="center" justifyContent="center">
        <Box sx={{ mb: 2 }}>
          <a href="/verification-page">
            <Typography variant="subtitle1">Resume Application</Typography>
          </a>
        </Box>
      </Grid>
    </div>
  );
};

export default CreateAccount;
