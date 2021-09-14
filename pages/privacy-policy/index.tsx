import React from 'react';
import { Layout } from '@/layouts';
import {PrivacyPolicy} from '@/view';

const AgentPage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'} showLocale={false} hasLoginBtn={false}>
      <PrivacyPolicy />
    </Layout>
  );
};

export default AgentPage;