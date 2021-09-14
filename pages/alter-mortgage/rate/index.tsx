import React from 'react';
import { Layout } from '@/layouts';

const MortgageAlterRatePage = (): JSX.Element => {
  return (
    <Layout scene={'alternativeMortgage'}>
      <div style={{ height: '1600px' }}>
        <iframe
          src="https://app.youland.com/instant-rate/mortgage-alter"
          style={{
            width: 'calc(100%)',
            height: 'calc(100%)',
            borderWidth: '0px',
          }}
          id="instant-rate"
        ></iframe>
      </div>
    </Layout>
  );
};

export default MortgageAlterRatePage;
