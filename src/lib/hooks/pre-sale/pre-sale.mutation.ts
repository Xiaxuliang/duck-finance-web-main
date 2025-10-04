import { useMutation, useQueryClient } from '@tanstack/react-query';
import { waitForTransactionReceipt } from '@wagmi/core';
import { useChainId } from 'wagmi';
import { purchaseToken } from '@/lib/apis/pre-sale';
import { wagmiConfig } from '@/lib/utils/wagmi';

export function usePurchaseToken() {
  const queryClient = useQueryClient();
  const chainId = useChainId();

  return useMutation({
    mutationFn: async ({ ethAmount }: { ethAmount: string }) => {
      const hash = await purchaseToken({ ethAmount });
      await waitForTransactionReceipt(wagmiConfig, { hash });
      return hash;
    },
    onSuccess: () => {
      // Invalidate and refetch relevant queries after successful purchase
      queryClient.invalidateQueries({ queryKey: ['preSaleConfig', chainId] });
      queryClient.invalidateQueries({ queryKey: ['balance'] });
      queryClient.invalidateQueries({ queryKey: ['ganderBalance'] });
    },
  });
}
