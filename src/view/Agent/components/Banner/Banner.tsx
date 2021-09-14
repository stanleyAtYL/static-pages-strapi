import React, { FC } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import { flexCenter, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles<GlobalTheme>((theme) => ({
  root: {
    position: 'relative',
    fontSize: 0,
  },
  bannerImg: {
    ...size('100vw', '47.64vw'),
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
    marginTop: 27,
    background: theme.customPalette.mortgage.buttonBg,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'MontserratBold',
    textTransform: 'none',
  },
}));

export const Banner: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('agent');

  return (
    <div className={classes.root}>
      <img src="/agent/banner.png" className={classes.bannerImg} alt="" />
      <div className={classes.summary}>
        <Box style={{ ...flexCenter, ...size('100%') }}>
          <Box mr={'28px'} width={535}>
            <Typography variant={'h3'}>
              {t('capital partner to close more')}
            </Typography>
          </Box>
          <Box mr={'28px'} width={480}>
            <Typography variant={'subtitle1'}>
              {t('serve a diverse group of clients')}
            </Typography>
            {/* <Button classes={{ root: classes.primaryBtn }}>Sign up now</Button> */}
          </Box>
        </Box>
      </div>
    </div>
  );
};
