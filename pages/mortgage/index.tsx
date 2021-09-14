import React from 'react';
import { Layout } from '@/layouts';
import { MortgageProd } from '@/view';

const MortgagePage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'}>
      <MortgageProd />
    </Layout>
  );
};

export default MortgagePage;
