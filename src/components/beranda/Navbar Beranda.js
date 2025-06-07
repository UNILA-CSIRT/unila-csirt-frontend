'use client';

import { useState, useEffect } from 'react';
import NavLogo from '../navbar/NavLogo';
import NavLink from '../navbar/NavLink';
import DropdownButton from '../navbar/DropdownButton';
import MobileMenuToggle from '../navbar/MobileMenuToggle';
import MobileMenu from '../navbar/MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const profilLinks = [
    { label: 'Definisi CSIRT', href: '/profil?page=definisi-csirt' },
    { label: 'Visi & Misi', href: '/profil?page=visi-misi' },
    { label: 'Definisi Logo', href: '/profil?page=definisi-logo' },
  ];

  const rfc2350Links = [
    { label: 'Informasi Dokumen', href: '/rfc2350?page=informasi-dokumen' },
    { label: 'Dasar Hukum', href: '/rfc2350?page=dasar-hukum' },
    { label: 'Kebijakan CSIRT', href: '/rfc2350?page=kebijakan-csirt' },
  ];

  const handleDropdownToggle = (dropdownTitle) => {
    setOpenDropdown(prevOpenDropdown =>
      prevOpenDropdown === dropdownTitle ? null : dropdownTitle
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target && !event.target.closest('.navbar-nav') && !event.target.closest('.mobile-menu-toggle')) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-primary-dark"> 
      <nav className="bg-primary-dark relative z-10">
        <div className="px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <NavLogo />
            <div className="hidden lg:flex items-center space-x-8 navbar-nav">
              <NavLink href="/" onClick={() => setOpenDropdown(null)}>Beranda</NavLink>
              
              <DropdownButton
                title="Profil"
                children={profilLinks}
                isMobile={false}
                isOpen={openDropdown === "Profil"}
                onToggle={() => handleDropdownToggle("Profil")}
                setOpenDropdown={setOpenDropdown}
              />
              
              <DropdownButton
                title="RFC 2350"
                children={rfc2350Links}
                isMobile={false}
                isOpen={openDropdown === "RFC 2350"}
                onToggle={() => handleDropdownToggle("RFC 2350")}
                setOpenDropdown={setOpenDropdown}
              />
              
              <NavLink href="/layanan" onClick={() => setOpenDropdown(null)}>Layanan</NavLink>
              <NavLink href="/panduan" onClick={() => setOpenDropdown(null)}>Panduan</NavLink>
              <NavLink href="/laporan-insiden" onClick={() => setOpenDropdown(null)}>Laporan Insiden</NavLink>
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
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