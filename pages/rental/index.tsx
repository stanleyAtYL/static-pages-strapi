import React from 'react';
import { Layout } from '@/layouts';
import { RentalProd } from '@/view';

const RentalLoanPage = (): JSX.Element => {
  return (
    <Layout scene={'rental'}>
      <RentalProd />
    </Layout>
  );
};

export default RentalLoanPage;
