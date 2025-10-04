import type { ComponentProps, FC } from 'react';
import Image from 'next/image';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';

export const HowItWorks: FC<ComponentProps<'div'>> = ({ ...props }) => {
  const infos = [
    {
      image: step1,
      step: 'step1',
      title: 'Deposit Assets',
      description: ' Connect your wallet and drop some $Gander into our reserve pool',
    },
    {
      image: step2,
      step: 'step2',
      title: 'Earn Yield',
      description:
        'Let your assets grow inside our DeFi treasury, flipping up like pancakes in the pan',
    },
    {
      image: step3,
      step: 'step3',
      title: 'Claim your rewards',
      description:
        'And just like waiting for pancakes to flip, when the time comes you’ll be able to take out your hot, fresh gains',
    },
  ];

  return (
    <div
      {...props}
      className="mx-auto mt-16 flex w-full max-w-[960px] flex-col items-center justify-center px-4 sm:mt-[160px] sm:px-0"
    >
      <h3 className="mb-6 text-center text-[24px] font-extrabold text-[#B6651F] uppercase sm:text-[40px]">
        How does $Gander work?
      </h3>
      <p className="flex flex-col items-center justify-center text-center text-xs font-medium text-[#CC8947] sm:text-sm">
        <span>
          {/* Join thousands of happy pancakers who trust DemoReserver with their digital assets! Our */}
          Every trade feeds the goose.
        </span>
        {/* <span>
          sweet reserve pools make it super easy to earn delicious yields on your crypto!{' '}
        </span> */}
      </p>

      <div className="mt-8 flex w-full flex-col gap-8 sm:mt-[80px] sm:w-[846px] sm:flex-row sm:justify-evenly sm:gap-6">
        {infos.map(v => (
          <div key={v.step} className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <div className="flex h-[200px] w-[180px] items-end justify-center sm:h-[280px] sm:w-[250px]">
              <Image
                src={v.image.src}
                width={150}
                height={150}
                alt="icon"
                className="sm:h-[200px] sm:w-[200px]"
              />
            </div>
            <span className="text-lg font-extrabold text-[#EE8721] sm:text-2xl">{v.step}</span>
            <h3 className="text-center text-sm font-extrabold text-[#B6651F] uppercase sm:text-base">
              {v.title}
            </h3>
            {/* TODO: row 4 */}
            <p className="text-center text-xs font-medium text-[#CC8947] sm:text-sm">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
