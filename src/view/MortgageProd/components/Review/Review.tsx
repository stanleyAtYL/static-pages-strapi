import React, { FC, useMemo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { size } from '@/common/styles';
import { ReviewCarousel } from '@/components/molecules';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  review: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: 668,
    background: '#EDF4FF;',
    overflow: 'hidden',
  },
  bgImg: {
    ...size(760, 598),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  circle: {
    ...size(540),
    borderRadius: 270,
    position: 'absolute',
    top: -270,
    left: -270,
    background: '#156EFA',
  },
}));

export const Review: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('mortgage');
  const reviewData = useMemo(
    () => [
      {
        comment: t('when i wanted'),
        name: 'Alvin Y',
        location: `@ ${t('San Francisco')}`,
        product: `$850k ${t('refinance mortgage')}`,
      },
    ],
    [t],
  );
  return (
    <div className={classes.review}>
      <img src="/mortgageProd/reviewBg.png" className={classes.bgImg} alt="" />
      <Box
        mt={'110px'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Box
          fontSize={32}
          lineHeight={1.5}
          fontFamily={'MontserratBold'}
          mb={'50px'}
        >
          {t('success Stories')}
        </Box>
        <ReviewCarousel
          style={{ width: 650 }}
          scene={'mortgage'}
          data={reviewData}
        />
      </Box>
      <div className={classes.circle} />
    </div>
  );
};
