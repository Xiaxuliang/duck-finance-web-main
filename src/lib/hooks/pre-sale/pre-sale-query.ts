import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { formatEther } from 'viem';
import { useChainId } from 'wagmi';
import {
  calculateSaleQuote,
  checkWhitelist,
  getPreSaleConfig,
  getSaleEndTimestamp,
  getSaleIsStart,
  getSaleStartTimestamp,
  getSoldTokenAmount,
  getTotalSupply,
  getUserBought,
  getWhitelistCap,
} from '@/lib/apis/pre-sale/pre-sale-query';
import { accountAtom } from '@/lib/states/evm';

export function useCalculateSaleQuote(ethAmount: string) {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['calculateSaleQuote', ethAmount, chainId],
    queryFn: async () => {
      if (!ethAmount || ethAmount === '0') {
        return '0';
      }
      const result = await calculateSaleQuote({ ethAmount });
      return formatEther(result);
    },
    enabled: !!ethAmount && ethAmount !== '0',
    retry: false,
  });
}

export function usePreSaleConfig() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['preSaleConfig', chainId],
    queryFn: async () => {
      return await getPreSaleConfig();
    },
    staleTime: 30000, // Cache for 30 seconds
    retry: false,
  });
}

export function useGanderBalance(
  account: `0x${string}` | undefined,
  ganderTokenAddress: `0x${string}` | undefined,
) {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['ganderBalance', account, ganderTokenAddress, chainId],
    queryFn: async () => {
      if (!account || !ganderTokenAddress) {
        return '0';
      }

      // Use the existing ERC20 balance functionality
      const { getBalance } = await import('@/lib/apis/tokens');
      const result = await getBalance({
        chainId,
        account,
        address: ganderTokenAddress,
        decimals: 18, // Assuming Gander token has 18 decimals
      });

      return result;
    },
    enabled: !!account && !!ganderTokenAddress,
    staleTime: 10000, // Cache for 10 seconds
    retry: false,
  });
}

// TODO: skipToken
export function useCheckWhitelist() {
  const account = useAtomValue(accountAtom);
  const chainId = useChainId();

  return useQuery({
    queryKey: ['checkWhitelist', account, chainId],
    queryFn: async () => {
      if (!account) {
        return false;
      }
      return await checkWhitelist({ account });
    },
    enabled: !!account,
    staleTime: 30000,
    retry: false,
  });
}

export function useUserBought() {
  const account = useAtomValue(accountAtom);
  const chainId = useChainId();

  return useQuery({
    queryKey: ['userBought', account, chainId],
    queryFn: async () => {
      if (!account) {
        return '0';
      }
      const result = await getUserBought({ account });
      return formatEther(result);
    },
    enabled: !!account,
    staleTime: 30000,
    retry: false,
  });
}

export function useSoldTokenAmount() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['soldTokens', chainId],
    queryFn: async () => {
      const result = await getSoldTokenAmount();
      return formatEther(result);
    },
    staleTime: 30000,
    retry: false,
  });
}

export function useSaleIsStart() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['saleIsStart', chainId],
    queryFn: async () => {
      return await getSaleIsStart();
    },
    staleTime: 30000,
    retry: false,
  });
}

export function useSaleStartTimestamp() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['saleStartTimestamp', chainId],
    queryFn: async () => {
      return await getSaleStartTimestamp();
    },
    staleTime: 30000,
    retry: false,
  });
}

export function useSaleEndTiemstamp() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['saleEndTimestamp', chainId],
    queryFn: async () => {
      return await getSaleEndTimestamp();
    },
    staleTime: 30000,
    retry: false,
  });
}

export function useSaleStatus() {
  const saleIsStartQuery = useSaleIsStart();
  const saleStartTimestampQuery = useSaleStartTimestamp();
  const saleEndTimestampQuery = useSaleEndTiemstamp();

  return {
    isStart: saleIsStartQuery.data,
    saleStartTimestamp: saleStartTimestampQuery.data
      ? Number(saleStartTimestampQuery.data) * 1000
      : undefined,
    saleEndTimestamp: saleEndTimestampQuery.data
      ? Number(saleEndTimestampQuery.data) * 1000
      : undefined,
  };
}

export function useTokenSaleProgress() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['tokenSaleProgress', chainId],
    queryFn: async () => {
      const [totalSupply, soldAmount] = await Promise.all([getTotalSupply(), getSoldTokenAmount()]);

      const progress = totalSupply > 0n ? (Number(soldAmount) / Number(totalSupply)) * 100 : 0;

      return progress;
    },
    staleTime: 30000,
    retry: false,
    // TODO: config
    refetchInterval: 60 * 1000,
  });
}

export function useTotalAmount() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['totalAmount', chainId],
    queryFn: async () => {
      const result = await getTotalSupply();
      return formatEther(result);
    },
    staleTime: 30000,
    retry: false,
  });
}

export function useWhitelistCap() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ['whitelistCap', chainId],
    queryFn: async () => {
      const result = await getWhitelistCap();
      return formatEther(result);
    },
    staleTime: 30000,
    retry: false,
  });
}
