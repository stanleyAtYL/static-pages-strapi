import React from 'react';
import { Layout } from '@/layouts';
import { BridgeProd} from 'view/BridgeProd';

const BridgeLoanPage = (): JSX.Element => {
  return (
    <Layout scene={'bridge'}>
      <BridgeProd />
    </Layout>
  );
};

export default BridgeLoanPage;