import { relative } from 'path';
import { Grid } from '@material-ui/core';
import React, { useMemo, useState, useEffect } from 'react';
import labtopMockup from '../../../../../public/home/mac-outline.png';
import { ProductItem } from '../ProductItem/ProductItem';
import { useTranslation } from 'react-i18next';
import labelPhoto from '../../../../../public/home/product-label.svg';
import labelPhotoCN from '../../../../../public/home/product-label-CN.svg';

const photoPath = {
  'en-US': labelPhoto,
  'zh-CN': labelPhotoCN,
};

const Products = (): JSX.Element => {
  const { t, i18n } = useTranslation('homepage');
  const [imgUrl, setImgUrl] = useState('/');

  useEffect(() => {
    setImgUrl(photoPath[i18n.languages[0]]);
  }, [i18n.languages[0]]);

  const products = useMemo(
    () => [
      {
        color: 'rgba(21, 110, 250, 1)',
        imgUrl: '/home/mortgage.png',
        title: t('MORTGAGE'),
        content: t('mortgage process'),
        buttonLabel: t('learn more'),
        url: '/mortgage',
        width: '100%',
        height: '375px',
        imgPath: 'mortgage',
      },
      {
        color: '#53269B',
        imgUrl: '/home/rental.png',
        title: t('RENTAL'),
        content: t('rental process'),
        buttonLabel: t('learn more'),
        url: '/rental',
        width: '100%',
        height: '375px',
        imgPath: 'rental',
      },
      {
        color: '#927F64',
        imgUrl: '/home/mortgage-alter.png',
        title: t('ALTERNATIVE MORTGAGE'),
        content: t('alternative process'),
        buttonLabel: t('learn more'),
        url: '/alter-mortgage',
        width: '100%',
        height: '375px',
        imgPath: 'alternative',
      },
      {
        color: '#28514D',
        imgUrl: '/home/bridge.jpg',
        title: t('BRIDGE'),
        content: t('bridge process'),
        buttonLabel: t('learn more'),
        url: '/bridge',
        width: '100%',
        height: '375px',
        imgPath: 'bridge',
      },
      {
        color: '#402F43',
        imgUrl: '/home/jumbo.png',
        title: t('JUMBO'),
        content: t('jumbo process'),
        buttonLabel: t('learn more'),
        url: '/jumbo',
        width: '100%',
        height: '750px',
        imgPath: 'jumbo',
      },
    ],
    [t],
  );
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={6}>
          <img src={imgUrl} />
        </Grid>
        <Grid item xs={6}>
          <img
            src={'/home/product-right.svg'}
            style={{
              position: 'absolute',
              right: '0px',
              marginTop: '10px',
            }}
          />
          <img
            src={'/home/logobackground.svg'}
            style={{
              position: 'absolute',
              right: '0px',
              marginTop: '30px',
            }}
          />
        </Grid>
        <Grid item style={{ height: '600px' }}>
          <img
            src={labtopMockup}
            style={{
              zIndex: 1,
            }}
          />
          <Grid
            container
            style={{
              zIndex: 3,
              position: 'relative',
              width: '1200px',
              height: '800px',
              top: '-822px',
              left: '122px',
            }}
            spacing={1}
          >
            <Grid item xs={4} style={{ height: '100%' }}>
              <Grid item xs={12}>
                <ProductItem
                  transformOrigin={'bottom right'}
                  {...products[0]}
                />
              </Grid>
              <Grid item xs={12}>
                <ProductItem transformOrigin={'top right'} {...products[1]} />
              </Grid>
            </Grid>

            <Grid item xs={4} style={{ height: '100%' }}>
              <Grid item xs={12}>
                <ProductItem
                  transformOrigin={'bottom center'}
                  {...products[2]}
                />
              </Grid>
              <Grid item xs={12}>
                <ProductItem transformOrigin={'top center'} {...products[3]} />
              </Grid>
            </Grid>
            <Grid item xs={4} style={{ height: '100%' }}>
              <ProductItem transformOrigin={'left center'} {...products[4]} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <img src={'/home/logo-left.svg'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
