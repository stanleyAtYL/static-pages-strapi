import React from 'react';
import { Layout } from '@/layouts';
import { Disclosure } from '@/view';

const DisclosurePage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'} showLocale={true} hasLoginBtn={false}>
      <Disclosure />
    </Layout>
  );
};

export default DisclosurePage;
