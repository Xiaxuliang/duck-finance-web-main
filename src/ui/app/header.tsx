'use client';

import type { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { appName } from '@/configs/app';
import { cn } from '@/lib/utils/shadcn';
import { Logo } from '../svgs/logo';
import { Connect } from './connect';

export const Header: FC<ComponentProps<'div'>> = ({ ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleComingSoon = (feature: string) => {
    toast.info(`${feature} coming soon!`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn(
        'sticky z-[1000] flex h-[8.6vh] max-w-screen bg-[#CF8D49]',
        pathname === '/buy' && 'top-0',
      )}
      {...props}
    >
      <div className="container m-auto flex justify-between px-4 sm:px-8">
        <Link href={'/'} className="flex items-center justify-center gap-2">
          <Logo />
          <h1 className="text-lg font-bold text-[#FFEDBB] sm:text-2xl">{appName}</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-[60px] text-sm font-semibold text-[#FFEDBB] lg:flex">
          <Link
            href={'/'}
            className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('introduction')}
            className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
          >
            Introduction
          </button>
          <button
            onClick={() => scrollToSection('mechanics')}
            className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
          >
            Mechanics
          </button>
          <button
            onClick={() => handleComingSoon('Stake')}
            className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
          >
            Stake
          </button>
          <button
            onClick={() => handleComingSoon('Bond')}
            className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
          >
            Bond
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Connect />
          <button
            onClick={toggleMobileMenu}
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span
              className={cn(
                'block h-0.5 w-6 bg-[#FFEDBB] transition-all duration-300',
                isMobileMenuOpen && 'translate-y-1.5 rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-[#FFEDBB] transition-all duration-300',
                isMobileMenuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-[#FFEDBB] transition-all duration-300',
                isMobileMenuOpen && '-translate-y-1.5 -rotate-45',
              )}
            />
          </button>
        </div>

        {/* Desktop Connect Button */}
        <div className="hidden lg:block">
          <Connect />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-[100] border-t border-[#B6651F] bg-[#CF8D49] shadow-lg lg:hidden">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link
              href={'/'}
              className="flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-semibold text-[#FFEDBB] transition-opacity hover:opacity-80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                scrollToSection('introduction');
                setIsMobileMenuOpen(false);
              }}
              className="flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-semibold text-[#FFEDBB] transition-opacity hover:opacity-80"
            >
              Introduction
            </button>
            <button
              onClick={() => {
                scrollToSection('mechanics');
                setIsMobileMenuOpen(false);
              }}
              className="flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-semibold text-[#FFEDBB] transition-opacity hover:opacity-80"
            >
              Mechanics
            </button>
            <button
              onClick={() => {
                handleComingSoon('Stake');
                setIsMobileMenuOpen(false);
              }}
              className="flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-semibold text-[#FFEDBB] transition-opacity hover:opacity-80"
            >
              Stake
            </button>
            <button
              onClick={() => {
                handleComingSoon('Bond');
                setIsMobileMenuOpen(false);
              }}
              className="flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-semibold text-[#FFEDBB] transition-opacity hover:opacity-80"
            >
              Bond
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
