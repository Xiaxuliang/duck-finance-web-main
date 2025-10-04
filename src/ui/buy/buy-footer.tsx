import type { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { Discord, Telegram, Twitter } from '../svgs/socials';

export const BuyFooter: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div className="z-[100] flex h-[7.5vh] w-[100vw]" {...props}>
      <div className="m-auto flex w-full max-w-[97vw] flex-col items-center justify-center gap-2 px-4 sm:w-[62.2vw] sm:min-w-[66vw] sm:flex-row sm:justify-between sm:gap-0 sm:px-[1.39vw]">
        <p className="text-center text-xs text-[#CD9651] sm:text-left sm:text-[0.83vw]">
          By using Ganderfi, you agree to Terms of Service and have read Privacy Policy
        </p>

        <aside className="flex items-center gap-2 sm:gap-[1.11vw]">
          <span className="text-sm text-[#B2641F] sm:text-[1vw]">@ 2025 Ganderfi</span>
          <span className="text-[#CD9651]">|</span>
          <Link href={'https://x.com/ganderfinance'} target="_blank">
            <Twitter />
          </Link>
          <Link href={'https://x.com/ganderfinance'} target="_blank">
            <Discord />
          </Link>
          <Link href={'https://x.com/ganderfinance'} target="_blank">
            <Telegram />
          </Link>
        </aside>
      </div>
    </div>
  );
};
