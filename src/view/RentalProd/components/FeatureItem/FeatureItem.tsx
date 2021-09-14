import { useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

interface FeatureItemProps {
  icon: string;
  content: string;
}

const useStyles = makeStyles(() => ({
  featureItem: {},
  icon: {},
  content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '150%',
    color: '#180733',
    opacity: 0.7,
  },
}));

export const FeatureItem = ({
  icon,
  content,
  ...rest
}: FeatureItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.featureItem}
      justify="center"
    >
      <Grid item className={classes.icon}>
        <img src={icon} />
      </Grid>
      <Grid item>
        <div className={classes.content}>{content}</div>
      </Grid>
    </Grid>
  );
};
