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
  lineImg: {
    ...size(186.5, 168),
    position: 'absolute',
    top: 90,
    left: 414,
  },
}));

export const Advantage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('alternativeMortgage');

  return (
    <Grid container xs={12} className={classes.root}>
      <div className={classes.summary}>
        <img
          src={'/alternativeMortgageProd/roof.svg'}
          className={classes.roofImg}
          alt=""
        />
        <Box position={'absolute'} top={50} left={74}>
          {/* <Typography variant={'h3'}>A unique mortgage</Typography>
          <Typography variant={'h3'}> that suits your</Typography>
          <Typography variant={'h3'}>needs</Typography> */}
          <Typography variant={'h3'}>{t('suits your needs')}</Typography>
        </Box>

        <img
          src={'/alternativeMortgageProd/line.svg'}
          className={classes.lineImg}
          alt=""
        />
        <Box
          mt={'18px'}
          color={'rgba(0, 0, 0, .6)'}
          position={'absolute'}
          top={140}
          left={538}
        >
          <Typography variant={'subtitle1'}>
            {t('home loan program')}
          </Typography>
        </Box>
      </div>
    </Grid>
  );
};
