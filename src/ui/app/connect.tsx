'use client';

import type { ComponentProps, FC } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { disconnect } from '@wagmi/core';
import { useAtomValue } from 'jotai';
import { accountAtom } from '@/lib/states/evm';
import { formatLongText } from '@/lib/utils/formatters';
import { cn } from '@/lib/utils/shadcn';
import { wagmiConfig } from '@/lib/utils/wagmi';

// TODO: pointer
export const Connect: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const account = useAtomValue(accountAtom);

  const { openConnectModal } = useConnectModal();

  return (
    <div className={cn('group relative inline-flex', className)} {...props}>
      <button
        className={cn(
          'flex cursor-pointer items-center',
          account != null && 'group-hover:opacity-0',
        )}
        onClick={openConnectModal}
      >
        {account != null ? (
          <div className="rounded-[30px] bg-[#B6651F] px-4 py-3 text-sm font-semibold text-[#FDF8EB]">
            {formatLongText(account, { headLength: 6, tailLength: 4 })}
          </div>
        ) : (
          <div className="rounded-[30px] bg-[#EDD7B5] px-4 py-3 text-sm font-semibold text-[#CF8D49]">
            Connect wallet
          </div>
        )}
      </button>
      {account != null && (
        <button
          className="absolute inset-0 flex h-auto cursor-pointer items-center justify-center rounded-[30px] bg-[#EDD7B5] px-4 py-3 text-sm font-semibold text-[#CF8D49] opacity-0 group-hover:opacity-100"
          onClick={() => disconnect(wagmiConfig)}
        >
          Disconnect
        </button>
      )}
    </div>
  );
};
