import type { ComponentProps, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import homeBg from './assets/home-bg.png';

export const Hero: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div className="hero-container-responsive relative w-full overflow-hidden" {...props}>
      <Image
        src={homeBg}
        alt="bg"
        fill
        quality={100}
        priority
        className="hero-bg-responsive pointer-events-none z-0"
        sizes="100vw"
      />
      <aside className="relative z-10 mt-[120px] ml-[20px] flex h-auto w-[90%] flex-col gap-4 px-4 sm:mt-[235px] sm:ml-[122px] sm:w-[573px] sm:gap-6 sm:px-0">
        <h2 className="flex flex-col text-[24px] font-extrabold text-[#B6651F] sm:text-[40px]">
          <span>Let your yield go brrr inside the $Gander vaults</span>
          {/* <span>Next gen treasury management, powered by fresh mechanics</span> */}
        </h2>

        <p className="flex flex-col text-sm font-semibold text-[#CC8947] sm:text-base">
          {/* <span>Earn delicious yields on your digital assets with our fun,</span>
          <span>secure, and colorful platform.Join the pancake party</span>
          <span>and stack those rewards! 🚀</span> */}
          <span>Next gen treasury management, powered by fresh mechanics</span>
        </p>

        <footer className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {/* <Link
            className="cursor-pointer rounded-[30px] bg-[#F4BE49] px-4 py-3 text-sm font-bold text-[#B6651F] shadow-[0_4px_0_#C98748] sm:px-6 sm:py-4 sm:text-base"
            href={'/buy'}
          >
            Buy Now
          </Link> */}
          {/* TODO: docs link */}
          <Link
            className="cursor-pointer rounded-[30px] bg-[#FEFAF1] px-4 py-3 text-sm font-bold text-[#B6651F] shadow-[0_4px_0_#C98748] sm:px-6 sm:py-4 sm:text-base"
            href={'https://ganderfi.gitbook.io/ganderfi-docs/'}
            target="_blank"
          >
            Read Docs
          </Link>
          <Link
            className="cursor-pointer rounded-[30px] bg-[#FC871A] px-4 py-3 text-sm font-bold text-[#FFF7EB] shadow-[0_4px_0_#C98748] sm:px-6 sm:py-4 sm:text-base"
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLScwW16WeuDlkp7V3GQ0YWXWFmpKHMp8huXI69PY6Xkfwl9LUA/viewform'
            }
            target="_blank"
          >
            Apply Whitelist
          </Link>
        </footer>
      </aside>
    </div>
  );
};
