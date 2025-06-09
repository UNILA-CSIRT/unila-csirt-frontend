'use client';

import React from 'react';
import Link from 'next/link';
import DocumentCard from '@/components/document-card/DocumentCard';

export default function DasarHukum() {
  const documents = [
    {
      id: 1,
      title: "Peraturan Presiden Nomor 95 Tahun 2018 Sistem Pemerintahan Berbasis Elektronik",
      viewLink: "/documents/perpres-95-2018.pdf",
      downloadLink: "/documents/perpres-95-2018.pdf",
    },
    {
      id: 2,
      title: "Peraturan Badan Siber dan Sandi Negara Nomor 10 Tahun 2020 tentang Tim Tanggap Insiden Siber",
      viewLink: "/documents/peraturan-bssn-10-2020.pdf",
      downloadLink: "/documents/peraturan-bssn-10-2020.pdf",
    },
    {
      id: 3,
      title: "Peraturan Mendikbudristek Nomor 8 Tahun 2022 tentang Sistem Pemerintahan Berbasis Elektronik Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      viewLink: "/documents/permen-8-2022.pdf",
      downloadLink: "/documents/permen-8-2022.pdf",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-montserrat">
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center md:text-left">Dasar Hukum</h1>
          <div className="space-y-6">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                viewLink={doc.viewLink}
                downloadLink={doc.downloadLink}
              />
            ))}
          </div>
          <div className="mt-10 text-center md:text-right">
            <Link
              href="/dasar-hukum/semua"
              className="inline-block btn-gradient text-white py-3 px-8 rounded-[10px] text-lg font-semibold transition duration-300"
            >
              Selanjutnya
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}