import React from 'react';
import { Hero, Process, Products, Reviews, WhyUs } from './components';
import { Box, makeStyles, Typography } from '@material-ui/core';

import CookieConsent from 'react-cookie-consent';

const useStyles = makeStyles(() => ({
  canvas: {
    background: '#F6F9FC',
  },
  heroSegment: {
    padding: '150px',
    paddingLeft: '250px',
    paddingRight: '250px',
    height: '800px',
  },
}));

const HomePage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.canvas}>
      <CookieConsent
        location="bottom"
        overlay
        // debug={true}
        buttonText="Accept cookies"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '18px', fontWeight: 'bold' }}
      >
        <Typography variant="body1">
          This website uses cookies to ensure you get the best experience on our
          website. By continuing to use this website, you agree to our use of
          cookies.
        </Typography>
      </CookieConsent>

      <Box className={classes.heroSegment}>
        <Hero />
      </Box>
      <WhyUs />
      <Process />
      <Products />
      <Reviews />
    </div>
  );
};

export default HomePage;
