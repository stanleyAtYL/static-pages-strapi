import React, { FC } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { red } from '@material-ui/core/colors';
import { ViewColumn } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  featureBox: {
    position: 'relative',
    overflow: 'hidden',
    margin: 0,
    background: '#ffffff',
  },
  gridBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  box1: {
    ...size(456, 356),
    background:
      'linear-gradient(160deg, rgba(173,232,152,0.2) 7.4%, rgba(225,223,229,0.2) 86.38%)',
    borderRadius: '5px',
    textAlign: 'center',
  },
  box2: {
    ...size(456, 356),
    background:
      'radial-gradient(66.85% 66.85% at 51.75% 47.75%, rgba(173,232,152,0.2) 0%, rgba(225,223,229,0.2) 100%)',
    borderRadius: '5px',
    textAlign: 'center',
  },
  box3: {
    ...size(456, 356),
    background:
      'linear-gradient(330deg, rgba(173,232,152,0.2) 7.4%, rgba(225,223,229,0.2) 86.38%)',
    borderRadius: '5px',
    textAlign: 'center',
  },
  purple: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 95,
    lineHeight: '150%',
    color: '#53269B',
    letterSpacing: '0.03em',
  },
  green: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 95,
    lineHeight: '150%',
    color: '#ADE898',
    letterSpacing: '0.03em',
  },
  content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: '170%',
  },
}));

export const Features1: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('rental');
  return (
    <Grid
      container
      className={classes.featureBox}
      wrap="nowrap"
      justify="space-evenly"
      xs={12}
      spacing={3}
    >
      <Grid data-aos="fade-up" item xs={4} className={classes.gridBox}>
        <div className={classes.box1}>
          <div>
            <span className={classes.purple}>5</span>
            <span className={classes.green}>/</span>
            <span className={classes.purple}>1</span>
          </div>
          <div>
            <div className={classes.content}>{t('30 year')}</div>
            <div className={classes.content}>{t('years 1-5')}</div>
            <div className={classes.content}>{t('years 6-30')}</div>
            <div className={classes.content}>{t('adjusted per year')}</div>
          </div>
        </div>
      </Grid>

      <Grid data-aos="fade-up" item xs={4} className={classes.gridBox}>
        <div className={classes.box2}>
          <div>
            <span className={classes.purple}>7</span>
            <span className={classes.green}>/</span>
            <span className={classes.purple}>1</span>
          </div>
          <div>
            <div className={classes.content}>{t('30 year')}</div>
            <div className={classes.content}>{t('years 1-7')}</div>
            <div className={classes.content}>{t('years 8-30')}</div>
            <div className={classes.content}>{t('adjusted per year')}</div>
          </div>
        </div>
      </Grid>

      <Grid data-aos="fade-up" item xs={4} className={classes.gridBox}>
        <div className={classes.box3}>
          <div>
            <span className={classes.purple}>30</span>
          </div>
          <div>
            <br />
            <br />
            <br />
            <div className={classes.content}>{t('30 fixed')}</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
