"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function DropdownButton({
  title,
  children,
  isMobile = false,
  setIsMenuOpen = () => {},
  isOpen,
  onToggle,
  setOpenDropdown,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    if (onToggle) onToggle();
  };

  const isChildActive = () => {
    const currentPath = `${pathname}${
      searchParams.toString() ? "?" + searchParams.toString() : ""
    }`;
    return children?.some((item) => {
      const hrefPath = item.href.split("?")[0];
      const currentPathBase = pathname.split("?")[0];
      return (
        item.href === currentPath ||
        (hrefPath !== "/" && currentPathBase.startsWith(hrefPath))
      );
    });
  };

  const isDropdownActive = isChildActive() || isOpen;

  const mobileLinkClasses = `block py-3 text-lg border-l-4 border-transparent hover:border-primary-teal hover:pl-4 pl-6 text-text-white`;
  const desktopLinkClasses = `block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900`;

  return (
    <div
      className={`relative ${isMobile ? "py-3" : ""}`}
      onMouseLeave={!isMobile ? () => setOpenDropdown?.(null) : null}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center transition-colors cursor-pointer ${
          isMobile ? "text-lg" : ""
        } ${
          isDropdownActive
            ? "text-[#1DBBB7] font-medium"
            : "text-text-white hover:text-[#1DBBB7]"
        }`}
      >
        {title}
        <svg
          className={`ml-2 w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isMobile
              ? "relative top-0 left-0 w-full mt-2"
              : "top-full left-0 mt-2 min-w-[180px]"
          }
            ${
              isMobile
                ? "bg-primary-light rounded-md shadow-inner py-2"
                : "bg-white rounded-md shadow-lg py-2 border border-gray-200"
            }
            z-50`}
        >
          {children.map((item, index) => (
            <Link
              key={item.href || index}
              href={item.href}
              onMouseDown={() => {
                if (onToggle) onToggle();
                if (isMobile) setIsMenuOpen(false);
                setOpenDropdown?.(null);
              }}
              className={`${
                isMobile ? mobileLinkClasses : desktopLinkClasses
              } ${item.className || ""} ${
                pathname +
                  (searchParams.toString()
                    ? "?" + searchParams.toString()
                    : "") ===
                  item.href ||
                (item.href.split("?")[0] !== "/" &&
                  pathname.startsWith(item.href.split("?")[0]))
                  ? "text-[#1DBBB7] font-medium"
                  : isMobile
                  ? "text-text-white"
                  : "text-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
