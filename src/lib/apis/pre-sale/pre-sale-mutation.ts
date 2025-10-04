import { writeContract } from '@wagmi/core';
import { parseEther } from 'viem';
import { preSaleAddress } from '@/configs/core/pre-sale';
import { preSaleAbi } from '@/lib/abis/pre-sale';
import { wagmiConfig } from '@/lib/utils/wagmi';

type PurchaseTokenParams = {
  ethAmount: string;
};

export async function purchaseToken({ ethAmount }: PurchaseTokenParams): Promise<`0x${string}`> {
  const ethAmountWei = parseEther(ethAmount);

  const hash = await writeContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'purchaseToken',
    value: ethAmountWei,
  });

  return hash;
}
