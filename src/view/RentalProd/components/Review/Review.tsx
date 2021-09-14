import React, { FC, useMemo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { ReviewCarousel } from '@/components/molecules';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  review: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: 668,
    background: '#fff;',
  },
  bgImg: {
    ...size(850, 664),
    position: 'absolute',
    top: 0,
    right: 0,
  },
  left: {},
  right: {},
  divideText: {},
  divideLine: {
    ...size('100%', 48),
    ...flexCenterV,
    position: 'absolute',
    top: -24,
    left: 0,
    '& $divideText': {
      width: 499,
      textAlign: 'center',
      fontFamily: 'MontserratBold',
      fontSize: 32,
    },
    '& $left, & $right': {
      ...size('calc(50% - 249.5px)', '1px'),
      background: 'rgba(0, 0, 0, .5)',
    },
  },
}));

export const Review: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('rental');

  const reviewData = useMemo(
    () => [
      {
        comment: t('review content'),
        name: 'Carol Y',
        location: t('review address'),
        product: t('review product'),
      },
    ],
    [t],
  );

  return (
    <div className={classes.review}>
      <div className={classes.divideLine}>
        <div className={classes.left} />
        <div className={classes.divideText}>{t('review title')}</div>
        <div className={classes.right} />
      </div>
      <img src="/rentalProd/reviewBg.png" className={classes.bgImg} alt="" />
      <Box
        mt={'110px'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <ReviewCarousel
          style={{ width: 750 }}
          scene={'rental'}
          data={reviewData}
        />
      </Box>
    </div>
  );
};
