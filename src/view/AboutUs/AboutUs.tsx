import React, { FC } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { size } from '@/common/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {},
  dotsBg: {
    ...size('100%'),
  },
  slogan: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 705,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});

export const AboutUs: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('aboutUs');
  return (
    <div className={classes.root}>
      <Box fontSize={0} position={'relative'}>
        <img src="/aboutUs/dots.png" className={classes.dotsBg} alt="" />
        <Typography variant={'h3'} className={classes.slogan}>
          {t('slogan')}
        </Typography>
      </Box>
      <Box mt={'86px'} textAlign="center">
        <Typography variant={'h5'}>{t('we value')}</Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        position={'relative'}
      >
        <Box mt={'84px'} position={'relative'} width={1234} height={407}>
          <Box data-aos={'fade-right'}>
            <img
              src="/aboutUs/feature1.png"
              style={{
                ...size(621, 261),
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              alt=""
            />
            <Box width={454} position={'absolute'} top={90} left={90}>
              <Box fontSize={36} textAlign={'center'} lineHeight={1.5}>
                {t('Customer-Focused')}
              </Box>
              <Typography
                align={'center'}
                style={{ color: 'rgba(0,0,0,.7)' }}
                variant={'subtitle1'}
              >
                {t('customer-first')}
              </Typography>
            </Box>
          </Box>

          <Typography
            data-aos={'fade-left'}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              ...size(639, 205),
            }}
            variant={'subtitle1'}
          >
            {t('meaning of customer-first')}
          </Typography>
        </Box>
        <Box mt={'147px'} position={'relative'} width={1238} height={447}>
          <Typography
            data-aos={'fade-right'}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: 648,
              textAlign: 'right',
            }}
            variant={'subtitle1'}
          >
            {t('minimalism')}
          </Typography>
          <Box data-aos={'fade-left'}>
            <img
              src="/aboutUs/feature2.png"
              style={{
                ...size(621, 261),
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              alt=""
            />
            <Box width={396} position={'absolute'} top={80} right={115}>
              <Box fontSize={36} textAlign={'center'} lineHeight={1.5}>
                {t('simplicity')}
              </Box>
              <Typography
                align={'center'}
                style={{ color: 'rgba(0,0,0,.7)' }}
                variant={'subtitle1'}
              >
                {t('business strategy')}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mt={'192px'} position={'relative'} width={1215} height={408}>
          <Box data-aos={'fade-right'}>
            <img
              src="/aboutUs/feature3.png"
              style={{
                ...size(621, 261),
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              alt=""
            />
            <Box width={454} position={'absolute'} top={90} left={90}>
              <Box fontSize={36} textAlign={'center'} lineHeight={1.5}>
                {t('innovation')}
              </Box>
              <Typography
                align={'center'}
                style={{ color: 'rgba(0,0,0,.7)' }}
                variant={'subtitle1'}
              >
                {t('upending')}
              </Typography>
            </Box>
          </Box>

          <Typography
            data-aos={'fade-left'}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 620,
            }}
            variant={'subtitle1'}
          >
            {t('meaning of innovation')}
          </Typography>
        </Box>
        <Box
          mt={'149px'}
          mb={'300px'}
          position={'relative'}
          width={1210}
          height={330}
        >
          <Typography
            data-aos={'fade-right'}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: 648,
              textAlign: 'right',
            }}
            variant={'subtitle1'}
          >
            {t('long-term value creation')}
          </Typography>
          <Box data-aos={'fade-left'}>
            <img
              src="/aboutUs/feature4.png"
              style={{
                ...size(621, 261),
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              alt=""
            />
            <Box width={466} position={'absolute'} top={80} right={84}>
              <Box fontSize={36} textAlign={'center'} lineHeight={1.5}>
                {t('long-term thinking')}
              </Box>
              <Typography
                align={'center'}
                style={{ color: 'rgba(0,0,0,.7)' }}
                variant={'subtitle1'}
              >
                {t('long-term value')}
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src="/aboutUs/logoBg1.png"
          style={{
            ...size(482, 1006),
            position: 'absolute',
            top: 211,
            left: 0,
          }}
          alt=""
        />
        <img
          src="/aboutUs/logoBg2.png"
          style={{
            ...size(482, 1006),
            position: 'absolute',
            top: 927,
            right: 0,
          }}
          alt=""
        />
        <img
          src="/aboutUs/logoBg3.png"
          style={{
            ...size(650, 665),
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
          alt=""
        />
      </Box>
    </div>
  );
};
