'use client';

import Link from 'next/link';

export default function InformasiDokumen() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-montserrat">
      <main className="flex-grow">
        <div className="w-full px-12 py-8">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Informasi Dokumen</h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:flex-none md:basis-[250px] md:flex-shrink-0 w-full">
                <div
                  className="bg-gray-300 mb-6 flex items-center justify-center text-gray-600 w-full"
                  style={{ height: '355px', borderRadius: '15px' }}
                >
                </div>
                <Link
                  href="/documents/rfc2350-unila.pdf"
                  download
                  className="btn-gradient text-white py-3 px-8 rounded-[10px] text-lg font-semibold flex items-center"
                >
                  <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                    <path d="M23.5002 30.5017C23.2391 30.5017 22.9943 30.4612 22.7658 30.3803C22.5373 30.2993 22.3252 30.1603 22.1293 29.9632L15.0793 22.9132C14.6877 22.5215 14.4997 22.0645 14.5153 21.5423C14.531 21.0201 14.719 20.5632 15.0793 20.1715C15.471 19.7798 15.9364 19.5762 16.4756 19.5605C17.0148 19.5448 17.4796 19.7322 17.87 20.1225L21.5418 23.7944V9.79232C21.5418 9.23746 21.7298 8.77269 22.1058 8.39799C22.4818 8.0233 22.9466 7.8353 23.5002 7.83399C24.0537 7.83269 24.5191 8.02069 24.8965 8.39799C25.2738 8.7753 25.4611 9.24007 25.4585 9.79232V23.7944L29.1304 20.1225C29.522 19.7309 29.9875 19.5429 30.5267 19.5585C31.0659 19.5742 31.5306 19.7785 31.921 20.1715C32.28 20.5632 32.468 21.0201 32.485 21.5423C32.502 22.0645 32.314 22.5215 31.921 22.9132L24.871 29.9632C24.6752 30.159 24.463 30.298 24.2345 30.3803C24.0061 30.4625 23.7613 30.503 23.5002 30.5017ZM11.7502 39.1673C10.6731 39.1673 9.75136 38.7841 8.985 38.0178C8.21863 37.2514 7.8348 36.329 7.8335 35.2507V31.334C7.8335 30.7791 8.0215 30.3144 8.3975 29.9397C8.7735 29.565 9.23827 29.377 9.79183 29.3757C10.3454 29.3744 10.8108 29.5624 11.1881 29.9397C11.5654 30.317 11.7528 30.7817 11.7502 31.334V35.2507H35.2502V31.334C35.2502 30.7791 35.4382 30.3144 35.8142 29.9397C36.1902 29.565 36.6549 29.377 37.2085 29.3757C37.7621 29.3744 38.2275 29.5624 38.6048 29.9397C38.9821 30.317 39.1694 30.7817 39.1668 31.334V35.2507C39.1668 36.3277 38.7836 37.2501 38.0173 38.0178C37.2509 38.7854 36.3286 39.1686 35.2502 39.1673H11.7502Z" fill="#FEFFFD"/>
                  </svg>
                  Download
                </Link>
              </div>
              <div
                className="bg-white p-3 shadow-md w-full md:flex-grow"
                style={{ borderRadius: '15px' }}
              >
                <table className="w-full table-fixed divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-2 font-semibold text-gray-900 w-[150px] align-top">
                        Deskripsi
                      </td>
                      <td className="px-2 py-2 text-gray-700 w-auto text-justify">
                        Dokumen ini memuat profil CSIRT Universitas Lampung berdasarkan pedoman RFC 2350, yang mencakup informasi umum mengenai tim, cakupan tanggung jawabnya, jenis layanan yang disediakan, serta tata cara untuk melakukan kontak atau pelaporan insiden kepada CSIRT Universitas Lampung.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 font-semibold text-gray-900 w-[150px]">Versi</td>
                      <td className="px-2 py-2 text-gray-700 w-auto">1.0</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 font-semibold text-gray-900 w-[150px]">Tanggal Publikasi</td>
                      <td className="px-2 py-2 text-gray-700">Juni 4, 2025</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 font-semibold text-gray-900 w-[150px]">Kedaluwarsa</td>
                      <td className="px-2 py-2 text-gray-700">Juni 4, 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}