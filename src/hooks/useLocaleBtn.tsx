import { flexCenterV } from '@/common/styles';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Box, makeStyles } from '@material-ui/core';
import AOS from 'aos';
import { GlobalTheme } from '@/theme';
import { HeaderProps } from '@/components/organisms/Header/Header';
const radioColor: Record<PageScene, string> = {
  mortgage: '#2A6AE3;',
  alternativeMortgage: '#FCD400;',
  rental: '#AE47FF;',
  bridge: '#29B5AE;',
  jumbo: '#906F8E;',
  agent: '#FFEF5F;',
};

const useStyles = makeStyles<GlobalTheme,HeaderProps>((theme) => ({
  toggleLocaleBtn: {
    ...flexCenterV,
    padding: '0 18px',
    height: 24,
  },
  localeText: {
    cursor: 'pointer',
    color: '#808080',
    fontSize: 16,
    '&.active': {
      fontFamily: 'MontserratBold',
      color:  ({ scene }) => radioColor[scene],
    },
  },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLocaleBtn = (props) => {
  // locale
  const { i18n, t } = useTranslation('header');
  const classes = useStyles(props);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    setLanguage(i18n.languages[0]);
  }, [i18n.languages[0]]);

  const toggleLocale = useCallback(
    (lang: 'en-US' | 'zh-CN') => () => {
      const curLocale = i18n.languages[0];
      if (curLocale !== lang) {
        i18n.changeLanguage(lang);
        setTimeout(() => {
          AOS.refresh();
        }, 0);
      }
    },
    [i18n],
  );
  const renderToggleLocaleBtn = useMemo(
    () =>
      (splitLineColor = '#000') => {
        return (
          <div className={classes.toggleLocaleBtn}>
            <span
              onClick={toggleLocale('en-US')}
              className={clsx(
                classes.localeText,
                language === 'en-US' && 'active',
              )}
            >
              {t('EN')}
            </span>
            <Box
              margin={'0 6px'}
              color={splitLineColor}
              fontFamily={'MontserratBold'}
              fontSize={20}
              component={'span'}
            >
              /
            </Box>
            <span
              onClick={toggleLocale('zh-CN')}
              className={clsx(
                classes.localeText,
                language === 'zh-CN' && 'active',
              )}
            >
              {t('ZH')}
            </span>
          </div>
        );
      },
    [classes.toggleLocaleBtn, classes.localeText, toggleLocale, language, t],
  );
  return {
    renderToggleLocaleBtn,
  };
};
