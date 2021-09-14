import React, { FC, useMemo } from 'react';
import { Button, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { GlobalTheme } from '@/theme';
import { ClassRounded } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface FeatureBoxProps {
  product: string;
}

const colorData = {
  silver: {
    content: [
      'Up to $1.5M loan amount',
      'Up to 80% Max LTV',
      '680+ credit score',
      'Cash out up to $500k',
    ],
    topColor:
      'radial-gradient(129.83% 130.9% at 6.31% 18.82%, #51324F 0%, #2F3043 100%)',
    bottomColor: '#51324F',
  },
  gold: {
    content: [
      'Up to $3M loan amount',
      'Up to 90% Max LTV',
      '660+ credit score',
      'Cash out up to $500k',
    ],
    topColor:
      'radial-gradient(129.83% 130.9% at 6.31% 18.82%, #51324F 0%, #2F3043 100%)',
    bottomColor: '#51324F',
  },
  super: {
    content: [
      'Up to $10M loan amount',
      'Up to 70% Max LTV',
      '700+ credit score',
      'Min loan amount >$4M',
    ],
    topColor:
      'radial-gradient(112.46% 111.24% at 0% 13.99%, #252D3E 0%, #51324F 100%)',
    bottomColor: '#252D3E',
  },
};

const useStyles = makeStyles<GlobalTheme, FeatureBoxProps>((theme) => ({
  root: {
    ...size(603, 376),
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    zIndex: 10,
  },
  top: {
    height: '73%',
    background: ({ product }) => colorData[product]['topColor'],
    borderRadius: '20px 20px 0px 0px',
    paddingTop: '10px',
    paddingLeft: '40px',
  },
  topText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '170%',
    color: '#FFFFFF',
  },
  bottom: {
    height: '27%',
    background: ({ product }) => colorData[product]['bottomColor'],
    borderRadius: '0px 0px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  bottomText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '170%',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  listStyle: {
    color: '#FFFFFF',
    '& li': {
      marginBottom: '15px',
      fontSize: '30px',
      '& div': {
        position: 'relative',
        left: '15px',
      },
    },
  },
}));

export const FeatureBox: FC<FeatureBoxProps> = (props) => {
  const { product } = props;
  const classes = useStyles(props);
  const router = useRouter();
  const { t } = useTranslation('jumbo');

  const productData = useMemo(
    () => ({
      silver: {
        content: [
          t('silver feature1'),
          t('silver feature2'),
          t('silver feature3'),
          t('silver feature4'),
        ],
      },
      gold: {
        content: [
          t('gold feature1'),
          t('gold feature2'),
          t('gold feature3'),
          t('gold feature4'),
        ],
      },
      super: {
        content: [
          t('super feature1'),
          t('super feature2'),
          t('super feature3'),
          t('super feature4'),
        ],
      },
    }),
    [t],
  );

  return (
    <div className={classes.root} data-aos={'fade-up'}>
      <div className={classes.top}>
        <ul className={classes.listStyle}>
          {productData[product]['content'].map((d, i) => {
            return (
              <li>
                <div className={classes.topText}>{d}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.bottom}>
        <Button className={classes.bottomText} onClick={() => {}}>
          {t('get started')}
        </Button>
      </div>
    </div>
  );
};
