import { GlobalTheme } from '@/theme';
import { Grid, Paper, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { size } from '@/common/styles';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useVisible } from '@/hooks';
import { ContactUsModal } from '@/components/organisms';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles<GlobalTheme>((theme) => ({
  leftCanvas: {
    zIndex: 999,
  },
  rightCanvas: {
    zIndex: 500,
  },
  heroTitle: {
    maxWidth: '671px',
    minHeight: '144px',
    fontFamily: 'MontserratBold',
    fontStyle: 'normal',
    fontSize: '48px',
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.03em',
    color: '#051229',
  },

  heroSubtitle: {
    maxWidth: '700px',
    minHeight: '123px',
    marginTop: '78px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '170%',
    display: 'flex',
    alignItems: 'center',
    color: '#150D02',
  },

  heroMenu: {
    position: 'relative',
    height: '96px',
    width: 'max-content',
    top: '40px',
    borderRadius: '5px',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '15px',
    paddingRight: '30px',
    backgroundColor: '#1E1201',
    boxShadow: '5px 10px 50px 0px rgba(0, 0, 0, 0.55)',
  },

  menuTxtBtn: {
    height: '64px',
    marginLeft: '15px',
    marginRight: '15px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      fontFamily: 'MontserratBold',
      color: '#E0A44D',
    },
  },

  menuBtn: {
    background: theme.customPalette['mortgage'].buttonBg,
    ...size(194, 64),
    borderRadius: '3px',
    boxShadow:
      '1px 1px 2px rgba(23, 26, 31, 0.5), -1px -1px 2px rgba(240, 245, 254, 0.1)',
    fontFamily: 'MontserratBold',
    fontSize: '18px',
    color: '#fff',
    textTransform: 'none',
  },
}));

const Hero = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation('homepage');

  const router = useRouter();

  const {
    visible,
    open: openContactUsModal,
    close: closeContactUsModal,
  } = useVisible();

  return (
    <div>
      <Grid container>
      
        <Slide direction='right' in={true} mountOnEnter unmountOnExit {...(true ? { timeout: 800 } : {})}>
          <Grid
            item
            xs={12}
            sm={7}
            className={classes.leftCanvas}
          >
            

            <div>
              <div className={classes.heroTitle}>
                {t('mortgages accessible to all')}
              </div>
              {/* <div className={classes.heroTitle}>
                Makinng mortgages<br></br> accessible to all.
              </div> */}
              <div className={classes.heroSubtitle}>
                {t('be able to own a home')}
              </div>

              <Paper className={classes.heroMenu}>
                <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={() => {
                    router.push('/mortgage/rate');
                  }}
                >
                  {t('mortgage')}
                </Button>
                <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={() => {
                    router.push('/alter-mortgage/rate');
                  }}
                >
                  {t('alternative mortgage')}
                </Button>
                <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={() => {
                    router.push('/rental/rate');
                  }}
                >
                  {t('rental')}
                </Button>
                <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={() => {
                    router.push('/bridge/rate');
                  }}
                >
                  {t('bridge')}
                </Button>
                {/* <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={openContactUsModal}
                >
                  {t('jumbo')}
                </Button> */}
                <Button
                  classes={{ root: classes.menuTxtBtn }}
                  onClick={() => {
                    router.push('/jumbo/rate');
                  }}
                >
                  {t('jumbo')}
                </Button>
                <Button
                  classes={{
                    root: classes.menuBtn,
                  }}
                  onClick={() => {
                    router.push('/mortgage/rate');
                  }}
                >
                  {t('see your rates')}
                </Button>
              </Paper>
            </div>
          </Grid>

        </Slide>
        <Slide direction='left' in={true} mountOnEnter unmountOnExit {...(true ? { timeout: 800 } : {})}>
        <Grid
          item
          xs={12}
          sm={5}
          className={classes.rightCanvas}
        >
          <div>
            <img
              src={'/home/house-graphic.png'}
              style={{ position: 'relative', bottom: '233' }}
            />
          </div>
        </Grid>
        </Slide>
      </Grid>
      <ContactUsModal
        open={visible}
        onClose={closeContactUsModal}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      />
    </div>
  );
};

export default Hero;
