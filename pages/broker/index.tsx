import React from 'react';
import { Layout } from '@/layouts';
import { Broker } from '@/view';

const BrokerPage = (): JSX.Element => {
  return (
    <Layout scene={'agent'} showLocale={true} hasLoginBtn={false}>
      <Broker />
    </Layout>
  );
};

export default BrokerPage;
