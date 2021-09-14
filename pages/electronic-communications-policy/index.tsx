import React from 'react';
import { Layout } from '@/layouts';
import { ElectronicCommunicationsPolicy } from '@/view';

const ElectronicPolicyPage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'} showLocale={false} hasLoginBtn={false}>
      <ElectronicCommunicationsPolicy />
    </Layout>
  );
};

export default ElectronicPolicyPage;
