import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavLink({ href, children, className = "", onClick }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPath = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
  
  const isActive = currentPath === href || (href.includes('/') && currentPath.startsWith(href.split('?')[0]) && href.split('?')[0] !== '/');

  return (
    <Link 
      href={href} 
      className={`transition-colors cursor-pointer ${
        isActive 
          ? 'text-primary-teal font-medium' 
          : 'text-text-white hover:text-primary-teal'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}