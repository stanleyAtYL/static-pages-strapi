import React, { FC } from 'react';
import { Layout } from '@/layouts';
import { AboutUs } from '@/view';

const AboutUsPage: FC = () => {
  return (
    <Layout scene={'mortgage'}>
      <AboutUs />
    </Layout>
  );
};

export default AboutUsPage;
