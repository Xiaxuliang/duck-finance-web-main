import { Roboto_Mono as FontMono } from 'next/font/google';
import { Montserrat as FontSans } from 'next/font/google';
import { cn } from './shadcn';

const fontSans = FontSans({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' });

export const fontsClassName = cn(fontSans.variable, fontMono.variable);
