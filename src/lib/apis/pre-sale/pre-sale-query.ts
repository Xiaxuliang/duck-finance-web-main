import { readContract, readContracts } from '@wagmi/core';
import { formatEther, parseEther } from 'viem';
import { preSaleAddress } from '@/configs/core/pre-sale';
import { preSaleAbi } from '@/lib/abis/pre-sale';
import { wagmiConfig } from '@/lib/utils/wagmi';
import type { WithAccountParams } from '@/types';

type CalculateSaleQuoteParams = {
  ethAmount: string;
};

export async function calculateSaleQuote({ ethAmount }: CalculateSaleQuoteParams): Promise<bigint> {
  const ethAmountWei = parseEther(ethAmount || '0');

  const result = await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'calculateSaleQuote',
    args: [ethAmountWei],
  });

  return result;
}

export type PreSaleConfig = {
  minAmount: string;
  maxAmount: string;
  publicPrice: string;
  whitelistPrice: string;
  ganderTokenAddress: `0x${string}`;
};

export async function getPreSaleConfig(): Promise<PreSaleConfig> {
  const contracts = [
    {
      address: preSaleAddress,
      abi: preSaleAbi,
      functionName: 'minAmount' as const,
    },
    {
      address: preSaleAddress,
      abi: preSaleAbi,
      functionName: 'maxAmount' as const,
    },
    {
      address: preSaleAddress,
      abi: preSaleAbi,
      functionName: 'publicPrice' as const,
    },
    {
      address: preSaleAddress,
      abi: preSaleAbi,
      functionName: 'whitelistPrice' as const,
    },
    {
      address: preSaleAddress,
      abi: preSaleAbi,
      functionName: 'alphaGander' as const,
    },
  ];

  const results = await readContracts(wagmiConfig, { contracts });

  return {
    minAmount: results[0].result ? formatEther(results[0].result as bigint) : '0',
    maxAmount: results[1].result ? formatEther(results[1].result as bigint) : '0',
    publicPrice: results[2].result ? formatEther(results[2].result as bigint) : '0',
    whitelistPrice: results[3].result ? formatEther(results[3].result as bigint) : '0',
    ganderTokenAddress: results[4].result as `0x${string}`,
  };
}

export async function checkWhitelist(params: WithAccountParams) {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'whitelist',
    args: [params.account],
  });
}

export async function getUserBought(params: WithAccountParams) {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'boughtETH',
    args: [params.account],
  });
}

export async function getSoldTokenAmount() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'soldAmount',
  });
}

export async function getSaleStartTimestamp() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'startTimestamp',
  });
}

export async function getSaleEndTimestamp() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'endTimestamp',
  });
}

export async function getSaleIsStart() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'saleStatus',
  });
}

export async function getTotalSupply() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'totalAmount',
  });
}

export async function getWhitelistCap() {
  return await readContract(wagmiConfig, {
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName: 'whitelistCap',
  });
}
