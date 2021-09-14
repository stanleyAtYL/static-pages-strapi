import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { flexCenterV, size, textEllipsis } from '@/common/styles';
import { GlobalTheme } from '@/theme';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const questionColorData = {
  mortgage: 'rgb(0,0,0)',
  alternativeMortgage: 'rgb(0,0,0)',
  bridge: 'rgb(0,0,0)',
  rental: 'rgb(0,0,0)',
  jumbo: 'rgb(255,255,255)',
};

const answerColorData = {
  mortgage: 'rgb(0,0,0,.7)',
  alternativeMortgage: 'rgb(0,0,0,.7)',
  bridge: 'rgb(0,0,0,.7)',
  rental: 'rgb(0,0,0,.7)',
  jumbo: 'rgb(255,255,255)',
};

const useStyles = makeStyles<GlobalTheme, HelpCardProps>((theme) => ({
  root: {
    ...flexCenterV,
    ...size(400, 240),
    border: ({ scene }) =>
      `0.5px solid ${theme.customPalette[scene].primaryColor}`,
    padding: '0 24px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  question: {
    ...textEllipsis(),
    marginBottom: 20,
    color: ({ scene }) => questionColorData[scene],
  },
  answer: {
    fontSize: 14,
    lineHeight: 1.5,
    ...textEllipsis(4),
    marginBottom: 30,
    color: ({ scene }) => answerColorData[scene],
  },
  readMoreLink: {
    cursor: 'pointer',
    fontSize: 14,
    color: ({ scene }) => theme.customPalette[scene].primaryColor,
  },
}));

interface HelpCardProps {
  scene: LoanProduct;
  data: {
    id: string;
    question: string;
    answer: string;
  };
}

export const HelpCard: FC<HelpCardProps> = (props) => {
  const { data } = props;
  const classes = useStyles(props);
  const { t } = useTranslation('mortgage');
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.question}>{data.question}</div>
        <div className={classes.answer}>{data.answer}</div>
        <div
          onClick={() => {
            router.push(`/article/${data.id}`);
          }}
          className={classes.readMoreLink}
        >
          {t('read more')}
        </div>
      </div>
    </div>
  );
};
