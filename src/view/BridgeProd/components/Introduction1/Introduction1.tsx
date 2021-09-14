import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    background: '#223C3D',
    width: '100%',
    height: 'min-content',
    padding: '40px',
  },

  leftTextConvas: {
    position: 'relative',
    top: '121px',
    left: '50px',
    width: 609,
  },
  leftTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '30px',
    lineHeight: '150%',
    display: 'flex',
    color: '#FFFFFF',
    zIndex: 999,
    width: 'fit-content',
  },
  leftContent: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '170%',
    display: 'flex',
    color: '#FFFFFF',
    opacity: '0.7',
  },
}));

const Introduction1 = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation('bridge');
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Grid data-aos="fade-right" container justify="center">
        <Grid container xs={12}>
          <Grid item xs={6}>
            <img src={t('ip1_path')} style={{ float: 'right' }} />
          </Grid>

          <Grid item xs={6}>
            <div style={{ position: 'absolute' }}>
              <div className={classes.leftTextConvas}>
                <Typography className={classes.leftTitle}>
                  {t('introduction1 title')}
                  {/* A simple solution to bridge the gap
                  <br />
                  between the home you have and <br />
                  the home you want. */}
                </Typography>
                <Grid
                  container
                  justify={'center'}
                  style={{
                    paddingTop: '40px',
                    paddingBottom: '20px',
                    width: '600px',
                  }}
                  spacing={4}
                >
                  <Grid item xs={6}>
                    <Typography className={classes.leftContent}>
                      {t('introduction1 left content')}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.leftContent}>
                      {t('introduction1 right content')}
                    </Typography>
                  </Grid>
                </Grid>
                <Button>
                  <Typography
                    variant="subtitle2"
                    style={{ color: '#68DAD4', textTransform: 'none' }}
                  >
                    <div
                      style={{ display: 'inline-block' }}
                      onClick={() => {
                        router.push('/bridge/rate');
                      }}
                    >
                      {t('see your rate')} ——
                    </div>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderTop: '1px solid #68DAD4',
                        borderRight: '1px solid #68DAD4',
                        transform: 'rotate(45deg)',
                        display: 'inline-block',
                        position: 'relative',
                        right: '5px',
                      }}
                    ></div>
                  </Typography>
                </Button>
              </div>
            </div>
            <div>
              <img src="/bridge/ibackground.png" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction1;
