interface Option {
  label: string;
  key: string;
  value: string;
}

type PageScene =
  | 'mortgage'
  | 'alternativeMortgage'
  | 'jumbo'
  | 'rental'
  | 'bridge'
  | 'agent';

type LoanProduct = Exclude<PageScene, 'agent'>;

type Role = 'borrower' | 'broker' | 'lender' | 'agent' | 'others';
