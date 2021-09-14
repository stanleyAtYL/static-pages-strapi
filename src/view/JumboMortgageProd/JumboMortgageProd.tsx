import React, { FC } from 'react';
import { HelpfulResource } from '@/components/organisms';
import { ProductBanner } from '@/components/molecules';
import { Advantage } from './components';
import { Review } from './components';
import { Subproduct } from './components';

export const JumboMortgageProd: FC = () => {
  return (
    <div>
      <ProductBanner scene={'jumbo'} />
      <Advantage />
      <Subproduct />
      <Review />
      <HelpfulResource scene={'jumbo'} />
    </div>
  );
};
