import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  AppBar,
  Toolbar,
  Stack,
  InputAdornment,
  useMediaQuery
} from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useTheme } from '@mui/material/styles';
import Header from 'layout/MainLayout/Header';
import { IconCloudUpload, IconUpload } from '@tabler/icons';
import Loader from 'ui-component/Loader';


const PersonalDetails = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [pincode, setPincode] = useState(localStorage.getItem('pincode') || '');
  const [errors, setErrors] = useState({});
  const [phoneOtp, setPhoneOtp] = useState(undefined);
  const [emailOtp, setEmailOtp] = useState(undefined);
  const [aadhar,setAadhar] = useState(undefined);
  const [pancard,setPancard] = useState('');
  const [verifiedUser, setVerifiedUser] = useState(false);
  const [aadharOtp, setAadharOtp] = useState(undefined);
 
  const pancardRegex = /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/;
  const aadhaarRegex = /^\d{12}$/;
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
  
  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const goBack= () =>{
    localStorage.removeItem('phone', phone);
    localStorage.removeItem('email', email);
    localStorage.removeItem('pincode', pincode);
    localStorage.removeItem('name',name);
    window.location.href="/create-account"
  }

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [showAadhar, setShowAadhar] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const showAadharDiv =() => {
    const newErrors = {};
    if (emailOtp != "1234") {
      newErrors.emailOtp = 'Invalid OTP';
      setErrors(newErrors);
      return;
    }else {
      setEmailVerified(true);
      setShowAadhar(true)
     setErrors({});
  }
   
  }

const verifyPhone = () =>{
  const newErrors = {};
  if (phoneOtp != "1234") {
    newErrors.phoneOtp = 'Invalid OTP';
    setErrors(newErrors);
    return;
  }else {
    setPhoneVerified(true);
   setErrors({});
}
}
  
const verifyAadhar =() =>{
    const newErrors = {};
    if (aadharOtp != "1234") {
      newErrors.aadharOtp = 'Invalid OTP';

    }
    if (!aadhaarRegex.test(aadhar)) {
      newErrors.aadhar = 'Invalid aadhar card number';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }

    else {
    setVerifiedUser(true);
     setErrors({});
  }
  }


  const handleFileChange = (event) => {
    setUploaded(false)
    const file = event.target.files[0];
    setSelectedFiles(file);
  };

  const handleUpload = () => {
    if (selectedFiles != null) {
      setUploading(true);
      setTimeout(() => {
        setUploaded(true)
        setUploading(false);
      }, 2000);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
    }
    
    if (dateOfBirth === null) {
        console.log("here")
        newErrors.dateOfBirth = 'Date of Birth is required';
      } else {
        const age = calculateAge(dateOfBirth);
        if (age < 18) {
          newErrors.dateOfBirth = 'You must be at least 18 years old';
        }
    }
    
    if (!nationality) {
      newErrors.nationality = 'Nationality is required';
    }

    if (!residentialAddress.trim()) {
      newErrors.residentialAddress = 'Residential Address is required';
    }
    if (!pancardRegex.test(pancard)) {
      newErrors.pancard = 'Invalid pancard number';
    }
    if (uploaded === false) {
      newErrors.pancard = 'Upload pancard';
    }

    if (Object.keys(newErrors).length > 0 || uploaded === false) {
      setErrors(newErrors);
    } else {
      setErrors({});
      localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('pincode', pincode);
    localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
    localStorage.setItem('dateOfBirth', dateOfBirth);
    localStorage.setItem('nationality', nationality);
    localStorage.setItem('residentailAddress', residentialAddress);
    localStorage.setItem('gender', gender);
    localStorage.setItem('pancard', pancard);
    localStorage.setItem('selectedFiles',selectedFiles);

  
      window.location.href='/verification-page'

    }
  };

  useEffect(() => {
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('pincode', pincode);
  }, [phone, email, pincode]);

  const clearError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: ''
      }));
    }
  };

  return (
    <>
    <AppBar
    enableColorOnDark
    position="fixed"
    color="inherit"
    elevation={0}
    sx={{
      bgcolor: theme.palette.background.default,
      
    }}
  >
    <Toolbar>
      <Header  />
    </Toolbar>
  </AppBar>
< div style={{  backgroundColor: theme.palette.primary.light , paddingTop:'10px'}} >

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', marginTop:'100px',}}>

      <Card sx={{ borderRadius: 6, padding: '20px', width: '80%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Stack alignItems="center" justifyContent="center" spacing={1}>
            <Typography color={theme.palette.secondary.main} gutterBottom variant= 'h3'>
              Hi, {localStorage.getItem('name')}
            </Typography>
            <Typography variant="caption" fontSize="16px" textAlign= 'center'>
            Quickly verify details and get started.
            </Typography>
          </Stack>

            <TextField
            
              label="Phone"
              value={phone}
              onChange={(event) => {
                const value = event.target.value;
                setPhone(value);
                clearError('phone');
              }}
              margin="normal"
              fullWidth
              disabled={phone !== ''}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
           <div style= {{display:'flex', flexDirection:'row', width:'100%', justifyContent: (matchDownSM ? 'space-evenly' : 'flex-start' ),alignItems:'center', gap:'10px', margin : '5px'}}>
            <TextField
            size="small" 
            margin="normal"
              label="OTP"
              type='password'
              value={phoneOtp}
              onChange={(event) => {
                const value = event.target.value;
                setPhoneOtp(value);
                clearError('phoneOtp');
              }}
              error={Boolean(errors.phoneOtp)}
              helperText={errors.phoneOtp}
              disabled={phoneVerified}
            />
            <Box sx={{ mt: errors.phoneOtp? -2 :1 }} >
              <AnimateButton>
                <Button  onClick={verifyPhone}  disableElevation  size="small" type="submit" variant="contained" color="secondary" disabled={phoneVerified}>
                  Verify
                </Button>
              </AnimateButton>
              </Box>
            </div> 
            <TextField
              label="Email"
              value={email}
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
                clearError('email');
              }}
              margin="normal"
              fullWidth
              disabled={email !== ''}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
        <div style= {{display:'flex', flexDirection:'row', width:'100%', justifyContent: (matchDownSM ? 'space-evenly' : 'flex-start' ),alignItems:'center', gap:'10px', margin : '5px'}}>
            <TextField
              label="OTP"
              size="small" 
              type='password'
              margin="normal"
              value={emailOtp}
              onChange={(event) => {
                const value = event.target.value;
                setEmailOtp(value);
                clearError('emailOtp');
              }}
              error={Boolean(errors.emailOtp)}
              helperText={errors.emailOtp}
              disabled={emailVerified}
            />
            <Box sx={{ mt: errors.emailOtp? -2 :1 }} >
              <AnimateButton>
              <Button onClick={showAadharDiv} disableElevation  size="small" type="submit" variant="contained" color="secondary" disabled={emailVerified}>
                  Verify
                </Button>
              </AnimateButton>
              </Box>
            </div> 
{showAadhar && (
             <>
            <TextField
              label="Aadhar"
              value={aadhar}
              onChange={(event) => {
                const value = event.target.value;
                setAadhar(value);
                clearError('aadhar');
              }}
              margin="normal"
              fullWidth
              error={Boolean(errors.aadhar)}
              helperText={errors.aadhar}
              disabled={verifiedUser}
            />
         <div style= {{display:'flex', flexDirection:'row', width:'100%', justifyContent: (matchDownSM ? 'space-evenly' : 'flex-start' ),alignItems:'center', gap:'10px'}}>
            <TextField
              size="small" 
              label="OTP"
              value={aadharOtp}
              margin="normal"
              type='password'
              onChange={(event) => {
                const value = event.target.value;
                setAadharOtp(value);
                clearError('aadharOtp');
              }}
              error={Boolean(errors.aadharOtp)}
              helperText={errors.aadharOtp}
            />
             <Box sx={{ mt: errors.aadharOtp? -2 :1 }} >
              <AnimateButton>
              <Button onClick={verifyAadhar} disableElevation  size="small" type="submit" variant="contained" color="secondary" disabled={verifiedUser}>
                  Verify
                </Button>
              </AnimateButton>
              </Box>
            </div>   

            </>
            )}
           
          {verifiedUser ?
          (
          <>
            <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', gap: '10px', marginBottom: '20px' }}>
              <TextField
                label="First Name"
                value={firstName}
                onChange={(event) => {
                  const value = event.target.value;
                  setFirstName(value);
                  clearError('firstName');
                }}
                margin="normal"
                fullWidth
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(event) => {
                  const value = event.target.value;
                  setLastName(value);
                  clearError('lastName');
                }}
                margin="normal"
                fullWidth
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </div>
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dateOfBirth}
                onChange={(newDate) => {
                    setDateOfBirth(newDate);
                    clearError('dateOfBirth');
                }}
              />  
              </LocalizationProvider>
             
            </div>
            {errors.dateOfBirth && <div style={{ left:'0%', width:'100%' , marginTop:'-15px', marginBottom:'20px', marginLeft:'7px'}}> <Typography variant="caption" color="error">{errors.dateOfBirth}</Typography></div>}
            <FormControl fullWidth error={Boolean(errors.nationality)} style={{ marginBottom: '20px' }}>
              <Select value={nationality} 
                      onChange={(event) => {
                        const value = event.target.value;
                        setNationality(value);
                        clearError('nationality');
                    }}
                    displayEmpty>
                <MenuItem value="" disabled>
                  Select nationality
                </MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
              </Select>
              {errors.nationality &&  <div style={{ left:'0%', width:'100%', marginTop:'5px', marginLeft:'7px'}}><Typography variant="caption" color="error">{errors.nationality}</Typography></div>}
            </FormControl>
            <TextField
              label="Residential Address"
              value={residentialAddress}
              onChange={(event) => {
                const value = event.target.value;
                setResidentialAddress(value);
                clearError('residentialAddress');
              }}
              margin="normal"
              fullWidth
              multiline
              rows={4}
              error={Boolean(errors.residentialAddress)}
              helperText={errors.residentialAddress}
            />
            <TextField
              label="Pincode"
              value={pincode}
              onChange={(event) => {
                const value = event.target.value;
                setPincode(value);
                clearError('pincode');
              }}
              margin="normal"
              fullWidth
              disabled={pincode !== ''}
              error={Boolean(errors.pincode)}
              helperText={errors.pincode}
            />
            <FormControl fullWidth error={Boolean(errors.gender)} style={{ marginBottom: '20px' }}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                value={gender}
                onChange={(event) => {
                  const value = event.target.value;
                  setGender(value);
                  clearError('gender');
                }}
                style={{ flexDirection: 'row' }}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              {errors.gender && <Typography variant="caption" color="error">{errors.gender}</Typography>}
            </FormControl>

            <div style={{ display: 'flex', justifyContent:'space-between', width:'100%' , flexDirection:(matchDownSM?'column':'row') ,alignItems:'center' }} >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormLabel>PanCard</FormLabel>
            <TextField
              label="Pancard Number"
              value={pancard}
              onChange={(event) => {
                const value = event.target.value;
                setPancard(value);
                clearError('pancard');
              }}
       
              margin="normal"
              error={Boolean(errors.pancard)}
              helperText={errors.pancard}
            />
            </div>
           
                {selectedFiles === undefined && (
                <Box sx={{ mt: 2 }}>
                    <InputAdornment>
                    <AnimateButton>
                      <Button disableElevation  size="large" onChange={handleFileChange}   component="label"  variant="contained" color="secondary" startIcon={<IconUpload />}>
                        Upload PanCard
                        <input type="file" accept="image/*" style={{ display: 'none' }} multiple />
                      </Button>
                      </AnimateButton>
                    </InputAdornment>
                 </Box>
                )}
               </div>
                {uploading && <Loader />}
                 <div>
                         {selectedFiles && (
                                  <>
                                    <img
                                      src={URL.createObjectURL(selectedFiles)}
                                      alt="Uploaded file"
                                      style={{
                                        width: '50%',
                                        position: 'relative',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        height: 'auto',
                                        marginTop: '10px'
                                      }}
                                    />
                                    <div
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: '100%',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        marginTop:'20px'
                                      }}
                                    >
                                      <InputAdornment>
                                      <AnimateButton>
                                        <Button disableElevation  size="small" onChange={handleFileChange}   component="label"  variant="contained" color="secondary" startIcon={<IconUpload />}>
                                          Update Image
                                          <input type="file" accept="image/*" style={{ display: 'none' }} multiple />
                                        </Button>
                                        </AnimateButton>
                                      </InputAdornment>
                                      {uploading && <Loader />}
                                      <AnimateButton>
                                      <Button
                                      disableElevation  size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleUpload}
                                        startIcon={<IconCloudUpload />}
                                        disabled={uploading || uploaded }
                                      >
                                        {uploading ? 'Uploading...' : 'Upload'}
                                      </Button>
                                      </AnimateButton>
                                     
                                     
                                    </div>
                                  </>
                                )}

                </div>
                <Box sx={{ mt: 5 }}>
              <AnimateButton>
                <Button onClick={handleSubmit} disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Save Details
                </Button>
              </AnimateButton>
            </Box>
        
        </>) : (<Box sx={{ mt: 10 }}>
              <AnimateButton>
                <Button onClick={goBack} disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Go Back
                </Button>
              </AnimateButton>
            </Box>)}
        </div>
        </CardContent>
      </Card>
    </div>
    </div>
    </>
  );
};

export default PersonalDetails;
