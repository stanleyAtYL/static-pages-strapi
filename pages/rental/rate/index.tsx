import React, { useEffect } from 'react';
import { Layout } from '@/layouts';

const RentalRatePage = (): JSX.Element => {
  return (
    <Layout scene={'rental'}>
      <div style={{ height: '1600px' }}>
        <iframe
          src="https://app.youland.com/instant-rate/rental"
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

export default RentalRatePage;
