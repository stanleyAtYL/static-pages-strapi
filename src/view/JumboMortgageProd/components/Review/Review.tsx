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
    background:
      'linear-gradient(90deg, rgba(37, 45, 62, 0.9) 0%, rgba(81, 50, 79, 0.9) 100%)',
  },
  bgImg: {
    ...size(760, 598),
    position: 'absolute',
    bottom: 0,
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
      display: 'flex',
      alignItems: 'center',
      background: '#252D3E',
      ...size(213),
      borderRadius: 213,
      textAlign: 'center',
      verticalAlign: 'middle',
      color: '#FFFFFF',
      fontWeight: 300,
      fontFamily: 'Montserrat',
      fontSize: 24,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    '& $left, & $right': {
      ...size('calc(50% - 106.5px)', '1px'),
      background: 'rgba(0, 0, 0, .5)',
    },
  },
}));

export const Review: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('jumbo');

  const reviewData = useMemo(
    () => [
      {
        comment: t('review content'),
        name: 'Susan H',
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
        <div className={classes.divideText}>
          <div>{t('review title')}</div>
        </div>
        <div className={classes.right} />
      </div>
      <Box
        mt={'110px'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <ReviewCarousel
          style={{ width: 750 }}
          scene={'jumbo'}
          data={reviewData}
        />
      </Box>
    </div>
  );
};
