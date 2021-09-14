import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const renderFeature = (img: string, content: string, offSet: string) => {
  return (
    <Grid
      container
      style={{ width: 'fit-content', paddingLeft: offSet, paddingTop: '40px' }}
    >
      <Grid item xs={12}>
        <img src={img} />
      </Grid>
      <Grid container xs={12} justify="center">
        <Grid
          item
          xs={12}
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <Typography variant={'subtitle1'} style={{ color: '#28514D' }}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Features2 = (): JSX.Element => {
  const { t } = useTranslation('bridge');

  const data = useMemo(
    () => [
      {
        img: '/bridge/f1.svg',
        content: t('rates starting at 6.5%'),
        offSet: '0px',
      },
      {
        img: '/bridge/f2.svg',
        content: t('instant pricing'),
        offSet: '0px',
      },
      {
        img: '/bridge/f3.svg',
        content: t('track loan status'),
        offSet: '60px',
      },
      {
        img: '/bridge/f4.svg',
        content: t('no prepayment penalty'),
        offSet: '60px',
      },
    ],
    [t],
  );

  return (
    <Grid container item xs={12} justify={'center'}>
      <Grid container item xs={7}>
        {data.map((d, index) => {
          return (
            <Grid key={index} data-aos="fade-right" item xs={6}>
              {renderFeature(d.img, d.content, d.offSet)}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Features2;
