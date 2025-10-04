import type { ComponentProps, FC } from 'react';
import { Hero } from './hero';
import { HomeFooter } from './home-footer';
import { HowItWorks } from './how-it-works';
import { Info } from './info';
import { ReservePools } from './reserve-pools';
import { Stats } from './stats';
import { ToStart } from './to-start';

export const HomePage: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div {...props} className="flex flex-col">
      <Hero />
      <Stats />
      <ReservePools />
      <ToStart />
      <HowItWorks />
      <Info />
      <HomeFooter />
    </div>
  );
};
