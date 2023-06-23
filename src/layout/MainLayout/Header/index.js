
import { useTheme } from '@mui/material/styles';
import {Box } from '@mui/material';

import LogoSection from '../LogoSection';


const Header = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: {  md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );
};


export default Header;
