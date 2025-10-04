import type { Address } from 'viem';
import { environment, Environment } from '../environments';

export const alphaToken: Address = {
  // TODO: production
  [Environment.Production]: '0x1d9F27451Ce0113Bd1AB06A80df6cd589fB95703' as Address,
  [Environment.Development]: '0x1d9F27451Ce0113Bd1AB06A80df6cd589fB95703' as Address,
}[environment];
