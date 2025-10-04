import type { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { Discord, Telegram, Twitter } from '../svgs/socials';

export const HomeFooter: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div
      className="z-10 mt-16 flex h-auto w-full py-4 sm:mt-[210px] sm:h-[68px] sm:py-0"
      {...props}
    >
      <div className="m-auto flex w-full max-w-[896px] flex-col gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0 sm:px-0">
        <p className="text-center text-xs text-[#CD9651] sm:text-left">
          By using Ganderfi, you agree to Terms of Service and have read Privacy Policy
        </p>

        <aside className="flex items-center justify-center gap-4 sm:justify-end">
          <span className="text-[#B2641F]">@ 2025 Ganderfi</span>
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
