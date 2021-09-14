import React, { FC, useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { size } from '@/common/styles';
import { FeatureItem } from '../FeatureItem';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  featureBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 64,
    marginBottom: 64,
    height: 684,
    background: 'rgba(240,238,244, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  circleTop: {
    ...size(360),
    borderRadius: 180,
    position: 'absolute',
    top: -180,
    right: -180,
    background: '#53269B',
  },
  circleBottom: {
    ...size(360),
    borderRadius: 180,
    position: 'absolute',
    bottom: -180,
    left: -180,
    background: '#53269B',
  },
  content: {
    paddingLeft: 171,
    paddingRight: 171,
  },
}));

export const Features2: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('rental');

  const features = useMemo(
    () => [
      {
        icon: '/rentalProd/f2-1.svg',
        content: t('rate at 4.00'),
      },
      {
        icon: '/rentalProd/f2-2.svg',
        content: t('min credit score'),
      },
      {
        icon: '/rentalProd/f2-3.svg',
        content: t('up to ltv'),
      },
      {
        icon: '/rentalProd/f2-4.svg',
        content: t('no hard credit pull'),
      },
      {
        icon: '/rentalProd/f2-5.svg',
        content: t('borrowers eligible'),
      },
      {
        icon: '/rentalProd/f2-6.svg',
        content: t('2-4 unit condo townhomes'),
      },
    ],
    [t],
  );

  return (
    <div className={classes.featureBox}>
      <div className={classes.circleTop}></div>
      <Grid
        data-aos="fade-up"
        container
        justify="center"
        xs={9}
        className={classes.content}
      >
        {features.map((f, index) => {
          return (
            <Grid key={index} item container xs={4} justify="center">
              <FeatureItem {...f} />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.circleBottom}></div>
    </div>
  );
};
