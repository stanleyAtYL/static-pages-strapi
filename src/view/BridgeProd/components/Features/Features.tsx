import { Grid } from '@material-ui/core';
import { FeatureItem } from '..';
import { useTranslation } from 'react-i18next';
import { FC, useMemo } from 'react';

const Features = (): JSX.Element => {
  const { t } = useTranslation('bridge');

  const data = useMemo(
    () => [
      {
        imgUrl: '/bridge/ficon.svg',
        title: t('close fast'),
        content: t('reliable funding'),
      },
      {
        imgUrl: '/bridge/lricon.svg',
        title: t('low rates'),
        content: t('most competitive'),
      },
      {
        imgUrl: '/bridge/epicon.svg',
        title: t('easy process'),
        content: t('take a few minutes'),
      },
    ],
    [t],
  );

  return (
    <Grid container justify="center" style={{ marginBottom: '120px' }}>
      <Grid container justify="center" xs={11}>
        {data.map((d, i) => {
          return (
            <Grid container xs={4} justify="center">
              <Grid item>
                <FeatureItem {...d} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Features;
