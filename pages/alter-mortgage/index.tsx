import React from 'react';
import { Layout } from '@/layouts';
import { AlternativeMortgageProd } from '@/view';

const AlternativeMortgagePage = (): JSX.Element => {
  return (
    <Layout scene={'alternativeMortgage'}>
      <AlternativeMortgageProd />
    </Layout>
  );
};

export default AlternativeMortgagePage;
