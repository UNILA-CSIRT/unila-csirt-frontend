import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`transition-colors cursor-pointer ${
        isActive 
          ? 'text-primary-teal font-medium' 
          : 'text-text-white hover:text-primary-teal'
      } ${className}`}
    >
      {children}
    </Link>
  );
} 