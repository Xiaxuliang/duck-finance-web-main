import type { ComponentProps, FC } from 'react';

export const Twitter: FC<ComponentProps<'svg'>> = props => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.82288 0.399902H0.202881L5.65505 7.66947L0.499848 13.5998H2.24887L6.46516 8.74956L10.1029 13.5999H14.7229L9.0414 6.02462L13.9309 0.399902H12.1819L8.23132 4.94452L4.82288 0.399902ZM10.7629 12.2799L2.84288 1.7199H4.16288L12.0829 12.2799H10.7629Z"
        fill="#B2641F"
      />
    </svg>
  );
};
