import React, { FC, useMemo, useState } from 'react';
import {
  Box,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { flexCenter, size } from '@/common/styles';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';


const useStyles = makeStyles({
  root: {
    padding: '0 105px',
  },
  card: {
    position: 'relative',
    ...size(356, 530),
    background: '#CDE896',
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.15);',
    padding: '28px',
    marginBottom: 120,
  },
});

export const Resources: FC<{
  articles: Record<string, unknown>,
  categories: Record<string, unknown>,
  homepage: Record<string, unknown>}> = (props) => {

  console.log(props);

  const classes = useStyles();
  const { t } = useTranslation(['common', 'resources']);
  const [sortType, setSortType] = useState('all');
  const handleChange = (event) => {
    setSortType(event.target.value);
  };
  const articles = props.articles;
  console.log(articles);

  // const articles = useMemo(
  //   () => [
  //     {
  //       id: 'arms-vs-fixed-rate',
  //       title: t('resources:1 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:1 date'),
  //       type: ['mortgage', 'jumbo', 'alternativeMortgage'],
  //       content: t('resources:1 content'),
  //     },
  //     {
  //       id: 'pros-cons-of-refinancing-your-home',
  //       title: t('resources:2 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:2 date'),
  //       type: ['rental'],
  //       content: t('resources:2 content'),
  //     },
  //     {
  //       id: 'the-basics-of-jumbo-loans',
  //       title: t('resources:3 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:3 date'),
  //       type: ['jumbo', 'alternativeMortgage'],
  //       content: t('resources:3 content'),
  //     },
  //     {
  //       id: 'what-is-an-earnest-money-deposit',
  //       title: t('resources:4 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:4 date'),
  //       type: ['mortgage'],
  //       content: t('resources:4 content'),
  //     },
  //     {
  //       id: 'is-a-bridge-loan-right-for-you',
  //       title: t('resources:5 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:5 date'),
  //       type: ['bridge'],
  //       content: t('resources:5 content'),
  //     },
  //     {
  //       id: 'what-is-a-cap-rate',
  //       title: t('resources:6 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:6 date'),
  //       type: ['bridge', 'rental'],
  //       content: t('resources:6 content'),
  //     },
  //     {
  //       id: 'when-is-the-best-time-to-sell-a-house',
  //       title: t('resources:7 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:7 date'),
  //       type: ['mortgage'],
  //       content: t('resources:7 content'),
  //     },
  //     {
  //       id: 'should-you-hire-a-property-manager',
  //       title: t('resources:8 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:8 date'),
  //       type: ['rental'],
  //       content: t('resources:8 content'),
  //     },
  //     {
  //       id: 'hiring-a-real-estate-agent',
  //       title: t('resources:9 title'),
  //       anchor: 'Will Lichtenger',
  //       date: t('resources:9 date'),
  //       type: ['mortgage'],
  //       content: t('resources:9 content'),
  //     },
  //   ],
  //   [t],
  // );


  const articleList = useMemo(() => {
    if (sortType !== 'all') {
      const result = [];
      articles.forEach((article) => {
        if (article.type.includes(sortType)) {
          result.push(article);
        }
      });
      return result;
    }
    return articles;
  }, [sortType, t]);
  // console.log(articleList);
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Box style={{ ...flexCenter, marginTop: 30 }}>
        <Typography variant={'h3'}>{t('helpful resources')}</Typography>
      </Box>
      <Box style={{ margin: '50px auto 0 auto' }} width={1025}>
        <Typography variant={'subtitle1'} align={'center'}>
          {t('focused on house')}
        </Typography>
      </Box>
      <Box
        mt={'152px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'h5'}>{t('article')}</Typography>
        <Select
          style={{ width: 240, marginRight: 134 }}
          value={sortType}
          onChange={handleChange}
        >
          <MenuItem value={'all'}>{t('all')}</MenuItem>
          <MenuItem value={'mortgage'}>{t('mortgage')}</MenuItem>
          <MenuItem value={'alternativeMortgage'}>
            {t('alternative mortgage')}
          </MenuItem>
          <MenuItem value={'bridge'}>{t('bridge')}</MenuItem>
          <MenuItem value={'rental'}>{t('rental')}</MenuItem>
          <MenuItem value={'jumbo'}>{t('jumbo')}</MenuItem>
        </Select>
      </Box>

      <Grid container style={{ marginTop: 55 }}>
        {articleList.map((article) => {
          const lastUpdateDate = new Date(article.updated_at);
          return (
            <Grid key={article.id} item xs={4}>
              <div className={classes.card}>
                <img
                  src="/resources/bg.png"
                  style={{
                    ...size(316, 415),
                    position: 'absolute',
                    pointerEvents: 'none',
                    bottom: 0,
                    right: 0,
                  }}
                  alt=""
                />
                <Typography
                  variant={'body1'}
                  style={{ fontFamily: 'MontserratBold', marginBottom: 30 }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant={'body1'}
                  style={{ color: 'rgba(0, 0, 0, 0.3);' }}
                >
                  <i style={{ color: 'rgba(0, 0, 0, 0.3);' }}>
                    {article.author.name} - {lastUpdateDate.toLocaleDateString()}
                  </i>
                </Typography>
                <Typography variant={'body1'}>{article.description}</Typography>
                <Typography
                  onClick={() => {
                    router.push(`/article/${article.slug}`);
                  }}
                  variant={'body1'}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: 'rgba(0, 0, 0, 0.3);',
                  }}
                >
                  {t('read more')}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
