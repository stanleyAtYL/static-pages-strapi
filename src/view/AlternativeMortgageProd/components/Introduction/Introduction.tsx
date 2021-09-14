import React, { FC, useMemo } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import { size } from '@/common/styles';
import CheckIcon from '@material-ui/icons/Check';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    height: 1302,
    background: '#fafafa;',
    position: 'relative',
  },
  rectBg: {
    position: 'absolute',
    ...size(989, 307),
    background:
      'linear-gradient(258.13deg, rgba(247, 246, 245, 0.5) 1.47%, #E9ECE5 101.6%);',
  },
  productCard: {
    ...size(303, 337),
    position: 'absolute',
    padding: '33px 20px 0 30px',
    background: '#fff',
    boxShadow: '-1px 1px 3px rgba(5, 18, 41, 0.35);',
    borderRadius: '5px',
  },
  productName: {
    marginBottom: 22,
    fontFamily: 'MontserratBold',
    lineHeight: 1.5,
  },
  productItem: {
    marginBottom: 13,
    display: 'flex',
    alignItems: 'flex-start',
    color: '#051229',
    fontSize: 16,
    lineHeight: '27.2px',
  },
  blackBtn: {
    ...size(175, 36),
    position: 'absolute',
    left: 64,
    bottom: -18,
    textTransform: 'none',
    color: '#fff;',
    fontSize: 12,
    fontFamily: 'MontserratBold',
    background: '#212223;',
    '&:hover': {
      background: '#212223;',
    },
  },
  lineBox: {
    position: 'absolute',
    ...size(298, 314),
  },
}));

const products = [
  {
    name: '12-Month Bank Statements',
    terms: [
      'Up to $4M loan amount',
      'Up to 90% Max LTV',
      '575+ credit score',
      'No reserves required at 75% or less LTV',
    ],
  },
  {
    name: '3-Month Bank Statements',
    terms: [
      'Up to $3M loan amount',
      'Up to 75% Max LTV',
      '675+ credit score',
      'Owner occupied only',
      '12 months reserves required',
    ],
  },
  {
    name: 'Verification of Employment ',
    terms: [
      'Up to $5M loan amount',
      'Up to 70% Max LTV',
      '700+ credit score',
      'First time homebuyers are eligible',
      'Qualify with written verification of employment completed by employer',
    ],
  },
  {
    name: 'Foreign National',
    terms: [
      'Up to $2M loan amount',
      'Up to 70% Max LTV',
      'Non-owner occupied only',
      'No reserves required at 75% or less LTV',
      'No income, job or credit required',
    ],
  },
];

export const Introduction: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation('alternativeMortgage');

  const products = useMemo(
    () => [
      {
        name: t('12m bs'),
        terms: [
          t('12m feature1'),
          t('12m feature2'),
          t('12m feature3'),
          t('12m feature4'),
        ],
      },
      {
        name: t('3m bs'),
        terms: [
          t('3m feature1'),
          t('3m feature2'),
          t('3m feature3'),
          t('3m feature4'),
          t('3m feature5'),
        ],
      },
      {
        name: t('voe'),
        terms: [
          t('voe feature1'),
          t('voe feature2'),
          t('voe feature3'),
          t('voe feature4'),
          t('voe feature5'),
        ],
      },
      {
        name: t('foreign national'),
        terms: [
          t('foreign feature1'),
          t('foreign feature2'),
          t('foreign feature3'),
          t('foreign feature4'),
          t('foreign feature5'),
        ],
      },
    ],
    [t],
  );

  return (
    <div className={classes.root}>
      <Box data-aos="fade-right">
        <Box className={classes.rectBg} top={231} left={0} />
        <Box
          style={{
            width: 638,
            height: 309,
            background: '#927F64',
            borderRadius: 3,
            position: 'absolute',
            top: 197,
            left: 365,
          }}
        />
        <Typography
          variant={'h5'}
          style={{ position: 'absolute', top: 55, left: 613 }}
        >
          {t('self-employed')}
        </Typography>
        <Box className={classes.productCard} top={127} left={388}>
          <div className={classes.productName}>{products[0].name}</div>
          {products[0].terms.map((term, i) => {
            return (
              <div className={classes.productItem} key={i}>
                <CheckIcon
                  style={{
                    color: '#156EFA',
                    fontSize: 16,
                    marginRight: 10,
                    position: 'relative',
                    top: '5px',
                  }}
                />
                {term}
              </div>
            );
          })}
          <Button
            classes={{ root: classes.blackBtn }}
            onClick={() => {
              router.push('/alter-mortgage/rate');
            }}
          >
            {t('get started')}
          </Button>
        </Box>
        <Box className={classes.productCard} top={127} left={737}>
          <div className={classes.productName}>{products[1].name}</div>
          {products[1].terms.map((term, i) => {
            return (
              <div className={classes.productItem} key={i}>
                <CheckIcon
                  style={{
                    color: '#156EFA',
                    fontSize: 16,
                    marginRight: 10,
                    position: 'relative',
                    top: '5px',
                  }}
                />
                {term}
              </div>
            );
          })}
          <Button
            classes={{ root: classes.blackBtn }}
            onClick={() => {
              router.push('/alter-mortgage/rate');
            }}
          >
            {t('get started')}
          </Button>
        </Box>
      </Box>
      <Box data-aos="fade-left">
        <Box
          className={classes.rectBg}
          style={{
            transform: 'matrix(-1, 0, 0, 1, 0, 0);',
          }}
          top={816}
          right={0}
        />
        <Typography
          variant={'h5'}
          style={{ position: 'absolute', top: 639, right: 780 }}
        >
          {t('voe')}
        </Typography>
        <Typography
          variant={'subtitle1'}
          style={{ position: 'absolute', top: 670, right: 920 }}
        >
          (VOE)
        </Typography>
        <img
          src="/alternativeMortgageProd/lineBox.png"
          className={classes.lineBox}
          style={{ top: 776, right: 773 }}
          alt=""
        />
        <Box className={classes.productCard} top={708} right={805}>
          {products[2].terms.map((term, i) => {
            return (
              <div className={classes.productItem} key={i}>
                <CheckIcon
                  style={{
                    color: '#156EFA',
                    fontSize: 16,
                    marginRight: 10,
                    position: 'relative',
                    top: '5px',
                  }}
                />
                {term}
              </div>
            );
          })}
          <Button
            classes={{ root: classes.blackBtn }}
            onClick={() => {
              router.push('/alter-mortgage/rate');
            }}
          >
            {t('get started')}
          </Button>
        </Box>
        <Typography
          variant={'h5'}
          style={{ position: 'absolute', top: 639, right: 390 }}
        >
          {t('foreign national')}
        </Typography>
        <img
          src="/alternativeMortgageProd/lineBox.png"
          className={classes.lineBox}
          style={{ top: 776, right: 308 }}
          alt=""
        />
        <Box className={classes.productCard} top={708} right={340}>
          {products[3].terms.map((term, i) => {
            return (
              <div className={classes.productItem} key={i}>
                <CheckIcon
                  style={{
                    color: '#156EFA',
                    fontSize: 16,
                    marginRight: 10,
                    position: 'relative',
                    top: '5px',
                  }}
                />
                {term}
              </div>
            );
          })}
          <Button
            classes={{ root: classes.blackBtn }}
            onClick={() => {
              router.push('/alter-mortgage/rate');
            }}
          >
            {t('get started')}
          </Button>
        </Box>
      </Box>
    </div>
  );
};
