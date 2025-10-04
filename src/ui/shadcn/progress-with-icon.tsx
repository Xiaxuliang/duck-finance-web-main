'use client';

import * as React from 'react';
import Image from 'next/image';
import bowl from '@/ui/buy/assets/bowl.png';

interface ProgressWithIconProps {
  value?: number;
  className?: string;
}

function ProgressWithIcon({ value = 0, className = '' }: ProgressWithIconProps) {
  return (
    <div
      className={`bg-primary/20 relative h-[20px] w-full overflow-visible rounded-full ${className}`}
    >
      <div
        className="h-[20px] rounded-full bg-gradient-to-r from-[#EE8721] to-[#D3361E] transition-all duration-300"
        style={{ width: `${value}%` }}
      />
      <div
        className="absolute -top-[22px] size-16 transition-all duration-300"
        style={{
          left: `${value}%`,
          transform: 'translate(-50%, -2%)',
        }}
      >
        <Image
          src={bowl}
          alt="progress indicator"
          width={64}
          height={64}
          className="size-full scale-x-[-1] rotate-[13deg]"
        />
      </div>
    </div>
  );
}

export { ProgressWithIcon };
