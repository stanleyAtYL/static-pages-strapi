import React, { FC, useMemo, useState } from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import logoPng from '../../../../public/logo.png';
import { flexCenterV, size } from '@/common/styles';
import { HeaderMenu } from '@/components/molecules';
import { useRouter } from 'next/router';
import { useLocaleBtn } from '@/hooks';
import { useTranslation } from 'react-i18next';

const useHeaderStyles = makeStyles<GlobalTheme, HeaderProps>((theme) => ({
  logo: {},
  left: {},
  right: {},
  menuTitle: {},
  menuItem: {
    ...flexCenterV,
    padding: '0 23px',
    height: 36,
    '& $menuTitle': {
      marginRight: 10,
      cursor: 'pointer',
    },
  },
  headerWrap: {
    ...flexCenterV,
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
    background: (props) => (props.transparent ? '#f6f9fc' : '#ffffff'),
    height: 90,
    padding: '0 60px',
    '& $left': {
      ...flexCenterV,
      '& $logo': {
        ...size(134, 34),
        marginRight: 78,
      },
    },
    '& $right': {
      ...flexCenterV,
      justifyContent: 'flex-end',
    },
  },
  loginText: {
    cursor: 'pointer',
    color: '#051229',
    fontSize: 16,
    '&:hover': {
      color: ' #156EFA',
      fontFamily: 'MontserratBold',
    },
  },
  loginBtn: {
    ...size(142, 50),
    boxShadow:
      '1px 1px 2px rgba(23, 26, 31, 0.5), -1px -1px 2px rgba(240, 245, 254, 0.1)',
    background: (props) => theme.customPalette[props.scene].buttonBg,
    borderRadius: '5px',
    fontFamily: 'MontserratBold',
    color: '#fff',
    textTransform: 'none',
  },
}));

export interface HeaderProps {
  scene: PageScene;
  transparent?: boolean;
  hasLoginBtn?: boolean;
  showLocale?: boolean;
  locale?: 'en' | 'zh';
}

export const Header: FC<HeaderProps> = (props) => {
  const { hasLoginBtn = true, showLocale = true } = props;
  const [isLogin, setLoginState] = useState(false);
  const classes = useHeaderStyles(props);
  const { t } = useTranslation(['header', 'common']);
  const MenuOptionList = useMemo(
    () => ({
      products: [
        {
          label: t('common:mortgage'),
          key: '/mortgage',
          value: 'Mortgage',
        },
        {
          label: t('common:alternative mortgage'),
          key: '/alter-mortgage',
          value: 'AlternativeMortgage',
        },
        {
          label: t('common:rental'),
          key: '/rental',
          value: 'Rental',
        },
        {
          label: t('common:bridge'),
          key: '/bridge',
          value: 'Bridge',
        },
        {
          label: t('common:jumbo'),
          key: '/jumbo',
          value: 'Jumbo',
        },
      ],
      rates: [
        {
          label: t('common:mortgage'),
          key: '/mortgage/rate',
          value: 'Mortgage',
        },
        {
          label: t('common:alternative mortgage'),
          key: '/alter-mortgage/rate',
          value: 'AlternativeMortgage',
        },
        {
          label: t('common:rental'),
          key: '/rental/rate',
          value: 'Rental',
        },
        {
          label: t('common:bridge'),
          key: '/bridge/rate',
          value: 'Bridge',
        },
        {
          label: t('common:jumbo'),
          key: '/jumbo/rate',
          value: 'Jumbo',
        },
      ],
    }),
    [t],
  );
  const router = useRouter();
  // locale
  const { renderToggleLocaleBtn } = useLocaleBtn(props);
  return (
    <div className={classes.headerWrap}>
      <div className={classes.left}>
        <img
          className={classes.logo}
          src={logoPng}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={() => {
            router.push('/');
          }}
        />
        <Grid container={true} spacing={0}>
          <HeaderMenu
            onClick={(key) => {
              router.push(key);
            }}
            options={MenuOptionList['products']}
            title={t('header:products')}
          />
          <HeaderMenu
            onClick={(key) => {
              router.push(key);
            }}
            options={MenuOptionList['rates']}
            title={t('header:rates')}
          />
          <div className={classes.menuItem}>
            <Typography
              onClick={() => {
                router.push('/agent');
              }}
              className={classes.menuTitle}
              component={'span'}
              variant={'body1'}
            >
              {t('header:agent')}
            </Typography>
          </div>
          <div className={classes.menuItem}>
            <Typography
              onClick={() => {
                router.push('/faq');
              }}
              className={classes.menuTitle}
              component={'span'}
              variant={'body1'}
            >
              {t('FAQ')}
            </Typography>
          </div>
        </Grid>
      </div>
      <div className={classes.right}>
        {showLocale && renderToggleLocaleBtn()}
        {hasLoginBtn && (
          <Box
            display={'flex'}
            height={36}
            width={102}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <a href="https://bridge-pos.youland.com/auth/login">
              <span className={classes.loginText}>
                {isLogin ? t('sign out') : t('sign in')}
              </span>
            </a>
          </Box>
        )}
        {hasLoginBtn && (
          <Button
            href="https://bridge-pos.youland.com/sign_up/borrower"
            classes={{
              root: classes.loginBtn,
            }}
          >
            {t('get started')}
          </Button>
        )}
      </div>
    </div>
  );
};
