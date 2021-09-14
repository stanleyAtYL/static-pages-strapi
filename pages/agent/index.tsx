import React from 'react';
import { Layout } from '@/layouts';
import { Agent } from '@/view';

const AgentPage = (): JSX.Element => {
  return (
    <Layout scene={'agent'} showLocale={true} hasLoginBtn={false}>
      <Agent />
    </Layout>
  );
};

export default AgentPage;
