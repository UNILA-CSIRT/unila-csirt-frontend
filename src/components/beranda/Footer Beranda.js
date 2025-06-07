import Image from 'next/image';

export default function Footer() {
  return (
    // Kontainer utama, padding atas (pt-24) memberi ruang untuk efek miring.
    <footer className="relative mt-auto text-text-white pt-24 pb-8 px-6">
      
      {/* Background miring, diposisikan absolut di belakang konten. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'var(--primary-dark)',
          clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 100%)'
        }}
      ></div>

      {/* Konten, diposisikan relatif dengan z-10 agar selalu di DEPAN background. */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Nama Tim */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">Copyright © 2025</p>
            <p className="text-sm font-medium">UNILA-CSIRT TEAM</p>
          </div>

          {/* Grup Logo */}
          <div className="flex items-center space-x-6">
            <Image 
              src="/images/Logo_UnivLampung.png" 
              alt="Universitas Lampung Logo" 
              width={70} 
              height={70}
              className="object-contain"
            />
            <Image 
              src="/images/Logo CSIRT (4) 1.png" 
              alt="CSIRT Logo" 
              width={85} 
              height={85}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}