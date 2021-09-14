import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { ProductBanner } from '@/components/molecules';
import { Advantage } from './components';
import { Features1 } from './components';
import { Features2 } from './components';
import { Review } from './components';
import { HelpfulResource } from '@/components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

export const RentalProd: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProductBanner scene={'rental'} />
      <Advantage />
      <Features1 />
      <Features2 />
      <Review />
      <HelpfulResource scene={'rental'} />
    </div>
  );
};
