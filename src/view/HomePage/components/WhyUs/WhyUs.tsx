import { FeatureItem } from 'components/modecules';
import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import { useTranslation } from 'react-i18next';
import backgroundPhoto from '../../../../../public/home/content-background.svg';
import backgroundPhotoCN from '../../../../../public/home/content-background-CN.svg';
import { useEffect, useState } from 'react';

const photoPath = {
  'en-US': backgroundPhoto,
  'zh-CN': backgroundPhotoCN,
};

const useStyles = makeStyles<GlobalTheme>((theme) => ({
  imgCanvas: {
    width: 'calc(100%)',
    zIndex: -1,
  },

  contentCanvas: {
    position: 'absolute',
    marginTop: '12%',
    paddingLeft: '200px',
    paddingRight: '200px',
  },
}));

const WhyUs = (): JSX.Element => {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState('/');
  const { t, i18n } = useTranslation('homepage');

  useEffect(() => {
    setImgUrl(photoPath[i18n.languages[0]]);
  }, [i18n.languages[0]]);

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.contentCanvas}
      >
        <Grid item xs={4}>
          <FeatureItem
            imageUrl="/home/rates-icon.svg"
            contentPosition="bottom"
            title={t('whyus1 title')}
            content={t('whyus1 content')}
            titleWidth="300px"
            contentWidth="300px"
          />
        </Grid>
        <Grid item xs={4}>
          <FeatureItem
            imageUrl="/home/diversified-icon.svg"
            contentPosition="bottom"
            title={t('whyus2 title')}
            content={t('whyus2 content')}
            titleWidth="300px"
            contentWidth="300px"
          />
        </Grid>
        <Grid item xs={4}>
          <FeatureItem
            imageUrl="/home/instant-icon.svg"
            contentPosition="bottom"
            title={t('whyus3 title')}
            content={t('whyus3 content')}
            titleWidth="300px"
            contentWidth="300px"
          />
        </Grid>
      </Grid>
      <img className={classes.imgCanvas} src={imgUrl} />
    </div>
  );
};

export default WhyUs;
