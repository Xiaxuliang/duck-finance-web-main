import type { ComponentProps, FC } from 'react';
import Image from 'next/image';
import start1 from './assets/start1.png';
import start2 from './assets/start2.png';
import start3 from './assets/start3.png';
import start4 from './assets/start4.png';

export const ToStart: FC<ComponentProps<'div'>> = ({ ...props }) => {
  const infos = [
    {
      image: start1,
      tag: 'Staking Rewards',
    },
    {
      image: start2,
      tag: 'Bonding Mechanism',
    },
    {
      image: start3,
      tag: 'Protocol-Owned Liquidity (POL)',
    },
    {
      image: start4,
      tag: 'Treasury Backing',
    },
  ];

  return (
    <div
      id="mechanics"
      {...props}
      className="mx-auto mt-16 flex w-full max-w-[663px] flex-col items-center justify-center px-4 sm:mt-[160px] sm:px-0"
    >
      <h3 className="text-center text-[24px] font-extrabold text-[#B6651F] sm:text-[40px]">
        Ready to Start Earning with $Gander?
      </h3>
      <p className="flex flex-col text-center text-xs text-[#CC8947] sm:text-sm">
        <span>
          Our powerful reserve pools make it super easy to farm sustainable yields on your crypto
        </span>
        <span> all powered by $Gander’s innovative mechanics.</span>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-[80px] sm:grid-cols-2 sm:gap-12">
        {infos.map(v => (
          <div key={v.tag} className="flex flex-col justify-end gap-4 sm:gap-6">
            <div className="flex size-[150px] items-end justify-center sm:size-[200px]">
              {/* TODO: image */}
              <Image
                alt="icon"
                width={150}
                height={150}
                src={v.image.src}
                className="sm:h-[200px] sm:w-[200px]"
              />
            </div>
            <h3 className="flex h-auto w-full flex-wrap items-center justify-center px-4 text-center text-sm font-extrabold text-[#EE8721] sm:h-[44px] sm:w-[200px] sm:px-7 sm:text-lg">
              {v.tag}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
