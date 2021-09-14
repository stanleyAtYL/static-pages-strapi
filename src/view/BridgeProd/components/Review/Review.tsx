import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { ReviewCarousel } from '@/components/molecules';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
const useStyles = makeStyles(() => ({
  review: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: 'fit-content',
    background: '#fff;',
  },
  bgCanvas: {
    position: 'absolute',
    right: '0px',
  },
  bgImg: {
    ...size(760, 598),
    position: 'relative',
    bottom: '140px',
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

// const reviewData = [
//   {
//     comment:
//       'YouLand has helped me close many deals within the past few years. When I need a loan closed quickly and with certainty I know YouLand is the right choice! ',
//     name: 'Jason W',
//     location: '@ San Francisco, CA',
//     product: '$2MM Purchase Bridge Loan',
//   },
// ];

export const Review: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('bridge');

  const reviewData = useMemo(
    () => [
      {
        comment: t('review content'),
        name: 'Jason W',
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
      <div className={classes.bgCanvas}>
        <img src="/bridge/reviewBg.png" className={classes.bgImg} alt="" />
      </div>
      <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <ReviewCarousel
          style={{ width: 750, marginTop: '80px', marginBottom: '40px' }}
          scene={'bridge'}
          data={reviewData}
        />
      </Box>
    </div>
  );
};
