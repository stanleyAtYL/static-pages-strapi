import React, { FC } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import { flexCenter, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles<GlobalTheme>((theme) => ({
  root: {
    position: 'relative',
    fontSize: 0,
  },
  bannerImg: {
    ...size('100%'),
  },
  summary: {
    ...size(1330, 305),
    position: 'absolute',
    bottom: -140,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'url("/agent/bannerTextBg.png")',
  },
  primaryBtn: {
    ...size(194, 56),
    marginTop: 47,
    background: theme.customPalette.mortgage.buttonBg,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'MontserratBold',
    textTransform: 'none',
  },
}));

export const Banner: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('broker');

  return (
    <div className={classes.root}>
      <img src="/broker/banner.png" className={classes.bannerImg} alt="" />
      <div className={classes.summary}>
        <Box style={{ ...flexCenter, ...size('100%') }}>
          <Box mr={'28px'} width={535}>
            <Typography variant={'h3'}>
              {t('lending partner for all loan')}
            </Typography>
          </Box>
          <Box width={480}>
            <Typography variant={'subtitle1'}>
              {t('get the best deals')}
            </Typography>
            <Button classes={{ root: classes.primaryBtn }} href="https://bridge-pos.youland.com/sign_up/broker">
              {t('sign up now')}
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
