import React, { FC, useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { flexCenterV, size } from '@/common/styles';
import { HelpCard } from '@/components/molecules';
import { GlobalTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

interface HelpfulResourceProps {
  scene: LoanProduct;
}

const backgroundColorData = {
  mortgage: '#fff',
  alternativeMortgage: '#fff',
  bridge: '#fff',
  rental: '#fff',
  jumbo:
    'linear-gradient(270deg, rgba(37, 45, 62, 0.9) 0%, rgba(81, 50, 79, 0.9) 100%)',
};

const useStyles = makeStyles<GlobalTheme, HelpfulResourceProps>(() => ({
  root: {
    position: 'relative',
    padding: '90px 0',
    background: ({ scene }) => backgroundColorData[scene],
  },
  left: {},
  right: {},
  divideText: {},
  divideLine: {
    ...size('100%', 20),
    ...flexCenterV,
    position: 'absolute',
    top: -10,
    left: 0,
    '& $divideText': {
      width: 206,
      textAlign: 'center',
    },
    '& $left, & $right': {
      ...size('calc(50% - 103px)', '0.5px'),
      background: '#808080',
    },
  },
}));

export const HelpfulResource: FC<HelpfulResourceProps> = (props) => {
  const { scene } = props;
  const classes = useStyles(props);
  const { t } = useTranslation([
    'mortgage',
    'rental',
    'jumbo',
    'alternativeMortgage',
    'bridge',
  ]);
  const helpfulResourcesData = useMemo(
    () => ({
      mortgage: [
        {
          question: t('mortgage:what is earnest money'),
          answer: t('mortgage:mortgage anwser1'),
          id: '4',
        },
        {
          question: t('mortgage:when is the right time to sell a house'),
          answer: t('mortgage:mortgage anwser2'),
          id: '7',
        },
        {
          question: t('mortgage:choosing a real estate agent'),
          answer: t('mortgage:mortgage anwser3'),
          id: '9',
        },
      ],
      alternativeMortgage: [
        {
          question: t('alternativeMortgage:article1 title'),
          answer: t('alternativeMortgage:article1 brief'),
          id: '3',
        },
        {
          id: '1',
          question: t('alternativeMortgage:article2 title'),
          answer: t('alternativeMortgage:article2 brief'),
        },
        {
          id: '2',
          question: t('alternativeMortgage:article3 title'),
          answer: t('alternativeMortgage:article3 brief'),
        },
      ],
      bridge: [
        {
          id: '5',
          question: t('bridge:article1 title'),
          answer: t('bridge:article1 brief'),
        },
        {
          id: '2',
          question: t('bridge:article2 title'),
          answer: t('bridge:article2 brief'),
        },
      ],
      rental: [
        {
          id: '8',
          question: t('rental:article1 title'),
          answer: t('rental:article1 brief'),
        },
        {
          id: '6',
          question: t('rental:article2 title'),
          answer: t('rental:article2 brief'),
        },
        {
          id: '2',
          question: t('rental:article3 title'),
          answer: t('rental:article3 brief'),
        },
      ],
      jumbo: [
        {
          id: '3',
          question: t('jumbo:article1 title'),
          answer: t('jumbo:article1 brief'),
        },
        {
          id: '1',
          question: t('jumbo:article2 title'),
          answer: t('jumbo:article2 brief'),
        },
      ],
    }),
    [t],
  );
  return (
    <div className={classes.root}>
      <div className={classes.divideLine}>
        <div className={classes.left} />
        <div className={classes.divideText}>
          {t('mortgage:helpful resources')}
        </div>
        <div className={classes.right} />
      </div>
      <Grid container xs={12} justify={'center'} spacing={4}>
        {helpfulResourcesData[scene].map((d) => {
          return (
            <Grid key={d.question} item>
              <HelpCard data={d} scene={scene} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
