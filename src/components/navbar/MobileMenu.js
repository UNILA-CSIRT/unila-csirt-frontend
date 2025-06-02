import NavLink from './NavLink';
import DropdownButton from './DropdownButton';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
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
            <NavLink 
              href="/" 
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
            >
              Beranda
            </NavLink>
            
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
            
            <NavLink 
              href="/layanan" 
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </NavLink>
            
            <NavLink 
              href="/panduan" 
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Panduan
            </NavLink>
            
            <NavLink 
              href="/laporan-insiden" 
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Laporan Insiden
            </NavLink>
            
            <NavLink 
              href="/kontak" 
              className="block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak Kami
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
} 