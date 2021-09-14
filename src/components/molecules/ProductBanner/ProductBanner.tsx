import React, { FC, useMemo, useState, useEffect } from 'react';
import MortgageBanner from '../../../../public/mortgageProd/mortgageBanner.png';
import MortgageBannerCN from '../../../../public/mortgageProd/mortgageBanner_CN.png';
import BridgeBanner from '../../../../public/bridge/bridgeBanner.png';
import AlternativeMortgageBanner from '../../../../public/alternativeMortgageProd/banner.png';
import AlternativeMortgageBannerCN from '../../../../public/alternativeMortgageProd/banner_CN.png';
import RentalBanner from '../../../../public/rentalProd/banner.png';
import JumboMortgageBanner from '../../../../public/jumboMortgageProd/jumboBanner.png';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import { size } from '@/common/styles';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const bannerImg = {
  mortgage: {
    'en-US': MortgageBanner,
    'zh-CN': MortgageBannerCN,
  },
  alternativeMortgage: {
    'en-US': AlternativeMortgageBanner,
    'zh-CN': AlternativeMortgageBannerCN,
  },
  rental: {
    'en-US': RentalBanner,
    'zh-CN': RentalBanner,
  },
  bridge: {
    'en-US': BridgeBanner,
    'zh-CN': BridgeBanner,
  },
  jumbo: {
    'en-US': JumboMortgageBanner,
    'zh-CN': JumboMortgageBanner,
  },
};

const bannerRouter: Record<LoanProduct, string> = {
  mortgage: '/mortgage/rate',
  alternativeMortgage: '/alter-mortgage/rate',
  rental: '/rental/rate',
  bridge: '/bridge/rate',
  jumbo: '/jumbo',
};

interface ProductBannerProps {
  scene: LoanProduct;
}

const useStyles = makeStyles<GlobalTheme, ProductBannerProps>((theme) => ({
  skeleton: {
    fontSize: 0,
    position: 'relative',
  },
  banner: {
    ...size('100vw', '40vw'),
    minWidth: '1366px',
  },
  textContent: {
    position: 'absolute',
    top: '16.1%',
    left: '10.55%',
  },
  title: {
    color: ({ scene }) => theme.customPalette[scene].primaryColor,
    marginBottom: '9px',
  },
  introduction: {
    color: '#051229;',
  },
  description: {
    color: '#051229;',
  },
  rateBtn: {
    position: 'absolute',
    left: '10.55%',
    bottom: '11.111%',
    ...size(194, 56),
    color: '#fff',
    fontSize: 18,
    fontFamily: 'MontserratBold',
    textTransform: 'none',
    background: ({ scene }) => theme.customPalette[scene].buttonBg,
    boxShadow:
      '1px 1px 2px rgba(23, 26, 31, 0.5), -1px -1px 2px rgba(240, 245, 254, 0.1)',
  },
}));

export const ProductBanner: FC<ProductBannerProps> = (props) => {
  const { i18n, t } = useTranslation([
    'mortgage',
    'rental',
    'jumbo',
    'alternativeMortgage',
    'bridge',
  ]);
  const { scene } = props;
  const classes = useStyles(props);
  const router = useRouter();

  const [language, setLanguage] = useState(null);
  useEffect(() => {
    setLanguage(i18n.languages[0]);
  }, [i18n.languages[0]]);

  const renderImgUrl = useMemo(() => {
    switch (scene) {
      case 'mortgage': {
        return t('mortgage:banner_path');
      }
      case 'alternativeMortgage': {
        return '/alternativeMortageProd/banner.png';
      }
      case 'bridge': {
        return '/bridge/bridgeBanner.png';
      }
      case 'rental': {
        return '/rentalProd/banner.png';
      }
      case 'jumbo': {
        return '/jumboMortgageProd/jumboBanner.png';
      }
    }
  }, []);

  const renderTitle = useMemo(() => {
    switch (scene) {
      case 'mortgage': {
        return (
          <React.Fragment>
            <Typography variant={'h3'}>{t('mortgage:mortgage')}</Typography>
          </React.Fragment>
        );
      }
      case 'alternativeMortgage': {
        return (
          <React.Fragment>
            <Typography variant={'h3'}>
              {t('alternativeMortgage:alternative mortgage')}
            </Typography>
          </React.Fragment>
        );
      }
      case 'bridge': {
        return (
          <React.Fragment>
            <Typography variant={'h3'}>{t('bridge:bridge')}</Typography>
          </React.Fragment>
        );
      }
      case 'rental': {
        return (
          <React.Fragment>
            <Typography variant={'h3'}>{t('rental:rental')}</Typography>
          </React.Fragment>
        );
      }
      case 'jumbo': {
        return (
          <React.Fragment>
            <Typography variant={'h3'}>{t('jumbo:jumbo')}</Typography>
          </React.Fragment>
        );
      }
    }
  }, [t, scene]);

  const renderIntroduction = useMemo(() => {
    switch (scene) {
      case 'mortgage': {
        return (
          <Box mb={'38px'}>
            <Typography
              variant={'subtitle1'}
              style={{ fontFamily: 'MontserratBold' }}
            >
              {t('mortgage:zero commission')}
            </Typography>
          </Box>
        );
      }
      case 'alternativeMortgage': {
        return (
          <Box mb={'38px'}>
            <Typography
              variant={'subtitle1'}
              style={{ fontFamily: 'MontserratBold' }}
            >
              {t('alternativeMortgage:make accessible')}
            </Typography>
          </Box>
        );
      }
      case 'bridge': {
        return (
          <Box mb={'38px'}>
            <Typography
              variant={'subtitle1'}
              style={{ fontFamily: 'MontserratBold' }}
            >
              {t("bridge:don't let down")}
            </Typography>
          </Box>
        );
      }
      case 'rental': {
        return (
          <Box mb={'38px'}>
            <Typography
              variant={'subtitle1'}
              style={{ fontFamily: 'MontserratBold' }}
            >
              {t('rental:expand portfolio')}
            </Typography>
          </Box>
        );
      }
      case 'jumbo': {
        return (
          <Box mb={'38px'}>
            <Typography
              variant={'subtitle1'}
              style={{ fontFamily: 'MontserratBold', color: '#FFFFFF' }}
            >
              {t('jumbo:make dream')}
            </Typography>
          </Box>
        );
      }
    }
  }, [t, scene]);

  const renderDescription = useMemo(() => {
    switch (scene) {
      case 'mortgage': {
        return (
          <React.Fragment>
            <Typography variant={'subtitle1'} style={{ width: 597 }}>
              {t('mortgage:traditional mortgage')}
            </Typography>
          </React.Fragment>
        );
      }
      case 'alternativeMortgage': {
        return (
          <React.Fragment>
            <Typography variant={'subtitle1'} style={{ width: 600 }}>
              {t('alternativeMortgage:we believe everyone should')}
            </Typography>
          </React.Fragment>
        );
      }
      case 'bridge': {
        return (
          <React.Fragment>
            <Typography variant={'subtitle1'} style={{ width: 550 }}>
              {t('bridge:partner with youland')}
            </Typography>
          </React.Fragment>
        );
      }
      case 'rental': {
        return (
          <React.Fragment>
            <Typography variant={'subtitle1'} style={{ width: 491 }}>
              {t('rental:acquire properties')}
            </Typography>
          </React.Fragment>
        );
      }
      case 'jumbo': {
        return (
          <React.Fragment>
            <Typography
              variant={'subtitle1'}
              style={{ color: '#FFFFFF', width: 420 }}
            >
              {t('jumbo:offer creative solutions')}
            </Typography>
          </React.Fragment>
        );
      }
    }
  }, [t, scene]);

  return (
    <div className={classes.skeleton}>
      <img
        src={bannerImg[scene][language]}
        style={{}}
        className={classes.banner}
        alt=""
      />
      <div data-aos="fade-up" className={classes.textContent}>
        <div className={classes.title}>{renderTitle}</div>
        <div className={classes.introduction}>{renderIntroduction}</div>
        <div className={classes.description}>{renderDescription}</div>
      </div>
      <Button
        classes={{ root: classes.rateBtn }}
        onClick={() => {
          router.push(bannerRouter[scene]);
        }}
      >
        {t('mortgage:see your rate')}
      </Button>
    </div>
  );
};
