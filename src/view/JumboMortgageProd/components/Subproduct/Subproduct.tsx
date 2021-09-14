import React, { FC } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { relative } from 'path';
import { FeatureBox } from '../FeatureBox';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '24px',
    background: '#FFFFFF',
  },
  box: {
    position: 'relative',
  },
  bgImg: {
    width: '100%',
    height: 'auto',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '150%',
    color: '#FFFFFF',

    position: 'absolute',
    top: '22%',
    left: '3%',

    textAlign: 'center',
    width: '16%',
  },
  description: {
    position: 'absolute',
    top: '52%',
    left: '21%',

    //temp
    width: 430,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '170%',
  },
  feature: {
    position: 'absolute',
    top: '15%',
    left: '62%',
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '170%',
  },
  number: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '170%',
    color: ' #4D2F4D',
  },
  note: {
    position: 'absolute',
    bottom: '3%',
    right: '3%',

    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '170%',
    color: '#7C8EA0',
  },
}));

export const Subproduct: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('jumbo');

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <img
          src={'/jumboMortgageProd/subproductBg-1.png'}
          className={classes.bgImg}
          alt=""
        />
        <div className={classes.title}>{t('silver jumbo')}</div>
        <div className={classes.description}>{t('silver desc')}</div>
        <div className={classes.feature}>
          <FeatureBox product="silver" />
        </div>
        <div className={classes.note}>
          <div>{t('prime note')}</div>
        </div>
      </div>

      <div className={classes.box}>
        <img
          src={'/jumboMortgageProd/subproductBg-1.png'}
          className={classes.bgImg}
          alt=""
        />
        <div className={classes.title}>{t('gold jumbo')}</div>
        <div className={classes.description}>{t('gold desc')}</div>
        <div className={classes.feature}>
          <FeatureBox product="gold" />
        </div>
      </div>

      <div className={classes.box}>
        <img
          src={'/jumboMortgageProd/subproductBg-3.png'}
          className={classes.bgImg}
          alt=""
        />
        <div className={classes.title}>{t('super jumbo')}</div>
        <div className={classes.description}>{t('super desc')}</div>
        <div className={classes.feature}>
          <FeatureBox product="super" />
        </div>
      </div>
    </div>
  );
};
