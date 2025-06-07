'use client';

import NavLink from './NavLink';
import DropdownButton from './DropdownButton';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, openDropdown, setOpenDropdown }) {
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

  const handleMobileDropdownToggle = (dropdownTitle) => {
    setOpenDropdown(prevOpenDropdown =>
      prevOpenDropdown === dropdownTitle ? null : dropdownTitle
    );
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50"
          onClick={() => {
            setIsMenuOpen(false);
            setOpenDropdown(null);
          }}
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-primary-dark z-50 transform transition-transform duration-300 ease-in-out lg:hidden mobile-menu ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setOpenDropdown(null);
              }}
              className="text-text-white hover:text-primary-teal transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <NavLink
              href="/"
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}
            >
              Beranda
            </NavLink>

            <DropdownButton
              title="Profil"
              children={profilLinks}
              isMobile={true}
              setIsMenuOpen={setIsMenuOpen}
              setOpenDropdown={setOpenDropdown}
              isOpen={openDropdown === "Profil"}
              onToggle={() => handleMobileDropdownToggle("Profil")}
            />

            <DropdownButton
              title="RFC 2350"
              children={rfc2350Links}
              isMobile={true}
              setIsMenuOpen={setIsMenuOpen}
              setOpenDropdown={setOpenDropdown}
              isOpen={openDropdown === "RFC 2350"}
              onToggle={() => handleMobileDropdownToggle("RFC 2350")}
            />

            <NavLink
              href="/layanan"
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}
            >
              Layanan
            </NavLink>

            <NavLink
              href="/panduan"
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}
            >
              Panduan
            </NavLink>

            <NavLink
              href="/laporan-insiden"
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}
            >
              Laporan Insiden
            </NavLink>

            <NavLink
              href="/kontak"
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}
            >
              Kontak Kami
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}