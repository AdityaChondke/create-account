import React, {useEffect} from 'react';
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Stack,
  Typography,
  Box,
  Button
} from '@mui/material';
import lottie from "lottie-web";
import Header from 'layout/MainLayout/Header';
import { useTheme } from '@mui/material/styles';
import complete from 'assets/images/complete.json';
import AnimateButton from 'ui-component/extended/AnimateButton';


const Completed = () => {
  const theme = useTheme();

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#complete-logo"),
      animationData: complete
    });
  });
const redict = () =>{
    localStorage.clear();
    window.location.href="/";
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
              Thank you for choosing Loreum Emeperio Bank
            </Typography>
            <Typography variant="caption" fontSize="16px" textAlign= 'center'>
            Your request has now been submitted
            </Typography>
          
          <div id="complete-logo" style={{ width: 300, height: 300, zIndex: 0}}></div>
        
           <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button onClick={redict} disableElevation  size="large" type="submit" variant="contained" color="secondary">
                  Close 
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

export default Completed;
