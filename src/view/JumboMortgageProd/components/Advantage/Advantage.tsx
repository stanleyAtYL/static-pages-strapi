import React, { FC } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    padding: '120px 0 78px 0',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  summary: {
    ...size(1214, 380),
    position: 'relative',
  },
  roofImg: {
    ...size(238, 100),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bgImg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  lineImg: {
    ...size(186.5, 168),
    position: 'absolute',
    top: 90,
    left: 524,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: 48,
    lineHeight: '150%',
  },
}));

export const Advantage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('jumbo');
  return (
    <Grid container xs={12} className={classes.root}>
      <img
        src={'/jumboMortgageProd/crown.png'}
        className={classes.bgImg}
        alt=""
      />
      <div className={classes.summary}>
        <Box data-aos={'fade-right'}>
          <img
            src={'/jumboMortgageProd/roof.svg'}
            className={classes.roofImg}
            alt=""
          />
          <Box position={'absolute'} top={50} left={74}>
            {/* <Typography className={classes.title}>
            A superior way to finance
          </Typography>
          <Typography className={classes.title}>a high-end home</Typography> */}
            <Typography className={classes.title} style={{ width: 600 }}>
              {t('superior way')}
            </Typography>
          </Box>
        </Box>

        <img
          src={'/jumboMortgageProd/line.svg'}
          className={classes.lineImg}
          alt=""
        />
        <Box
          data-aos={'fade-left'}
          mt={'18px'}
          color={'rgba(0, 0, 0, .6)'}
          position={'absolute'}
          top={140}
          left={648}
        >
          <Typography variant={'subtitle1'}>{t('a jumbo mortgage')}</Typography>
        </Box>
      </div>
    </Grid>
  );
};
