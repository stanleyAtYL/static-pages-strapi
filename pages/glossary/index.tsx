import React from 'react';
import { Layout } from '../../src/layouts';
import { Glossary } from 'view';

const GlossaryPage = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'}>
      <Glossary/>
    </Layout>
  );
};

export default GlossaryPage;