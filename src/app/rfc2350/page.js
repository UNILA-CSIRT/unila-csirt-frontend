'use client';

import { useSearchParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import InformasiDokumen from '@/components/rfc2350-page/InformasiDokumen';
import DasarHukum from '@/components/rfc2350-page/DasarHukum';
import KebijakanCSIRT from '@/components/rfc2350-page/KebijakanCSIRT';

export default function Rfc2350Page() {
  const searchParams = useSearchParams();
  const subPage = searchParams.get('page');

  console.log('Current subPage (RFC 2350):', subPage);

  let contentComponent = null;

  switch (subPage) {
    case 'informasi-dokumen':
      contentComponent = <InformasiDokumen />;
      break;
    case 'dasar-hukum':
      contentComponent = <DasarHukum />;
      break;
    case 'kebijakan-csirt':
      contentComponent = <KebijakanCSIRT />;
      break;
    default:
      notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {contentComponent}
        </div>
      </main>
      <Footer />
    </div>
  );
}