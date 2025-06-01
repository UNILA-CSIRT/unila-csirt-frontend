'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <div className="relative">
      <nav className="bg-primary-dark relative z-10">
        <div className="px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image 
                src="/images/Logo CSIRT (4) 1.png" 
                alt="CSIRT Logo" 
                width={60} 
                height={60}
                className="object-contain sm:w-[75px] sm:h-[75px]"
              />
              <div className="text-text-white">
                <div className="font-bold text-sm sm:text-lg">CSIRT UNILA</div>
                <div className="text-xs text-gray-300 hidden lg:block">COMPUTER SECURITY INCIDENT TEAM</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`transition-colors cursor-pointer ${
                  isActive('/') 
                    ? 'text-primary-teal font-medium' 
                    : 'text-text-white hover:text-primary-teal'
                }`}
              >
                Beranda
              </Link>
              
              <div className="relative group">
                <button className="text-text-white hover:text-primary-teal transition-colors flex items-center cursor-pointer">
                  Profil
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-text-white hover:text-primary-teal transition-colors flex items-center cursor-pointer">
                  RFC 2350
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link 
                href="/layanan" 
                className={`transition-colors cursor-pointer ${
                  isActive('/layanan') 
                    ? 'text-primary-teal font-medium' 
                    : 'text-text-white hover:text-primary-teal'
                }`}
              >
                Layanan
              </Link>

              <Link 
                href="/panduan" 
                className={`transition-colors cursor-pointer ${
                  isActive('/panduan') 
                    ? 'text-primary-teal font-medium' 
                    : 'text-text-white hover:text-primary-teal'
                }`}
              >
                Panduan
              </Link>

              <Link 
                href="/laporan-insiden" 
                className={`transition-colors cursor-pointer ${
                  isActive('/laporan-insiden') 
                    ? 'text-primary-teal font-medium' 
                    : 'text-text-white hover:text-primary-teal'
                }`}
              >
                Laporan Insiden
              </Link>

              <Link 
                href="/kontak" 
                className={`transition-colors cursor-pointer ${
                  isActive('/kontak') 
                    ? 'text-primary-teal font-medium' 
                    : 'text-text-white hover:text-primary-teal'
                }`}
              >
                Kontak Kami
              </Link>
            </div>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-white cursor-pointer hover:text-primary-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-primary-dark z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-text-white hover:text-primary-teal transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <Link 
              href="/" 
              className={`block py-3 text-lg transition-colors cursor-pointer ${
                isActive('/') 
                  ? 'text-primary-teal font-medium border-l-4 border-primary-teal pl-4' 
                  : 'text-text-white hover:text-primary-teal hover:pl-4 hover:border-l-4 hover:border-primary-teal'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            
            <div className="py-3">
              <button className="text-text-white hover:text-primary-teal transition-colors flex items-center text-lg cursor-pointer">
                Profil
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="py-3">
              <button className="text-text-white hover:text-primary-teal transition-colors flex items-center text-lg cursor-pointer">
                RFC 2350
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <Link 
              href="/layanan" 
              className={`block py-3 text-lg transition-colors cursor-pointer ${
                isActive('/layanan') 
                  ? 'text-primary-teal font-medium border-l-4 border-primary-teal pl-4' 
                  : 'text-text-white hover:text-primary-teal hover:pl-4 hover:border-l-4 hover:border-primary-teal'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            
            <Link 
              href="/panduan" 
              className={`block py-3 text-lg transition-colors cursor-pointer ${
                isActive('/panduan') 
                  ? 'text-primary-teal font-medium border-l-4 border-primary-teal pl-4' 
                  : 'text-text-white hover:text-primary-teal hover:pl-4 hover:border-l-4 hover:border-primary-teal'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Panduan
            </Link>
            
            <Link 
              href="/laporan-insiden" 
              className={`block py-3 text-lg transition-colors cursor-pointer ${
                isActive('/laporan-insiden') 
                  ? 'text-primary-teal font-medium border-l-4 border-primary-teal pl-4' 
                  : 'text-text-white hover:text-primary-teal hover:pl-4 hover:border-l-4 hover:border-primary-teal'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Laporan Insiden
            </Link>
            
            <Link 
              href="/kontak" 
              className={`block py-3 text-lg transition-colors cursor-pointer ${
                isActive('/kontak') 
                  ? 'text-primary-teal font-medium border-l-4 border-primary-teal pl-4' 
                  : 'text-text-white hover:text-primary-teal hover:pl-4 hover:border-l-4 hover:border-primary-teal'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak Kami
            </Link>
          </div>
        </div>
      </div>

      <div 
        className="w-full h-12 bg-primary-dark -mt-1"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)'
        }}
      ></div>
    </div>
  );
} 