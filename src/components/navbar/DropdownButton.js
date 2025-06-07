'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function DropdownButton({ title, children, isMobile = false, setIsMenuOpen = () => {}, isOpen, onToggle }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    onToggle();
  };

  const closeDropdown = () => {
    if (!isMobile) {
      onToggle(false);
    }
  };

  const isChildActive = () => {
    if (!children) return false;
    const currentPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return children.some(item => item.href === currentPath);
  };

  const isDropdownActive = isChildActive() || isOpen;

  const mobileLinkClasses = `block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4 pl-6`;
  const desktopLinkClasses = `block py-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 pl-4`;

  return (
    <div
      className={`relative ${isMobile ? 'py-3' : ''}`}
      onMouseLeave={isMobile ? null : closeDropdown}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center transition-colors cursor-pointer ${isMobile ? 'text-lg' : ''} ${
          isDropdownActive
            ? 'text-[#1DBBB7] font-medium'
            : 'text-text-white hover:text-[#1DBBB7]'
        }`}
      >
        {title}
        <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${isMobile ? 'relative top-0 left-0 w-full mt-2' : 'top-full left-0 mt-2 min-w-[180px]'}
                      ${isMobile ? 'bg-primary-light rounded-md shadow-inner py-2' : 'bg-white rounded-md shadow-lg py-2'}
                      z-50`}
        >
          {children && children.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                closeDropdown();
                if (isMobile) setIsMenuOpen(false);
              }}
              className={`${isMobile ? mobileLinkClasses : desktopLinkClasses} ${item.className || ''} ${pathname + searchParams.toString() === item.href ? 'text-[#1DBBB7] font-medium' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}