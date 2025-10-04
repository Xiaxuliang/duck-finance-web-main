import type { Address } from 'viem';
import { environment, Environment } from '../environments';

export const preSaleAddress: Address = {
  // TODO: production
  [Environment.Production]: '0x09f9F1463081CFDa44A5d7B50B547A3437061680' as Address,
  [Environment.Development]: '0x09f9F1463081CFDa44A5d7B50B547A3437061680' as Address,
}[environment];
