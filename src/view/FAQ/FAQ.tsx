import React, { Component, useEffect, useState, useRef } from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import Sticky from 'react-sticky-el';
import { Markup } from 'interweave';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const useStyles = makeStyles(() => ({
  linkContent: {
    marginBottom: '20px',
    cursor: 'pointer',
    '&hover': {
      color: '#2196F3',
    },
  },
  activeLink: {
    color: '#2196F3',
  },
  title: {
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  contentCanvas: {
    height: 'fit-content',
  },
  leftCanvas: {
    height: 'fit-content',
    paddingLeft: '60px',
  },
  rightCanvas: {
    borderLeft: '0.5px solid #156EFA',
    padding: '40px',
    overflow: 'auto',
  },
  questionTag: {
    fontWeight: 'bold',
    color: 'rgba(21, 110, 250, 1)',
    fontSize: '16px',
    lineHeight: '150%',
    display: 'flex',
  },
  questionTitle: {
    fontSize: '16px',
    lineHeight: '170%',
    display: 'flex',
    color: '#000000',
    padding: '10px',
    textAlign: 'left',
    '&:active': {
      color: '#7FD95F',
    },
    '&:hover': {
      color: '#7FD95F',
    },
  },
  questionContent: {
    fontSize: '16px',
    lineHeight: '170%',
    display: 'flex',
  },
}));

const FAQ = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation('faq');

  const ObjectList = useMemo(
    () => [
      {
        type: 1,
        name: t('TOPICS'),
      },
      {
        type: 2,
        name: t('About YouLand'),
      },
      {
        id: 1,
        name: t('Is YouLand Mortgage a direct lender?'),
        content: t('answer1'),
      },
      {
        id: 2,
        name: t('Will YouLand Mortgage service my mortgage?'),
        content: t('answer2'),
      },
      {
        id: 3,
        name: t('Does YouLand Mortgage offer mortgages in my state?'),
        content: t('answer3'),
      },
      {
        id: 4,
        name: t('Are there alternatives to in-person appraisals?'),
        content: t('answer4'),
      },
      {
        type: 2,
        name: t('Bridge Loan'),
      },
      {
        id: 5,
        name: t('What is a bridge loan?'),
        content: t('answer5'),
      },
      {
        id: 6,
        name: t('Why consider a bridge loan?'),
        content:
          '<ul>' +
          '<li>' +
          t('answer6 l1') +
          '</li>' +
          '<li>' +
          t('answer6 l2') +
          '</li>' +
          '<li>' +
          t('answer6 l3') +
          '</li>' +
          '<li>' +
          t('answer6 l4') +
          '</li>' +
          '</ul>',
      },
      {
        id: 7,
        name: t('What is the maximum loan term?'),
        content: t('answer7'),
      },
      {
        id: 8,
        name: t('What kind of properties can I finance with a bridge loan?'),
        content: t('answer8'),
      },
      {
        id: 9,
        name: t('How long does it take to close?'),
        content: t('answer9'),
      },
      {
        type: 2,
        name: t('Rental Loan'),
      },
      {
        id: 10,
        name: t('What is a rental loan?'),
        content: t('answer10'),
      },
      {
        id: 11,
        name: t(
          'How is a rental loan different from mortgage or alternative mortgage?',
        ),
        content: t('answer11'),
      },
      {
        id: 12,
        name: t('What is the maximum loan to value?'),
        content: t('answer12'),
      },
      {
        id: 13,
        name: t('How can I qualify for a rental loan?'),
        content:
          '<ul>' +
          '<li>' +
          t('answer13 l1') +
          '</li>' +
          '<li>' +
          t('answer13 l2') +
          '</li>' +
          '<li>' +
          t('answer13 l3') +
          '</li>' +
          '</ul>',
      },
      {
        id: 14,
        name: t('How long does it take to close a rental loan?'),
        content: t('answer14'),
      },
      {
        type: 2,
        name: t('Alternative Mortgage'),
      },
      {
        id: 15,
        name: t('What is an Alternative Mortgage? '),
        content: t('answer15'),
      },
      {
        id: 16,
        name: t('What are the standard loan terms of alternative mortgage?'),
        content: t('answer23'),
      },
      {
        id: 16,
        name: t('What is the maximum loan to value? '),
        content: t('answer16'),
      },
      {
        id: 17,
        name: t('Can you lock rates on an alternative mortgage program? '),
        content: t('answer17'),
      },
      {
        id: 18,
        name: t(
          'How long does it take to close an alternative mortgage program?',
        ),
        content: t('answer18'),
      },
      {
        type: 2,
        name: t('Jumbo Loan'),
      },
      {
        id: 19,
        name: t('What is a jumbo loan?'),
        content: t('answer19'),
      },
      {
        id: 20,
        name: t('What are the jumbo loan limits?'),
        content: t('answer20 l1') + '<br></br>' + t('answer20 l2'),
      },
      {
        id: 21,
        name: t('Why consider a jumbo loan?'),
        content:
          '<ul>' +
          '<li>' +
          t('answer21 l1') +
          '</li>' +
          '<li>' +
          t('answer21 l2') +
          '</li>' +
          '<li>' +
          t('answer21 l3') +
          '</li>' +
          '<li>' +
          t('answer21 l4') +
          '</li>' +
          '</ul>',
      },
      {
        id: 22,
        name: t('What kinds of properties can I finance with a jumbo loan?'),
        content: t('answer22'),
      },
      {
        type: 2,
        name: t('Pre-approval'),
      },
      {
        id: 23,
        name: t('Pre-approval'),
        content: t('answer23 l1') + '<br></br>' + t('answer23 l2'),
      },
      {
        id: 24,
        name: t('What types of pre-approval does YouLand offer?'),
        content: t('answer24'),
      },
      {
        id: 25,
        name: t('What is a verified pre-approval?'),
        content: t('answer25'),
      },
      {
        id: 26,
        name: t('How will getting a pre-approval affect my credit?'),
        content: t('answer26'),
      },
      {
        id: 27,
        name: t('Does my pre-approval letter expire?'),
        content: t('answer27'),
      },
    ],
    [t],
  );

  let linkIds = [];

  const [scrollRef, setScrollRef] = useState<HTMLDivElement>();

  useEffect(() => {
    getBoxIds();
  });

  const getBoxIds = () => {
    const tempLinkIds = [];
    ObjectList.forEach((item, index) => {
      const top = document.getElementById(`${item.id}`);
      if (top) {
        tempLinkIds.push({
          key: item.id,
          offsetTop: top.getBoundingClientRect().top,
        });
      }
    });
    linkIds = tempLinkIds;
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName || anchorName === 0) {
      const anchorElement = document.getElementById(anchorName);

      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    }
  };

  const onScrollEvent = () => {
    const tempLinkIds = linkIds;
    tempLinkIds.forEach((item, index) => {
      if (scrollRef.scrollTop > item.offsetTop) {
        document.getElementById(`link-${item.key}`).classList.add('activeLink');
        tempLinkIds.forEach((k, v) => {
          if (item.key !== k.key) {
            document
              .getElementById(`link-${k.key}`)
              .classList.remove('activeLink');
          }
        });
      }
    });
  };

  const contentOptions = [];
  const LinkOptions = [];
  ObjectList.forEach((item) => {
    if (item.type === 1) {
      LinkOptions.push(
        <Typography variant="subtitle1" className={classes.questionTag}>
          {item.name}
        </Typography>,
      );
    } else if (item.type === 2) {
      LinkOptions.push(
        <Typography
          variant="subtitle1"
          className={classes.questionTitle}
          style={{ fontWeight: 'bold' }}
        >
          {item.name}
        </Typography>,
      );
    } else {
      LinkOptions.push(
        <div style={{ width: '100%' }}>
          <Button
            size="small"
            id={`link-${item.id}`}
            style={{ textTransform: 'none', padding: '0px' }}
            onClick={scrollToAnchor.bind(this, item.id)}
          >
            <Typography variant="subtitle1" className={classes.questionTitle}>
              {item.name}
            </Typography>
          </Button>
        </div>,
      );

      contentOptions.push(
        <div id={`${item.id}`} style={{ height: 'fit-content' }}>
          <Typography
            className={classes.questionContent}
            variant="subtitle1"
            style={{ fontWeight: 'bold' }}
          >
            {item.name}
          </Typography>
          <Typography className={classes.questionContent} variant="subtitle1">
            <Markup content={item.content} />
          </Typography>
          <br></br>
          <br></br>
        </div>,
      );
    }
  });

  return (
    <Grid container>
      <Grid container item xs={12} justify="center" className={classes.title}>
        <Typography variant="h2">{t('FAQ')}</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid className={classes.leftCanvas} item xs={4}>
          {LinkOptions}
        </Grid>

        <Grid item xs={8} className={classes.rightCanvas}>
          <div
            onScrollCapture={() => onScrollEvent()}
            style={{ height: 1500, overflowY: 'scroll' }}
            ref={(c: HTMLDivElement) => {
              setScrollRef(c);
            }}
          >
            {contentOptions}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FAQ;
