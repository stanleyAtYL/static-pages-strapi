import React from 'react';
import { Layout } from '../src/layouts';
import { HomePage } from 'view';

const HomeP = (): JSX.Element => {
  return (
    <Layout scene={'mortgage'} transparent={true}>
      <HomePage />
    </Layout>
  );
};

export default HomeP;
