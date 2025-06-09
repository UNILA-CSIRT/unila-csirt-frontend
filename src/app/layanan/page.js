'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/service/ServiceCard'; 
import Image from 'next/image';

export default function LayananPage() {
  const services = [
    {
      id: 1,
      title: 'Layanan Proaktif', 
      subtitle: '(Proactive Services)', 
      description:
        'Layanan ini bertujuan untuk mencegah insiden keamanan sebelum terjadi. Unila-CSIRT memiliki beberapa layanan proaktif:', 
      icon: '/images/proactive.png', 
      points: [
        'Risk Analysis (Analisis Risiko): Mengidentifikasi dan mengevaluasi potensi ancaman terhadap sistem IT.',
        'Security Audits (Audit Keamanan): Meninjau sistem dan kebijakan keamanan organisasi untuk menemukan kelemahan.',
      ],
    },
    {
      id: 2,
      title: 'Layanan Reaktif',
      subtitle: '(Reactive Services)',
      description:
        'Layanan ini berfokus pada deteksi, analisis, dan respons terhadap insiden keamanan yang telah terjadi. Unila-CSIRT memiliki beberapa layanan Reaktif:',
      icon: '/images/reactive.png',
      points: [
        'Incident Handling & Response (Penanganan & Respons Insiden): Menanggapi insiden keamanan untuk mengurangi dampak serangan.',
        'Forensic Analysis (Analisis Forensik): Menyelidiki insiden untuk mengidentifikasi penyebab dan pelaku serangan.',
        'Malware Analysis: Menganalisis malware untuk memahami dampaknya dan cara mengatasinya.',
        'Containment & Mitigation: Mengisolasi sistem yang terinfeksi dan memulihkan operasional secepat mungkin.',
        'Incident Notification & Reporting: Memberikan laporan kepada pihak terkait tentang insiden keamanan.',
      ],
    },
    {
      id: 3,
      title: 'Pengelolaan Keamanan Siber',
      subtitle: '(Security Management Services)',
      description:
        'Layanan ini bertujuan untuk meningkatkan postur keamanan organisasi secara keseluruhan. Unila-CSIRT memiliki beberapa layanan Pengelolaan Keamanan Siber:',
      icon: '/images/management.png',
      points: [
        'Security Policy Development (Pengembangan Kebijakan Keamanan): Membantu organisasi merancang dan memperbarui kebijakan keamanan siber.',
        'Vulnerability Management (Manajemen Kerentanan): Mengidentifikasi, mengevaluasi, dan menangani kerentanan dalam sistem IT.',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-1 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mengurangi ukuran font judul utama */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-10 sm:mb-12 md:mb-16 text-center">
            LAYANAN CSIRT UNILA
          </h1>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}