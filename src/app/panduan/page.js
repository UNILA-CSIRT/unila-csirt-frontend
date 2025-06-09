
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import PaginationControls from '../../components/Pagination/PaginationControls';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Home() {
  const allGuides = [ 
    {
      id: 1,
      title: 'Panduan Penanganan Insiden Malware',
      image: '/images/malware_foto.png',
      downloadLink: '/download/Panduan-Malware.pdf', 
      alt: 'Gambar ilustrasi Panduan Insiden Malware'
    },
    {
      id: 2,
      title: 'Panduan Penanganan Insiden Ransom',
      image: '/images/ransomware_foto.png',
      downloadLink: '/download/Panduan-Ransomware.pdf',
      alt: 'Gambar ilustrasi Panduan Penanganan Insiden Ransom'
    },
    {
      id: 3,
      title: 'Panduan Penanganan Insiden Serangan Phishing',
      image: '/images/phising_foto.png',
      downloadLink: '/download/Panduan-Phising.pdf',
      alt: 'Gambar ilustrasi Panduan Penanganan Insiden Serangan Phishing'
    },
    {
      id: 4,
      title: 'Panduan Menghadapi Insiden Data Breach',
      image: '/images/breach_foto.png',
      downloadLink: '/download/Panduan-Data-Breach.pdf',
      alt: 'Gambar ilustrasi Pedoman Penanganan Insiden Data Breach'
    },
    {
      id: 5,
      title: 'Panduan Penanganan Insiden Serangan SQL Injection',
      image: '/images/sql_foto.png',
      downloadLink: '/download/Panduan-SQL-Injection.pdf',
      alt: 'Gambar ilustrasi Pedoman Penanganan Insiden Serangan SQL Injection'
    },
    {
      id: 6,
      title: 'Panduan Perbaikan dan Mitigasi Insiden Website Judi Online',
      image: '/images/judi_foto.png',
      downloadLink: '/download/Panduan-Judi-Online.pdf',
      alt: 'Gambar ilustrasi Pedoman Perbaikan dan Mitigasi Insiden Website Judi Online'
    },
  ];

  const guidesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const currentGuides = useMemo(() => {
    const startIndex = (currentPage - 1) * guidesPerPage;
    const endIndex = startIndex + guidesPerPage;
    return allGuides.slice(startIndex, endIndex);
  }, [currentPage, allGuides, guidesPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--primary-dark)] mb-8">
              Panduan Teknis Penanganan Insiden Siber
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow duration-300
                             flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center p-4">
                    <Image
                      src={guide.image}
                      alt={guide.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={true}
                    />
                  </div>
                  <div className="p-4 bg-white flex flex-col flex-grow justify-between">
                    <h3 className="text-md sm:text-lg font-semibold text-[var(--primary-dark)] mb-3">
                      {guide.title}
                    </h3>
                    <Link
                      href={guide.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center mt-auto btn-gradient text-[var(--text-white)] py-2.5 px-4 rounded-md text-sm sm:text-base hover:opacity-90 transition-opacity transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <PaginationControls
              totalItems={allGuides.length}
              itemsPerPage={guidesPerPage}
              onPageChange={handlePageChange}
              initialPage={currentPage}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}