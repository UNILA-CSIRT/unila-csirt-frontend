
import Image from 'next/image';

export default function DefinisiCsirtContent() {
    return (
        <div className="flex flex-col items-center bg-white min-h-screen w-full p-8"> 

            <div className="max-w-4xl w-full mb-4">
                <h1 className="text-3xl font-bold text-gray-800 text-left">
                    DEFINISI CSIRT
                </h1>
            </div>

            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
                <Image
                    src="/images/definisi.png" 
                    alt="CSIRT Illustration"
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>

            <div className="w-full max-w-4xl bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="mb-6 text-lg text-gray-700 leading-relaxed text-justify">
                    Computer Security Incident Response Team (CSIRT) Universitas Lampung adalah tim yang dibentuk untuk
                    menangani insiden keamanan siber di lingkungan Universitas Lampung. CSIRT bertugas menerima, meninjau,
                    dan merespons insiden yang berkaitan dengan keamanan sistem informasi dan teknologi di universitas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Tim ini berperan penting dalam mengidentifikasi, menganalisis, dan menyelesaikan insiden keamanan, serta
                    memastikan langkah mitigasi dilakukan untuk mencegah terulangnya insiden serupa di masa mendatang.
                    Dengan adanya CSIRT, Universitas Lampung berkomitmen untuk menjaga keamanan data dan sistem, serta
                    meningkatkan kesiapan dalam menghadapi berbagai ancaman siber.
                </p>
            </div>
        </div>
    );
}