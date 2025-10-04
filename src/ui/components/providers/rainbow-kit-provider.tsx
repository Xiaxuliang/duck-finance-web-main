'use client';

import type { FC, ReactNode } from 'react';
import { RainbowKitProvider as Provider } from '@rainbow-me/rainbowkit';
import { useAtomValue } from 'jotai';
import { getAddress } from 'viem';
import { chainIdAtom } from '@/lib/states/evm';
import { AccountIcon } from '../shared/account-icon';

export const RainbowKitProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const { resolvedTheme } = useTheme();

  // const [theme, setTheme] = useState(rainbowkitLightTheme);

  const chainId = useAtomValue(chainIdAtom);

  // useEffect(() => {
  //   setTheme(resolvedTheme === 'light' ? rainbowkitLightTheme : rainbowkitDarkTheme);
  // }, [resolvedTheme]);

  return (
    <Provider
      // theme={theme}
      avatar={({ address, size }) => (
        <AccountIcon
          className="size-[var(--size)]"
          style={{ '--size': `${size}px` }}
          account={getAddress(address)}
        />
      )}
      locale="en"
      initialChain={chainId}
    >
      {children}
    </Provider>
  );
};
