import Image from "next/image";

export default function DefinisiLogoContent() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="max-w-4xl w-full mb-0">
        <h1 className="text-3xl font-bold text-left text-gray-800">
          DEFINISI LOGO
        </h1>
      </div>

      <div className="relative w-40 h-40 md:w-65 md:h-65 -mt-8 bg-black rounded-2xl m-4">
        <Image
          src="/images/logo.png"
          alt="CSIRT Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <div className="max-w-4xl w-full bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Perisai</h2>
        <p className="mb-6 text-base text-gray-700 leading-relaxed text-justify">
          Simbol perisai melambangkan perlindungan dan keamanan. Ini
          mencerminkan peran utama CSIRT Universitas Lampung sebagai garda
          terdepan dalam melindungi sistem informasi dan data digital
          universitas dari berbagai ancaman siber.
        </p>

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Simbol Sirkuit dan Kunci
        </h2>
        <ul className="list-disc list-inside pl-4 mb-6 text-base text-gray-700 leading-relaxed space-y-2">
          <li>
            <span className="font-semibold">Sirkuit:</span> Mewakili
            konektivitas dan teknologi, menunjukkan bahwa CSIRT UNILA berperan
            dalam menjaga keamanan sistem yang saling terhubung.
          </li>
          <li>
            <span className="font-semibold">Kunci:</span> Melambangkan
            perlindungan dan privasi data, mencerminkan komitmen dalam menjaga
            kerahasiaan dan integritas informasi.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Warna Hijau</h2>
        <p className="mb-6 text-base text-gray-700 leading-relaxed text-justify">
          Melambangkan pertumbuhan, ketahanan, dan harapan. Warna ini
          merepresentasikan komitmen CSIRT UNILA untuk terus berkembang dan
          beradaptasi dalam menjaga keamanan siber.
        </p>

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Teks "CSIRT UNILA" dan "Computer Security Incident Team"
        </h2>
        <p className="mb-6 text-base text-gray-700 leading-relaxed text-justify">
          Menegaskan identitas dan fungsi utama tim dalam pengelolaan dan
          penanganan insiden keamanan siber di lingkungan Universitas Lampung.
        </p>

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Garis dan Titik di Bagian Bawah
        </h2>
        <p className="text-base text-gray-700 leading-relaxed text-justify">
          Melambangkan jaringan dan kompleksitas digital yang kompleks. Garis
          dan titik ini merepresentasikan bagaimana CSIRT UNILA menghubungkan
          berbagai sistem dan memastikan bahwa setiap bagian dari jaringan
          teknologi universitas tetap aman dan terlindungi dari ancaman.
        </p>
      </div>
    </div>
  );
}
