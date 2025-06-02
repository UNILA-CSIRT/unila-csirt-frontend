export default function DropdownButton({ children }) {
  return (
    <div className="relative group">
      <button className="text-text-white hover:text-primary-teal transition-colors flex items-center cursor-pointer">
        {children}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
} 