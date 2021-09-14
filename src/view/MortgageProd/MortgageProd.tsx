import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { ProductBanner } from '@/components/molecules';
import { HelpfulResource } from '@/components/organisms';
import { Advantage, Review } from './components';
const useStyles = makeStyles(() => ({
  root: {},
}));

export const MortgageProd: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProductBanner scene={'mortgage'} />
      <Advantage />
      <Review />
      <HelpfulResource scene={'mortgage'} />
    </div>
  );
};
