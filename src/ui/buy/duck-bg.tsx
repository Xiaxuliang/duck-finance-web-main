import type { ComponentProps, FC } from 'react';
import buyBg from './assets/buy-bg.jpg';

export const DuckBg: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className="pointer-events-none fixed inset-0 top-[3vh] h-[97vh] w-[100vw]"
      style={{
        backgroundImage: `url(${buyBg.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};
