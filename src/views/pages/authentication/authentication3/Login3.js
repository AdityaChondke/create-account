import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {  Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import lottie from "lottie-web";

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
// import AuthLogin from '../auth-forms/AuthLogin';
import CreateAccount from '../auth-forms/CreateAccount';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import main from 'assets/images/main.json';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay the transition for a smooth effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    if (isLoaded) {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: main
    });
    const logoElement = document.getElementById('react-logo');
    if (logoElement) {
      logoElement.style.opacity = '1'; // Update the opacity to 1 to trigger the fade-in transition
    }
    const content = document.getElementById('content');
    if (logoElement) {
      content.style.opacity = '1'; // Update the opacity to 1 to trigger the fade-in transition
    }
  }
  }, [isLoaded]);

 

  return (
    <AuthWrapper1>
       
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid id = 'content' item sx={{ m: { xs: 1, sm: 3 }, mb: 0, zIndex:1, opacity: 0,
        transition: 'transform 0.5s ease', transform: isLoaded ? (matchDownSM ? 'translateX(0)' : 'translateX(-30%)') : 'translateX(100%)'
}}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="create-account">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Loreum Emeperio Bank
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                          Set up your Savings Account with our quick and easy online process.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <CreateAccount/>
                  </Grid>
                  
                </Grid>
              </AuthCardWrapper>
            </Grid>
            <div id="react-logo" style={{ width: 300, height: 300, zIndex: 0,   opacity: 0,
        transition: 'opacity 2.5s',}} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
