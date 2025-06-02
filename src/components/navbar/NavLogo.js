import Image from 'next/image';

export default function NavLogo() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <Image 
        src="/images/Logo CSIRT (4) 1.png" 
        alt="CSIRT Logo" 
        width={60} 
        height={60}
        className="object-contain sm:w-[75px] sm:h-[75px]"
      />
      <div className="text-text-white">
        <div className="font-bold text-sm sm:text-lg">CSIRT UNILA</div>
        <div className="text-xs text-gray-300 hidden lg:block">COMPUTER SECURITY INCIDENT TEAM</div>
      </div>
    </div>
  );
} 