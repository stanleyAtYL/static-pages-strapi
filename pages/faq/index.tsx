import React from 'react';
import { Layout } from '@/layouts';
import { FAQ } from '@/view';

const MortgagePage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'}>
      <FAQ />
    </Layout>
  );
};

export default MortgagePage;