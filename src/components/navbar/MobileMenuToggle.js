export default function MobileMenuToggle({ isMenuOpen, setIsMenuOpen }) {
  return (
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
  );
} 