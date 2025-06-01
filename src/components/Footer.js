import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative mt-auto">
      <div 
        className="w-full h-12 bg-primary-dark"
        style={{
          clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      ></div>
      
      <footer className="bg-primary-dark text-text-white -mt-1">
        <div className="py-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-left mb-6 md:mb-0">
                <p className="text-sm text-gray-300">Copyright © 2025</p>
                <p className="text-sm font-medium">UNILA-CSIRT TEAM</p>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center justify-center">
                  <Image 
                    src="/images/Logo_UnivLampung.png" 
                    alt="Universitas Lampung Logo" 
                    width={85} 
                    height={85}
                    className="object-contain"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Image 
                    src="/images/Logo CSIRT (4) 1.png" 
                    alt="CSIRT Logo" 
                    width={105} 
                    height={105}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 