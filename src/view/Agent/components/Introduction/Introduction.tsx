import React, { FC } from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { flexCenter, flexCenterV, size } from '@/common/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    overflow: 'hidden',
  },
  icon: {
    ...size(53, 71),
    marginRight: 24,
  },
  featureItem: {
    ...flexCenter,
  },
  inviteBtn: {
    marginTop: 30,
    ...size(162, 50),
    background: '#7E79C9',
    color: '#fff',
    textTransform: 'none',
    fontFamily: 'MontserratBold',
    '&:hover': {
      background: '#7E79C9',
    },
  },
  link: {
    color: '#7E79C9',
  },
});

export const Introduction: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('agent');

  return (
    <div className={classes.root}>
      <Box textAlign={'center'} mt={'264px'} fontSize={38} lineHeight={1.5}>
        {t('we are here to help')}
      </Box>
      <Box style={{ ...flexCenter }} mt={'60px'}>
        <Box mr={'246px'} style={{ ...flexCenterV }}>
          <img
            src="/agent/diversifiedIcon.png"
            className={classes.icon}
            alt=""
          />
          <Typography
            variant={'body1'}
            component={'span'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            {t('diversified products')}
          </Typography>
        </Box>
        <Box style={{ ...flexCenterV }}>
          <img src="/agent/clientIcon.png" className={classes.icon} alt="" />
          <Typography
            variant={'body1'}
            component={'span'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            {t('diverse clients')}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.featureItem} mt={'96px'}>
        <img
          src="/agent/graph1.png"
          style={{ ...size(607, 398), marginRight: 47 }}
          alt=""
          data-aos={'fade-right'}
        />
        <Box data-aos={'fade-left'} width={643}>
          <Typography variant={'subtitle1'}>
            {t('offers a variety of different mortgage products')}
            <Link href={'/bridge'}>
              <a className={classes.link}> {t('bridge')}</a>
            </Link>
            ,
            <Link href={'/rental'}>
              <a className={classes.link}> {t('rental')}</a>
            </Link>
            ,
            <Link href={'/mortgage'}>
              <a className={classes.link}> {t('mortgage')}</a>
            </Link>
            ,
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> {t('alternative mortgage')} </a>
            </Link>
            {t('as well as')}
            <Link href={'/jumbo'}>
              <a className={classes.link}> {t('jumbo loans')}</a>
            </Link>
            , {t('serve clients regardless')}
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> {t('self employed')}</a>
            </Link>
            ,
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> {t('foreign national')}</a>
            </Link>
            , {t("don't have score or return")}
          </Typography>
          {/* <Button classes={{ root: classes.inviteBtn }}>Invite a Client</Button> */}
        </Box>
      </Box>
      <Box className={classes.featureItem} mt={'142px'}>
        <Box mr={'108px'} width={618} data-aos={'fade-right'}>
          <Typography
            align={'right'}
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            {t('flexible for situations')}
          </Typography>
          <Typography
            align={'right'}
            variant={'subtitle1'}
            style={{ marginTop: 66 }}
          >
            {t('offer flexible solutions')}
          </Typography>
        </Box>
        <img
          src="/agent/graph2.png"
          data-aos={'fade-left'}
          style={{ ...size(500, 379) }}
          alt=""
        />
      </Box>
      <Box className={classes.featureItem} mt={'143px'} mb={'250px'}>
        <img
          data-aos={'fade-right'}
          src="/agent/graph3.png"
          style={{ ...size(510, 386) }}
          alt=""
        />
        <Box ml={'105px'} data-aos={'fade-left'} width={552}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            {t('simple and easy')}
          </Typography>
          <Typography variant={'subtitle1'} style={{ marginTop: 25 }}>
            {t('cutting edge technology')}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
