import React, { FC, useRef } from 'react';
import {
  Box,
  ClickAwayListener,
  Grow,
  makeStyles,
  Popper,
  Typography,
} from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import { absoluteCenter, flexCenterV, size } from '@/common/styles';
import { ExpandMore } from '@material-ui/icons';
import { useVisible } from '@/hooks';

const useHeaderMenuStyles = makeStyles<GlobalTheme, HeaderMenuProps>(() => ({
  menuTitle: {},
  menuContent: {},
  menuItem: {
    ...flexCenterV,
    padding: '0 23px',
    height: 36,
    '& $menuContent': {
      ...flexCenterV,
      height: '100%',
      cursor: 'pointer',
    },
    '& $menuTitle': {
      marginRight: 10,
    },
  },
  arrowIcon: {
    fontSize: 12,
    ...size(24),
  },
  menuOption: {
    position: 'relative',
    '& .MortgageOptionBg': {
      background:
        'radial-gradient(50% 50% at 50% 50%, #156EFA 0%, rgba(21, 110, 250, 0) 100%);',
    },
    '& .AlternativeMortgageOptionBg': {
      background:
        'radial-gradient(50% 50% at 50% 50%, #8B734E 0%, rgba(139, 115, 78, 0) 100%);',
    },
    '& .RentalOptionBg': {
      background:
        'radial-gradient(50% 50% at 50% 50%, #53269B 0%, rgba(83, 38, 155, 0) 100%);',
    },
    '& .BridgeOptionBg': {
      background:
        'radial-gradient(50% 50% at 50% 50%, #28514D 0%, rgba(40, 81, 77, 0) 100%);',
    },
    '& .JumboOptionBg': {
      background:
        'radial-gradient(50% 50% at 50% 50%, #3A2B3D 0%, rgba(93, 77, 96, 0) 100%);',
    },
    '& .MortgageOptionBg, & .AlternativeMortgageOptionBg, & .RentalOptionBg, & .BridgeOptionBg, & .JumboOptionBg':
      {
        display: 'none',
        filter: 'blur(4px)',
        position: 'absolute',
        top: 0,
        left: 0,
        ...size('100%'),
      },
    '&:hover .MortgageOptionBg, &:hover .AlternativeMortgageOptionBg, &:hover .RentalOptionBg, &:hover .BridgeOptionBg, &:hover .JumboOptionBg':
      {
        display: 'block',
      },
    '&:hover .MortgageOption, &:hover .AlternativeMortgageOption, &:hover .RentalOption, &:hover .BridgeOption, &:hover .JumboOption':
      {
        color: 'transparent',
      },
    '& .optionText': {
      display: 'none',
      ...absoluteCenter,
      fontFamily: 'MontserratBold',
      color: '#fff',
      whiteSpace: 'nowrap',
    },
    '&:hover .optionText': {
      display: 'block',
    },
  },
  menuList: {
    background: '#fff',
    '& $menuOption': {
      cursor: 'pointer',
      height: 34,
      lineHeight: '34px',
    },
  },
}));

interface HeaderMenuProps {
  title: string;
  options: Array<{ label: string; key: string; value: string }>;
  trigger?: 'click' | 'hover';
  onClick: (key: string) => void;
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { title, options, onClick } = props;
  const classes = useHeaderMenuStyles(props);
  const { visible: open, open: openMenu, close: closeMenu } = useVisible();
  const anchorEl = useRef<HTMLDivElement>();
  return (
    <React.Fragment>
      <div className={classes.menuItem} onClick={openMenu}>
        <div className={classes.menuContent} ref={anchorEl}>
          <Typography
            className={classes.menuTitle}
            component={'span'}
            variant={'body1'}
          >
            {title}
          </Typography>
          <ExpandMore className={classes.arrowIcon} />
        </div>
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl.current}
        role={undefined}
        transition
        disablePortal
        placement={'bottom-start'}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <ClickAwayListener onClickAway={closeMenu}>
              <div className={classes.menuList}>
                {options.map((option) => {
                  return (
                    <div
                      onClick={() => {
                        onClick(option.key);
                      }}
                      className={classes.menuOption}
                      key={option.key}
                    >
                      <Box display={'inline-block'} position={'relative'}>
                        <Box className={`${option.value}OptionBg`} />
                        <Box
                          className={`${option.value}Option`}
                          component={'span'}
                          display={'inline-block'}
                          padding={'0 20px'}
                          height={'100%'}
                        >
                          {option.label}
                        </Box>
                        <span className={'optionText'}>{option.label}</span>
                      </Box>
                    </div>
                  );
                })}
              </div>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
