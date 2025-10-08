import type { ComponentProps, FC } from 'react';

export const ReservePools: FC<ComponentProps<'section'>> = ({ ...props }) => {
  const cards = [
    {
      title: 'Secure Deposits',
      description: 'Multi-signature security with institutional-grade protection',
    },
    {
      title: 'Automated Yield',
      description: 'Smart contracts optimize returns across DeFi protocols',
    },
    {
      title: 'Sustainable Liquidity',
      description: 'Locked liquidity ensures stability and long-term treasury growth',
    },
    {
      title: 'Community Governance',
      description: 'Vote on protocol parameters and fund allocation',
    },
    {
      title: 'Treasury Backed Security',
      description: 'Every token’s got the treasury backing it',
    },
    {
      title: 'Swap Tax',
      description: 'Fuel for $Gander growth',
    },
  ];

  return (
    <section
      id="introduction"
      className="mx-auto w-full max-w-[960px] bg-[#E9D8B9] px-4 py-8 sm:px-0 sm:py-0"
      {...props}
    >
      <h2 className="mb-6 text-center text-[24px] font-extrabold text-[#B6651F] sm:text-[40px]">
        WHAT ARE RESERVE POOLS?🥞
      </h2>

      <div className="mx-auto mb-8 max-w-5xl text-center sm:mb-16">
        <p className="text-sm text-[#CC8947] sm:text-lg">
          Advanced reserve pools are intelligent smart contract vaults that generate optimized yield
          on your deposited cryptocurrency using cutting-edge protocols.
        </p>
        <p className="text-sm text-[#CC8947] sm:text-lg">
          Think of them as next-generation digital vaults that grow your assets through
          sophisticated DeFi strategies with institutional-grade security and transparency.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
        {cards.map(v => (
          <div
            key={v.title}
            className="flex flex-col gap-4 rounded-2xl bg-[#FDF6ED80] py-4 backdrop-blur-md sm:gap-6 sm:py-6"
          >
            <h3 className="mx-auto text-base font-extrabold text-[#EE8721] uppercase sm:text-lg">
              {v.title}
            </h3>
            <p className="mx-auto px-4 text-center text-xs text-[#CC8947] sm:px-[22px] sm:text-sm">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
