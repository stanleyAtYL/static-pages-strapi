import React, { FC, useMemo } from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { flexCenter, flexCenterV, size } from '@/common/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    background: '#fff',
  },
  icon: {
    ...size(53, 71),
    marginRight: 24,
  },
  terms: {
    paddingLeft: 48,
    fontSize: 24,
    lineHeight: 2,
    position: 'relative',
    'div&::before': {
      content: '"·"',
      top: 0,
      left: '24px',
      position: 'absolute',
      color: '#000',
    },
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
  const { i18n, t } = useTranslation('broker');

  const block1 = useMemo(() => {
    if (i18n.languages[0] === 'en-US') {
      return (
        <Box mr={'32px'} width={614}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            Take advantage of our flexible loan programs
          </Typography>
          <Box mt={'11px'} className={classes.terms}>
            Finance investment properties with
            <Link href={'/bridge'}>
              <a className={classes.link}> bridge </a>
            </Link>
            and
            <Link href={'/rental'}>
              <a className={classes.link}> rental </a>
            </Link>
            loans
          </Box>
          <Box className={classes.terms}>
            Loans for
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> self-employed </a>
            </Link>
            and
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> foreign national </a>
            </Link>
            clients for owned occupied properties.
          </Box>
          <Box className={classes.terms}>
            Both short term bridge loan and loan term financing per your
            clients’ need
          </Box>
          <Box className={classes.terms}>
            Secure refinance and purchase financing Fixed rate or
            adjustable-rate
            <Link href={'/mortgage'}>
              <a className={classes.link}> mortgages </a>
            </Link>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box mr={'32px'} width={614}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            好好利用我们灵活的贷款产品
          </Typography>
          <Box mt={'11px'} className={classes.terms}>
            如果你是房地产投资人，可以用
            <Link href={'/bridge'}>
              <a className={classes.link}> 过桥贷款 </a>
            </Link>
            和
            <Link href={'/rental'}>
              <a className={classes.link}> 租赁贷款 </a>
            </Link>
            。
          </Box>
          <Box className={classes.terms}>
            如果你是
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> 外籍人士</a>
            </Link>
            ，
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> 自雇人士 </a>
            </Link>
            ，我们提供对应的贷款项目对你持有的房地产。
          </Box>
          <Box className={classes.terms}>
            根据客户需求，我们提供短期过桥贷款和长期低利息贷款。
          </Box>
          <Box className={classes.terms}>
            确保重新贷款和买房贷款需求。固定利率或可调利率
            <Link href={'/mortgage'}>
              <a className={classes.link}> 贷款 </a>
            </Link>
            。
          </Box>
        </Box>
      );
    }
  }, [classes.link, classes.terms, i18n.languages[0]]);

  const block2 = useMemo(() => {
    if (i18n.languages[0] === 'en-US') {
      return (
        <Box ml={'84px'} width={618}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            Secure the best terms for your clients
          </Typography>
          <Box mt={'21px'} className={classes.terms}>
            <Link href={'/bridge'}>
              <a className={classes.link}>Bridge </a>
            </Link>
            loan starting at 6.5% with 5 days closing
          </Box>
          <div className={classes.terms}>
            <Link href={'/rental'}>
              <a className={classes.link}>Rental </a>
            </Link>
            loan starting at 4.00% with 10 days closing
          </div>
          <div className={classes.terms}>
            Zero commission or lender fees for
            <Link href={'/mortgage'}>
              <a className={classes.link}> mortgage </a>
            </Link>
            at the best possible rates
          </div>
          <div className={classes.terms}>
            <Link href={'/jumbo'}>
              <a className={classes.link}>Jumbo </a>
            </Link>
            loans for high end properties up to $10MM
          </div>
        </Box>
      );
    } else {
      return (
        <Box ml={'84px'} width={618}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            为你的客户拿到最优惠的贷款条件
          </Typography>
          <Box mt={'21px'} className={classes.terms}>
            <Link href={'/bridge'}>
              <a className={classes.link}>过桥贷款</a>
            </Link>
            6.5%起，5天内完成
          </Box>
          <div className={classes.terms}>
            <Link href={'/rental'}>
              <a className={classes.link}>租赁贷款</a>
            </Link>
            4.00%起，10天内完成
          </div>
          <div className={classes.terms}>
            0佣金，0贷方费用，最优惠的利率
            <Link href={'/mortgage'}>
              <a className={classes.link}>房屋贷款</a>
            </Link>
          </div>
          <div className={classes.terms}>
            高端住宅的
            <Link href={'/jumbo'}>
              <a className={classes.link}>大额贷款</a>
            </Link>
            高达1000万美元
          </div>
        </Box>
      );
    }
  }, [classes.link, classes.terms, i18n.languages[0]]);

  return (
    <div className={classes.root}>
      <Box textAlign={'center'} mt={'264px'} fontSize={38} lineHeight={1.5}>
        {t('no matter we have the solution')}
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

      <Box className={classes.featureItem} mt={'80px'}>
        {/* <Box mr={'32px'} width={614}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            Take advantage of our flexible loan programs
          </Typography>
          <Box mt={'11px'} className={classes.terms}>
            Finance investment properties with
            <Link href={'/bridge'}>
              <a className={classes.link}> bridge </a>
            </Link>
            and
            <Link href={'/rental'}>
              <a className={classes.link}> rental </a>
            </Link>
            loans
          </Box>
          <Box className={classes.terms}>
            Loans for
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> self-employed </a>
            </Link>
            and
            <Link href={'/alter-mortgage'}>
              <a className={classes.link}> foreign national </a>
            </Link>
            clients for owned occupied properties.
          </Box>
          <Box className={classes.terms}>
            Both short term bridge loan and loan term financing per your
            clients’ need
          </Box>
          <Box className={classes.terms}>
            Secure refinance and purchase financing Fixed rate or
            adjustable-rate
            <Link href={'/mortgage'}>
              <a className={classes.link}> mortgages </a>
            </Link>
          </Box>
        </Box> */}
        <Box data-aos={'fade-right'}>{block1}</Box>

        <img
          data-aos={'fade-left'}
          src="/broker/graph1.png"
          style={{ ...size(609, 322), marginRight: 47 }}
          alt=""
        />
      </Box>

      <Box className={classes.featureItem} mt={'143px'}>
        <img
          data-aos={'fade-right'}
          src="/broker/graph2.png"
          style={{ ...size(584, 367) }}
          alt=""
        />

        <Box data-aos={'fade-left'}>{block2}</Box>
        {/* <Box ml={'84px'} width={618}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            Secure the best terms for your clients
          </Typography>
          <Box mt={'21px'} className={classes.terms}>
            <Link href={'/bridge'}>
              <a className={classes.link}>Bridge </a>
            </Link>
            loan starting at 6.5% with 5 days closing
          </Box>
          <div className={classes.terms}>
            <Link href={'/rental'}>
              <a className={classes.link}>Rental </a>
            </Link>
            loan starting at 4.00% with 10 days closing
          </div>
          <div className={classes.terms}>
            Zero commission or lender fees for
            <Link href={'/mortgage'}>
              <a className={classes.link}> mortgage </a>
            </Link>
            at the best possible rates
          </div>
          <div className={classes.terms}>
            <Link href={'/jumbo'}>
              <a className={classes.link}>Jumbo </a>
            </Link>
            loans for high end properties up to $10MM
          </div>
        </Box> */}
      </Box>

      <Box className={classes.featureItem} mt={'143px'} mb={'87px'}>
        <Box mr={'85px'} width={502} data-aos={'fade-right'}>
          <Typography
            variant={'subtitle1'}
            style={{ fontFamily: 'MontserratBold' }}
          >
            {t('manage loans online')}
          </Typography>
          <Box mt={'21px'} className={classes.terms}>
            {t('submit and track')}
          </Box>
          <div className={classes.terms}>{t('price scenarios')}</div>
          <div className={classes.terms}>{t('generate pre approval')}</div>
          <div className={classes.terms}>{t('track commission')}</div>
        </Box>
        <img
          data-aos={'fade-left'}
          src="/broker/graph3.png"
          style={{ ...size(550, 507) }}
          alt=""
        />
      </Box>
    </div>
  );
};
