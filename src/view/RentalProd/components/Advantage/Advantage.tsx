import React, { FC, useMemo } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    padding: '120px 0',
    background: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  summary: {
    ...flexCenterV,
    justifyContent: 'flex-end',
  },
  summaryContent: {
    position: 'relative',
    width: 493,
    paddingTop: 150,
  },
  roofImg: {
    ...size(238, 100),
    position: 'absolute',
    top: 72,
    left: -62,
  },
  lineImg: {
    ...size(70.5, 63.5),
    position: 'absolute',
    top: 354,
    left: -44,
  },
  detail: {
    padding: '56px 0 36px 18px',
    display: 'flex',
    flexDirection: 'column',
  },
  featureItem: {
    width: '100%',
    position: 'relative',
    padding: '38px 116px 20px 70px',
    background: 'transparent',
    '&:nth-child(2n)': {
      background: 'rgba(166, 169, 172, .1)',
    },
  },
  itemIcon: {
    top: 14,
    left: 14,
    position: 'absolute',
    ...size(48),
  },
  circle: {
    ...size(540),
    borderRadius: 270,
    position: 'absolute',
    bottom: -270,
    right: -270,
    background: '#156EFA',
  },
}));

export const Advantage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('rental');

  const benefits = useMemo(
    () => [
      {
        icon: '/rentalProd/rate.svg',
        title: t('competitive rates'),
        desc: t('we offer'),
      },
      {
        icon: '/rentalProd/process.svg',
        title: t('streamlined process'),
        desc: t('application is easy'),
      },
      {
        icon: '/rentalProd/term.svg',
        title: t('flexible terms'),
        desc: t('depending on needs'),
      },
    ],
    [t],
  );

  return (
    <Grid container xs={12} className={classes.root}>
      <Grid data-aos="fade-right" className={classes.summary} item xs={6}>
        <div className={classes.summaryContent}>
          <img
            src={'/rentalProd/roof.svg'}
            className={classes.roofImg}
            alt=""
          />
          <Typography variant={'h3'}>{t('help needs')}</Typography>
          <img
            src={'/rentalProd/line.svg'}
            className={classes.lineImg}
            alt=""
          />
          <Box mt={'18px'} color={'rgba(0, 0, 0, .6)'}>
            <Typography variant={'subtitle1'}>
              {t('program designated')}
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid data-aos="fade-left" item xs={6} className={classes.detail}>
        {benefits.map((benefit) => {
          return (
            <div key={benefit.title} className={classes.featureItem}>
              <img src={benefit.icon} className={classes.itemIcon} alt="" />
              <Typography
                style={{ fontFamily: 'MontserratBold' }}
                variant={'body1'}
              >
                {benefit.title}
              </Typography>
              <Typography variant={'body1'}>{benefit.desc}</Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};
