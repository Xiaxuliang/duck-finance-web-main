import type { ComponentProps, FC } from 'react';
import Image from 'next/image';
import { Logo } from '../svgs/logo';
import flag from './assets/flag.png';

export const Info: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div {...props} className="mt-16 flex flex-col gap-4 px-4 sm:mt-[160px] sm:gap-6 sm:px-0">
      <Image
        src={flag.src}
        width={200}
        height={85}
        alt="flag"
        className="m-auto sm:h-[123px] sm:w-[290px]"
      />
      <h3 className="m-auto mx-auto flex gap-2 text-[#B2641F] sm:gap-3">
        <Logo className="size-[30px] sm:size-[45px]" />
        <span className="text-2xl font-bold sm:text-4xl">Ganderfi</span>
      </h3>

      <p className="m-auto mb-4 flex flex-col items-center justify-center text-center text-sm font-semibold text-[#CD9651] sm:mb-6 sm:text-base">
        {/* <span>The sweetest reserve protocol in DeFi! 🥞 Built for the community,</span>
        <span>by the community.</span> */}
        Honk if you’re ready for sustainable yields! 🦢
      </p>

      {/* <p className="m-auto text-center text-sm font-semibold text-[#CD9651] sm:text-base">
        {"Let's make some pancakes! 🚀"}
      </p> */}
    </div>
  );
};
