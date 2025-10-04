import type { Chain } from 'viem';
import { bsc, bscTestnet } from 'viem/chains';
import { Environment, environment } from './environments';

export enum ChainId {
  bsc = 56,
  bscTestnet = 97,
}

export const supportedChainIds = {
  [Environment.Production]: [ChainId.bsc],
  [Environment.Development]: [ChainId.bscTestnet],
}[environment];

export const chains: Record<ChainId, Chain> = {
  [ChainId.bsc]: bsc,
  [ChainId.bscTestnet]: bscTestnet,
};
