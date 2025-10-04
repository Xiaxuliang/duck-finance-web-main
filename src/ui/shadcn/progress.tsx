'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils/shadcn';
import Image from 'next/image';
import bowl from '@/ui/buy/assets/bowl.png';

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-[20px] w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="relative h-[20px] w-full flex-1 bg-gradient-to-r from-[#EE8721] to-[#D3361E] transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        <Image
          className="absolute right-0 z-[999] translate-y-10 bg-yellow-400"
          style={{ transform: `translateX(-${value || 0}%)` }}
          src={bowl.src}
          height={64}
          width={64}
          alt="bowl icon"
        />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
