import { Button, Grid, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import mortgagePhoto from '../../../../../public/home/mortgage.png';
import alternativeMortgagePhoto from '../../../../../public/home/mortgage-alter.png';
import rentalPhoto from '../../../../../public/home/rental.png';
import bridgePhoto from '../../../../../public/home/bridge.jpg';
import jumboPhoto from '../../../../../public/home/jumbo.png';
import mortgagePhotoCN from '../../../../../public/home/mortgage_CN.png';
import alternativeMortgagePhotoCN from '../../../../../public/home/mortgage-alter_CN.png';

const photoPath = {
  'en-US': {
    mortgage: mortgagePhoto,
    alternative: alternativeMortgagePhoto,
    rental: rentalPhoto,
    bridge: bridgePhoto,
    jumbo: jumboPhoto,
  },
  'zh-CN': {
    mortgage: mortgagePhotoCN,
    alternative: alternativeMortgagePhotoCN,
    rental: rentalPhoto,
    bridge: bridgePhoto,
    jumbo: jumboPhoto,
  },
};

export interface ProductItemProps {
  color?: string;
  imgUrl: string;
  width?: string;
  height?: string;
  title: string;
  content: string;
  buttonLabel: string;
  url: string;
  transformOrigin: string;
  imgPath: string;
}

const useStyles = makeStyles<any, ProductItemProps>({
  root: {
    position: 'relative',
    transition: 'transform .3s ease',
    zIndex: 100,
    transformOrigin: ({ transformOrigin }) => transformOrigin,
    '&:hover': {
      transform: 'scale(1.2)',
      zIndex: 101,
      boxShadow:'30px 30px 60px 0px #0000004D, -30px -30px 60px 0px #F1F4F84D'


    },
  },
});

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  const {
    color,
    width,
    height,
    title,
    content,
    buttonLabel,
    url,
    imgPath,
    imgUrl: src,
  } = props;
  const classes = useStyles(props);
  const router = useRouter();
  const { i18n } = useTranslation('homepage');

  const [imgUrl, setImgUrl] = useState(src);
  useEffect(() => {
    console.log(i18n.languages[0]);
    setImgUrl(photoPath[i18n.languages[0]][imgPath]);
  }, [i18n.languages[0], imgPath]);

  return (
    <Grid
      container
      className={classes.root}
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: '2.2px',
      }}
    >
      <Grid item xs={12}>
        <img src={imgUrl} style={{ width: '100%', maxHeight: '580px' }} />
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '150%',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#F4F8FE',
            paddingBottom: '20px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#F4F8FE',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          {content}
        </div>
      </Grid>
      <Grid item xs={12}>
        <Button
          style={{
            boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.45)',
            backgroundColor: color,
            zIndex: 100,
            position: 'relative',
            left: '255px',
            width: '146px',
            height: '31px',
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '12px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#FFFFFF',
              textTransform: 'none',
            }}
            onClick={() => {
              router.push(url);
            }}
          >
            {buttonLabel}
          </div>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductItem;
