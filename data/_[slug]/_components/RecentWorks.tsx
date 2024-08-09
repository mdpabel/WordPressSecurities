import { SectionTitleWithSubTitle } from '@/components/Title';
import Portfolio from './Portfolio';
import { Entry, UnresolvedLink } from 'contentful';
import {
  TypePortfolio,
  TypePortfolioFields,
  TypePortfolioSkeleton,
} from '@/types';

export type PortfolioProps = {
  portfolio: (
    | UnresolvedLink<'Entry'>
    | Entry<TypePortfolioSkeleton, undefined, string>
  )[];
};

const RecentWorks = ({ portfolio }: PortfolioProps) => {
  return (
    <section className='bg-white  antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto lg:px-6 '>
        <SectionTitleWithSubTitle
          subTitle=' Crafted with skill and care to help our clients grow their business!'
          title='Our Recent work'
        />

        <Portfolio portfolio={portfolio} />
      </div>
    </section>
  );
};

export default RecentWorks;
