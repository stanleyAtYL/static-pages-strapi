import React, { FC } from 'react';
import { HelpfulResource } from '@/components/organisms';
import { ProductBanner } from '@/components/molecules';
import { Advantage, Introduction, Review } from './components';

export const AlternativeMortgageProd: FC = () => {
  return (
    <div>
      <ProductBanner scene={'alternativeMortgage'} />
      <Advantage />
      <Introduction />
      <Review />
      <HelpfulResource scene={'alternativeMortgage'} />
    </div>
  );
};
