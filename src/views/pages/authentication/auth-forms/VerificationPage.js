import React from 'react';
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Header from 'layout/MainLayout/Header';
import { useTheme } from '@mui/material/styles';



const UploadImages = () => {
  const theme = useTheme();
  const dateSaved = localStorage.getItem('dateOfBirth')

  const goToCompleted = () =>{
      window.location.href="/completed"
  }
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
          <Header />
        </Toolbar>
      </AppBar>
      <div style={{ backgroundColor: theme.palette.primary.light, paddingTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', marginTop: '100px' }}>
          <Card sx={{ borderRadius: 6, padding: '20px', width: '80%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            <CardContent>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
            <Typography color={theme.palette.secondary.main} gutterBottom variant= 'h3'>
              Verifiacation Page
            </Typography>
            <Typography variant="caption" fontSize="16px" textAlign= 'center'>
            Plase verify details
            </Typography>
          </Stack>
                
     <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', gap: '10px', marginBottom: '20px' }}>
            <TextField
              label="First Name"
              value={localStorage.getItem('firstName') || "Jon"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Last Name"
              value={localStorage.getItem('lastName') || "Doe"}
              margin="normal"
              fullWidth
              disabled
              />
            </div>
            <TextField
              label="Phone"
              value={localStorage.getItem('phone') || "123456789"}
              margin="normal"
              fullWidth
              disabled
            />
             <TextField
              label="Email"
              value={localStorage.getItem('email') || "jondoe@yopmail.com"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Aadhar"
              value={localStorage.getItem('aadhar') || "885746589753"}
              margin="normal"
              fullWidth
              disabled
            />
             <TextField
              label="Pancard"
              value={localStorage.getItem('pancard') || "BQQQC1587P"}
              margin="normal"
              fullWidth
              disabled
            />
           <TextField
              label="Date of Birth"
              value={new Date(dateSaved).toDateString() || "Thu Jan 01 1970"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Nationality"
              value={localStorage.getItem('nationality') || "India"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Gender"
              value={localStorage.getItem('gender') || "Male"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Residential Address"
              multiline
              value={localStorage.getItem('residentailAddress') || "Jon Doe lives at this address"}
              margin="normal"
              fullWidth
              disabled
            />
            <TextField
              label="Pincode"
              value={localStorage.getItem('pincode') || "445001"}
              margin="normal"
              fullWidth
              disabled
            />
             <Stack alignItems="center" justifyContent="center" spacing={1}>
           <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button onClick={goToCompleted} disableElevation  size="large" type="submit" variant="contained" color="secondary">
                  Create Account
                </Button>
              </AnimateButton>
            </Box>
            </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UploadImages;
