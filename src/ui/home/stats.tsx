'use client';

import type { ComponentProps, FC } from 'react';
// import CountUp from '../components/shared/count-up';

export const Stats: FC<ComponentProps<'div'>> = () => {
  const statsData = [
    {
      tag: 'Current APY',
      data: '*',
    },
    {
      tag: 'Total Value Locked',
      data: '*',
    },
    {
      tag: 'Happy Depositors',
      data: '*',
    },
  ] as const;

  // const parseDataForCountUp = (data: string) => {
  //   if (data === '12.5%🔥') {
  //     return {
  //       value: 12.5,
  //       prefix: '',
  //       suffix: '%🔥',
  //     };
  //   } else if (data === '$2.1M') {
  //     return {
  //       value: 2.1,
  //       prefix: '$',
  //       suffix: 'M',
  //     };
  //   } else if (data === '1,234') {
  //     return {
  //       value: 1234,
  //       prefix: '',
  //       suffix: '',
  //     };
  //   }
  //   return { value: 0, prefix: '', suffix: '' };
  // };

  return (
    <div className="h-auto w-full bg-gradient-to-b from-[#FFECCC] to-[#EDD7B500] py-8 sm:h-[300px] sm:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[615px] flex-col gap-8 px-4 sm:flex-row sm:justify-evenly sm:gap-0 sm:px-0">
        {statsData.map(v => {
          // const { value, prefix, suffix } = parseDataForCountUp(v.data);
          return (
            <div key={v.tag} className="mx-auto flex flex-col items-center gap-4 sm:gap-6">
              {/* <CountUp
                from={0}
                to={value}
                separator=","
                direction="up"
                duration={1}
                className="mx-auto text-[28px] font-extrabold text-[#B6651F] sm:text-[40px]"
                prefix={prefix}
                suffix={suffix}
              /> */}

              <span className="mx-auto text-[28px] font-extrabold text-[#B6651F] sm:text-[40px]">
                *
              </span>
              <h3 className="text-center text-sm font-extrabold text-[#CC8947] sm:text-base">
                {v.tag}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
