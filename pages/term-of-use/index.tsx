import React from 'react';
import { Layout } from '@/layouts';
import {TermOfUse} from '@/view';

const TermOfUsePage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'} showLocale={false} hasLoginBtn={false}>
      <TermOfUse />
    </Layout>
  );
};

export default TermOfUsePage;