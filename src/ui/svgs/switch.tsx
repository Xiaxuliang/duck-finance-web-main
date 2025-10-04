import type { ComponentProps, FC } from 'react';

export const Switch: FC<ComponentProps<'svg'>> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.45 6.71997L6.72998 3L3.01001 6.71997"
        stroke="#B6651F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.72998 21V3"
        stroke="#B6651F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.55 17.28L17.2701 21L20.9901 17.28"
        stroke="#B6651F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.27 3V21"
        stroke="#B6651F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
