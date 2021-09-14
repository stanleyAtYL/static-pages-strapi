import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// for example
const customTheme: CustomTheme = {
  customPalette: {
    mortgage: {
      primaryColor: '#156EFA;',
      buttonBg: 'linear-gradient(98.19deg, #051229 -16.09%, #156EFA 100%);',
    },
    alternativeMortgage: {
      primaryColor: '#948167;',
      buttonBg: 'linear-gradient(293.09deg, #9E8D75 11.97%, #212223 112.88%)',
    },
    rental: {
      primaryColor: '#53269B;',
      buttonBg: 'linear-gradient(293.09deg, #53269B 11.97%, #180733 112.88%);',
    },
    bridge: {
      primaryColor: '#28514D;',
      buttonBg: 'linear-gradient(284.86deg, #28514D -3.1%, #032824 84.9%);',
    },
    jumbo: {
      primaryColor: '#FFFFFF;',
      buttonBg: 'linear-gradient(293.09deg, #5D4D60 11.97%, #252D3E 112.88%);',
    },
    agent: {
      primaryColor: '#FFFFFF;',
      buttonBg: '#A4A4A4',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CustomTheme {
  customPalette: {
    mortgage: {
      primaryColor: string;
      buttonBg: string;
    };
    alternativeMortgage: {
      primaryColor: string;
      buttonBg: string;
    };
    rental: {
      primaryColor: string;
      buttonBg: string;
    };
    bridge: {
      primaryColor: string;
      buttonBg: string;
    };
    jumbo: {
      primaryColor: string;
      buttonBg: string;
    };
    agent: {
      primaryColor: string;
      buttonBg: string;
    };
  };
}

export type GlobalTheme = Theme & CustomTheme;

const getTheme: () => GlobalTheme = () => {
  return {
    ...customTheme,
    ...createMuiTheme({
      typography: {
        fontFamily: 'Montserrat',
        h3: {
          fontFamily: 'MontserratBold',
          fontWeight: 'bold',
          fontSize: '3rem',
          lineHeight: 1.5,
        },
        h5: {
          fontFamily: 'MontserratBold',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          lineHeight: 1.5,
        },
        subtitle1: {
          fontSize: '1.5rem',
          lineHeight: 1.7,
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.7,
        },
        body2: {
          fontSize: '.875rem',
          lineHeight: 1.5,
        },
      },
    }),
  };
};

export default getTheme;
