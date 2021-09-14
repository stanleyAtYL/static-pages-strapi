import React, { FC } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import Carousel from 'react-material-ui-carousel';
import clsx from 'clsx';
import { size } from '@/common/styles';

interface ReviewCarouselProps {
  scene: LoanProduct;
  data: Array<{
    name: string;
    product: string;
    location: string;
    comment: string;
  }>;
  style?: any;
  className?: string;
}

const quotationColorData = {
  mortgage: '#156EFA',
  alternativeMortgage: '#948167',
  bridge: '#28514D',
  rental: '#53269B',
  jumbo: '#51324F',
};

const textColorData = {
  mortgage: '#051229',
  alternativeMortgage: '#051229',
  bridge: '#051229',
  rental: '#051229',
  jumbo: 'rgb(255,255,255)',
};

const renderQuotation = (className: string) => {
  return (
    <svg
      className={className}
      width="111"
      height="87"
      viewBox="0 0 111 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.0176 0.0546875L53.8652 12.9453C45.0566 28.8438 40.4912 43.7217 40.1689 57.5791V86.0996H0.530273V59.5127C0.637695 49.7373 3.53809 39.2637 9.23145 28.0918C14.9248 16.8125 21.8535 7.4668 30.0176 0.0546875ZM86.5752 0.0546875L110.423 12.9453C101.614 28.8438 97.0488 43.7217 96.7266 57.5791V86.0996H57.0879V59.5127C57.1953 49.7373 60.0957 39.2637 65.7891 28.0918C71.4824 16.8125 78.4111 7.4668 86.5752 0.0546875Z" />
    </svg>
  );
};

const useStyles = makeStyles<GlobalTheme, ReviewCarouselProps>((theme) => ({
  root: {
    '& .activeIndicatorIcon $indicatorIcon': {
      background: '#051229;',
    },
  },
  quotation: {
    fill: ({ scene }) => quotationColorData[scene],
    fontSize: 300,
    marginRight: 20,
  },
  indicatorIcon: {
    marginRight: 12,
    ...size(56, '2px'),
    background: '#E0E0E0;',
  },
  textColor: {
    color: ({ scene }) => textColorData[scene],
  },
}));

export const ReviewCarousel: FC<ReviewCarouselProps> = (props) => {
  const { className = '', style = {}, data } = props;
  const classes = useStyles(props);
  return (
    <div className={clsx(className, classes.root)} style={style}>
      <Carousel
        autoPlay={false}
        animation={'slide'}
        navButtonsAlwaysInvisible={true}
        interval={4000}
        indicators={false}
        IndicatorIcon={<div className={classes.indicatorIcon} />}
        activeIndicatorIconButtonProps={{
          className: 'activeIndicatorIcon',
          style: {},
        }}
      >
        {data.map((d, i) => {
          return (
            <Box key={i} minHeight={350}>
              <Box display={'inline-block'} mb={'36px'}>
                {renderQuotation(classes.quotation)}
                <Typography
                  variant={'h5'}
                  component={'span'}
                  className={classes.textColor}
                >
                  {d.name} - {d.product}
                </Typography>
                <Typography
                  variant={'subtitle1'}
                  align={'right'}
                  className={classes.textColor}
                >
                  {d.location}
                </Typography>
              </Box>
              <Box display={'flex'} margin={'0 auto'} width={576}>
                <Typography
                  variant={'subtitle1'}
                  align={'center'}
                  className={classes.textColor}
                  // style={{
                  //   color: '#041329',
                  // }}
                >
                  {d.comment}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};
