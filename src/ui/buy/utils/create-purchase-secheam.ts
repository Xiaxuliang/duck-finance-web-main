import { z } from 'zod';

export const createPurchaseSchema = (
  minAmount: number,
  maxAmount: number,
  bnbBalance: number | null,
) => {
  return z.object({
    amount: z
      .string()
      .regex(/^\d*\.?\d*$/, 'Only numbers allowed')
      .refine(val => val !== '' && val !== '0', 'Please enter a valid amount')
      .refine(val => !isNaN(parseFloat(val)), 'Invalid number')
      .refine(
        val => parseFloat(val) >= minAmount,
        `Minimum purchase amount is ${minAmount.toFixed(2)} BNB`,
      )
      .refine(
        val => parseFloat(val) <= maxAmount,
        `Maximum purchase amount is ${maxAmount.toFixed(2)} BNB`,
      )
      .refine(
        val => bnbBalance == null || parseFloat(val) <= bnbBalance,
        'Insufficient BNB balance',
      ),
  });
};
