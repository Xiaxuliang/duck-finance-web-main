'use client';

import { skipToken } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { type ComponentProps, type FC, useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { toast } from 'sonner';
import { usePurchaseToken } from '@/lib/hooks/pre-sale';
import {
  useCalculateSaleQuote,
  useCheckWhitelist,
  useGanderBalance,
  usePreSaleConfig,
  useSaleStatus,
  useTokenSaleProgress,
  useTotalAmount,
  useUserBought,
  useWhitelistCap,
} from '@/lib/hooks/pre-sale/pre-sale-query';
import { useBalance } from '@/lib/hooks/tokens';
import { accountAtom, chainIdAtom } from '@/lib/states/evm';
import { cn } from '@/lib/utils/shadcn';
import { Input } from '../shadcn/input';
import { ProgressWithIcon } from '../shadcn/progress-with-icon';
import { Switch } from '../svgs/switch';
import { BuyFooter } from './buy-footer';
import { DuckBg } from './duck-bg';
import { createPurchaseSchema } from './utils/create-purchase-secheam';

export const Buy: FC<ComponentProps<'div'>> = ({ ...props }) => {
  const [amountText, setAmountText] = useState('');
  const [debouncedAmount, setDebouncedAmount] = useState('');
  const [validationError, setValidationError] = useState<string>('');

  const { data: estimatedAmount } = useCalculateSaleQuote(debouncedAmount);
  const { data: isWhitelist } = useCheckWhitelist();
  const { data: userBought } = useUserBought();
  // const { data: soldTokenAmount } = useSoldTokenAmount();
  const { isStart, saleEndTimestamp, saleStartTimestamp } = useSaleStatus();
  const { data: tokenSaleProgress } = useTokenSaleProgress();
  const { data: totalAmount } = useTotalAmount();
  const { data: whitelistCap } = useWhitelistCap();

  const account = useAtomValue(accountAtom);
  const chainId = useAtomValue(chainIdAtom);

  const { data: bnbBalance } = useBalance(
    account && chainId ? { chainId, account, address: null } : skipToken,
  );

  const { data: preSaleConfig } = usePreSaleConfig();
  const purchaseMutation = usePurchaseToken();

  const { data: ganderBalance } = useGanderBalance(account, preSaleConfig?.ganderTokenAddress);

  const minAmount = preSaleConfig?.minAmount ? parseFloat(preSaleConfig.minAmount) : 0;
  const maxAmount = preSaleConfig?.maxAmount ? parseFloat(preSaleConfig.maxAmount) : Infinity;
  const bnbBalanceNum = bnbBalance ? parseFloat(bnbBalance) : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAmount(validationError != null ? '' : amountText);
    }, 200);
    return () => clearTimeout(timer);
  }, [amountText, validationError]);

  const validateInput = (value: string) => {
    if (value === '') {
      setValidationError('');
      return;
    }

    const purchaseSchema = createPurchaseSchema(minAmount, maxAmount, bnbBalanceNum);
    const validation = purchaseSchema.safeParse({ amount: value });

    if (!validation.success) {
      setValidationError(validation.error.errors[0].message);
    } else {
      setValidationError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmountText(value);
      validateInput(value);
    }
  };

  const handlePurchase = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!account) {
      toast.error('Please connect your wallet first');
      return;
    }

    const purchaseSchema = createPurchaseSchema(minAmount, maxAmount, bnbBalanceNum);
    const validation = purchaseSchema.safeParse({ amount: amountText });

    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    try {
      await purchaseMutation.mutateAsync({ ethAmount: amountText });
      toast.success('Purchase successful!');
      setAmountText('');
      setValidationError('');
    } catch {
      toast.error('Purchase failed. Please try again.');
    }
  };

  return (
    <div
      className="relative flex h-full w-full flex-col items-center overflow-y-auto bg-[#fdedcc]"
      {...props}
    >
      <div className="z-50 mt-[2.65vh] mb-[2.65vh] flex w-[90vw] min-w-[22.22vw] flex-col gap-[1.77vh] lg:max-w-[36.11vw]">
        <h3 className="text-xl font-extrabold text-[#B6651F] sm:text-[1.67vw]">
          Purchase Gander🥞
        </h3>

        <header className="flex flex-col gap-[1.11vh] rounded-[1.39vw] bg-[#FDF6ED80] px-[4vw] py-[1.11vh] sm:px-[1.67vw]">
          <div className="flex flex-col gap-[0.22vh]">
            <div className="flex justify-between">
              <span className="text-sm font-bold text-[#B6651F] sm:text-[1.11vw]">Price</span>
              <span className="text-sm font-semibold text-[#CC8947] sm:text-[1.11vw]">
                1 Gander ={' '}
                {preSaleConfig?.publicPrice
                  ? `${parseFloat(preSaleConfig.publicPrice).toFixed(2)} BNB`
                  : '--'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-bold text-[#B6651F] sm:text-[1.11vw]">
                Whitelist Price
              </span>
              <span className="text-sm font-semibold text-[#CC8947] sm:text-[1.11vw]">
                1 Gander ={' '}
                {preSaleConfig?.whitelistPrice
                  ? `${parseFloat(preSaleConfig.whitelistPrice).toFixed(2)} BNB`
                  : '--'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-bold text-[#B6651F] sm:text-[1.11vw]">
                Total Amount
              </span>
              <span className="text-sm font-semibold text-[#CC8947] sm:text-[1.11vw]">
                {totalAmount ? `${parseFloat(totalAmount).toFixed(0)} Gander` : '--'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-bold text-[#B6651F] sm:text-[1.11vw]">
                Whitelist Cap
              </span>
              <span className="text-sm font-semibold text-[#CC8947] sm:text-[1.11vw]">
                {whitelistCap ? `${parseFloat(whitelistCap).toFixed(0)} Gander` : '--'}
              </span>
            </div>
          </div>

          <section className="flex flex-col text-sm font-bold text-[#EE8721] sm:text-[0.97vw]">
            <div className="flex justify-between">
              <span>Minimum Buy</span>
              <span className="text-xs font-semibold text-[#CC8947] sm:text-[0.83vw]">
                {preSaleConfig?.minAmount
                  ? `${parseFloat(preSaleConfig.minAmount).toFixed(2)} BNB`
                  : '--'}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Maximum Buy</span>
              <span className="text-xs font-semibold text-[#CC8947] sm:text-[0.83vw]">
                {preSaleConfig?.maxAmount
                  ? `${parseFloat(preSaleConfig.maxAmount).toFixed(2)} BNB`
                  : '--'}
              </span>
            </div>
          </section>
        </header>

        <section className="rounded-[1.39vw] bg-[#FDF6ED80] px-[4vw] py-[1.11vh] sm:px-[1.67vw]">
          <header className="flex justify-between font-bold">
            <h3 className="text-sm sm:text-[0.97vw]">Building Campaign Process</h3>
            <span className="text-sm font-bold text-[#B6651F] sm:text-[1.11vw]">
              {tokenSaleProgress}%
            </span>
          </header>
          <ProgressWithIcon value={tokenSaleProgress} />
        </section>

        <main className="flex flex-col gap-[0.44vh] rounded-[1.39vw] bg-[#FDF6ED80] px-[4vw] py-[1.33vh] backdrop-blur-md sm:px-[2.22vw]">
          <header className="flex items-center justify-end">
            <span
              className={cn(
                'text-sm font-bold sm:text-[0.97vw]',
                isWhitelist ? 'text-[#6CAE32]' : 'text-red-600',
              )}
            >
              {isWhitelist ? 'Whitelisted' : 'Not in whitelist'}
            </span>
          </header>

          <div className="flex items-center justify-between text-center text-xs font-medium sm:text-[0.83vw]">
            <div>
              <h3 className="text-[#B6B6B6]">Your Purchase</h3>
              <span className="font-bold">{userBought}</span>
            </div>

            {/* <div>
              <h3 className="text-[#B6B6B6]">Collected Tokens</h3>
              <span className="font-bold">{soldTokenAmount}</span>
            </div> */}

            <div>
              <h3 className="text-[#B6B6B6]">Countdown</h3>
              <span className="font-bold text-[#EE8721]">
                {saleEndTimestamp != null && saleStartTimestamp != null && (
                  <Countdown date={isStart ? saleEndTimestamp : saleStartTimestamp} daysInHours />
                )}
              </span>
            </div>
          </div>

          <form className="flex flex-col gap-[0.44vh]">
            <div className="flex flex-col gap-[0.66vh] rounded-[1.39vw] bg-[#E6C086] px-[1.11vw] py-[1.11vh]">
              <span className="text-base font-bold text-[#B6651F] sm:text-[1.11vw]">BNB</span>
              <div className="flex flex-col gap-[0.22vh]">
                <div className="flex items-center gap-[0.28vw]">
                  <Input
                    variant="unstyled"
                    className={cn(
                      'bg-transparent text-base font-bold text-[#F5E7D1] outline-none placeholder:font-bold placeholder:text-[#F5E7D1] sm:text-[1.11vw]',
                      account == null && 'placeholder:text-red-600',
                    )}
                    placeholder={account != null ? '0.0' : 'Please connect your wallet'}
                    value={amountText}
                    onChange={handleInputChange}
                    disabled={account == null}
                  />
                  <span className="text-xs font-medium text-nowrap text-[#B6651F] sm:text-[0.83vw]">
                    balance: {bnbBalance ? `${parseFloat(bnbBalance).toFixed(2)} BNB` : '--'}
                  </span>
                </div>
              </div>
            </div>

            <Switch className="mx-auto" />

            <div className="flex flex-col gap-[0.66vh] rounded-[1.39vw] bg-[#E6C086] px-[1.11vw] py-[1.11vh]">
              <span className="text-base font-bold text-[#B6651F] sm:text-[1.11vw]">Gander</span>
              <div className="flex items-center gap-[0.28vw]">
                <Input
                  variant="unstyled"
                  className="bg-transparent text-base font-bold text-[#F5E7D1] outline-none placeholder:font-bold placeholder:text-[#F5E7D1] sm:text-[1.11vw]"
                  placeholder="0.0"
                  value={estimatedAmount || ''}
                  disabled
                />
                <span className="text-xs font-medium text-nowrap text-[#B6651F] sm:text-[0.83vw]">
                  balance: {ganderBalance ? `${parseFloat(ganderBalance).toFixed(2)} Gander` : '--'}
                </span>
              </div>
            </div>

            <button
              className={cn(
                'mt-[0.88vh] w-full cursor-pointer rounded-[6.25vw] bg-[#B6651F] py-[1.11vh] text-base font-bold text-[#FFEDBB] disabled:cursor-not-allowed disabled:opacity-50 sm:text-[1.25vw]',
                validationError && 'bg-red-700 disabled:opacity-100',
              )}
              onClick={handlePurchase}
              disabled={
                purchaseMutation.isPending ||
                !account ||
                !amountText ||
                amountText === '0' ||
                !!validationError
              }
              type="button"
            >
              {validationError ? (
                <span className="">{validationError}</span>
              ) : purchaseMutation.isPending ? (
                'Processing...'
              ) : (
                'Buy Gander NOW!'
              )}
            </button>
          </form>
        </main>
      </div>
      <DuckBg />
      <BuyFooter />
    </div>
  );
};
