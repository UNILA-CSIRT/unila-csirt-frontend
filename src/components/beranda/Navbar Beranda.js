'use client';

import { useState } from 'react';
import NavLogo from '../navbar/NavLogo';
import NavLink from '../navbar/NavLink';
import DropdownButton from '../navbar/DropdownButton';
import MobileMenuToggle from '../navbar/MobileMenuToggle';
import MobileMenu from '../navbar/MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-primary-dark"> 
      <nav className="bg-primary-dark relative z-10">
        <div className="px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <NavLogo />

            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/">Beranda</NavLink>
              <DropdownButton>Profil</DropdownButton>
              <DropdownButton>RFC 2350</DropdownButton>
              <NavLink href="/layanan">Layanan</NavLink>
              <NavLink href="/panduan">Panduan</NavLink>
              <NavLink href="/laporan-insiden">Laporan Insiden</NavLink>
              <NavLink href="/kontak">Kontak Kami</NavLink>
            </div>

            <MobileMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </nav>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div 
        className="w-full h-12 bg-primary-dark -mt-1"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)'
        }}
      ></div>
    </div>
  );
}