import React from 'react';
import { Layout } from '@/layouts';
import { JumboMortgageProd } from '@/view';

const JumboMortgagePage = (): JSX.Element => {
  return (
    <Layout scene={'jumbo'}>
      <JumboMortgageProd />
    </Layout>
  );
};

export default JumboMortgagePage;
