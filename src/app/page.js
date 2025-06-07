'use client';

import { useState } from 'react';
import Navbar from '../components/beranda/Navbar Beranda';
import Footer from '../components/beranda/Footer Beranda';
import Image from 'next/image';

import csirtIllustration from '../../public/images/csirt-illustration.png';

import { FaShieldAlt, FaBullhorn, FaFileSignature, FaEye, FaPencilAlt, FaTrashAlt, FaGlobe } from 'react-icons/fa';

export default function HomePage() {
  const incidentLogData = [
    { id: 1, dateTime: '10/04/2025 - 13:21', websiteName: 'Sistem Akademik Unila', domain: 'siakadu.unila.ac.id', type: 'Brute Force Login', status: 'Baru' },
    { id: 2, dateTime: '09/04/2025 - 10:14', websiteName: 'Sistem Perpustakaan', domain: 'library.unila.ac.id', type: 'Directory Transversal', status: 'Dalam Proses' },
    { id: 3, dateTime: '08/04/2025 - 22:11', websiteName: 'Website FT', domain: 'teknik.unila.ac.id', type: 'Malware Injection', status: 'Dalam Proses' },
    { id: 4, dateTime: '08/04/2025 - 18:40', websiteName: 'Website FISIP', domain: 'fisip.unila.ac.id', type: 'Website Deface', status: 'Selesai' },
    { id: 5, dateTime: '07/04/2025 - 07:33', websiteName: 'Website Informatika', domain: 'inf.unila.ac.id', type: 'Phising Attempt', status: 'Selesai' },
  ];

  const getStatusDotClass = (status) => {
    switch (status) {
      case 'Baru': return 'bg-red-500';
      case 'Dalam Proses': return 'bg-yellow-500';
      case 'Selesai': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  const facultyData = [
    { name: 'Fakultas Teknik', value: 70, color: '#2563EB' },
    { name: 'Fakultas Hukum', value: 70, color: '#DC2626' },
    { name: 'Fakultas Ekonomi Bisnis', value: 70, color: '#6B7280' },
    { name: 'Fakultas Pertanian', value: 70, color: '#16A34A' },
    { name: 'Fakultas ISIP', value: 70, color: '#F97316' },
    { name: 'Fakultas Kedokteran', value: 70, color: '#84CC16' },
    { name: 'Fakultas MIPA', value: 50, color: '#22D3EE' },
    { name: 'Fakultas KIP', value: 70, color: '#9333EA' },
  ];
  
  const logoUnila = '/images/Logo_UnivLampung.png';
  const logoSimanila = '/images/logo-simanila.png';
  const logoEkkn = '/images/logo-ekkn.png';
  const logoLibrary = '/images/logo-library.png';
  const logoBak = '/images/logo-bak.png';

  const websiteData = [
    { name: 'UNILA', logo: logoUnila, link: '#' },
    { name: 'MYUNILA', logo: logoUnila, link: '#' },
    { name: 'SIMANILA', logo: logoSimanila, link: '#' },
    { name: 'SIAKADU', logo: logoUnila, link: '#' },
    { name: 'VCLASS', logo: logoUnila, link: '#' },
    { name: 'E-KKN', logo: logoEkkn, link: '#' },
    { name: 'MBKM', logo: logoUnila, link: '#' },
    { name: 'LIBRARY', logo: logoLibrary, link: '#' },
    { name: 'BAK', logo: logoBak, link: '#' },
  ];

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <section className="bg-primary-dark text-text-white">
          <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                COMPUTER SECURITY INCIDENT RESPONSE TEAM
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-teal font-bold mt-2">UNIVERSITAS LAMPUNG</h2>
              <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                Tim respons insiden keamanan siber Universitas Lampung yang bertugas untuk menerima, meninjau, dan menanggapi laporan insiden keamanan siber.
              </p>
              <button
                className="
                  mt-8 px-8 py-3 
                  font-bold text-white 
                  bg-gradient-to-r from-[#0A2E30] via-[#081423] to-[#0A2E30]
                  border border-gray-600 
                  rounded-lg 
                  transition-all duration-300 
                  hover:border-gray-400 hover:shadow-lg hover:shadow-primary-teal/20
                  transform hover:-translate-y-px"
              >
                Selengkapnya
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={csirtIllustration}
                alt="CSIRT Illustration"
                width={450}
                height={400}
                priority
              />
            </div>
          </div>
        </section>

        {/* Elemen Pemisah Miring */}
        <div className="relative h-20 bg-primary-dark" style={{ marginTop: '-1px' }}>
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-gray-50"
            style={{
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
            }}
          ></div>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="container mx-auto h-full relative">
              <div
                className="absolute h-2 w-48 bg-[#13686D]"
                style={{
                  top: '29%',
                  left: '20%',
                  transform: 'rotate(3deg)'
                }}
              ></div>
              <div
                className="absolute h-2 w-48 bg-primary-teal"
                style={{
                  top: '59%',
                  left: '55%',
                  transform: 'rotate(3deg)'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section 2: Layanan Kami */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">LAYANAN KAMI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#13686D] to-[#081423] text-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center h-full">
                <Image src="/images/proactive.png" alt="Layanan Proaktif" width={64} height={64} className="mb-4" />
                <h3 className="font-bold text-xl mb-2">Layanan Proaktif</h3>
                <p>(Proactive Services)</p>
              </div>
              <div className="bg-gradient-to-br from-[#13686D] to-[#081423] text-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center h-full">
                <Image src="/images/reactive.png" alt="Layanan Reaktif" width={64} height={64} className="mb-4" />
                <h3 className="font-bold text-xl mb-2">Layanan Reaktif</h3>
                <p>(Reactive Services)</p>
              </div>
              <div className="bg-gradient-to-br from-[#13686D] to-[#081423] text-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center h-full">
                <Image src="/images/management.png" alt="Pengelolaan Keamanan" width={64} height={64} className="mb-4" />
                <h3 className="font-bold text-xl mb-2">Pengelolaan Keamanan Siber</h3>
                <p>(Security Management Services)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Statistik Keamanan */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">STATISTIK KEAMANAN WEBSITE UNILA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">Jumlah Kasus</h3>
                <div className="flex items-center justify-center mt-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full" viewBox="0 0 36 36" transform="rotate(-90)">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="var(--primary-dark)"
                        strokeWidth="4"
                      />
                      <path
                        className="transition-all duration-1000"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="var(--primary-teal)"
                        strokeWidth="4"
                        strokeDasharray="80, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-dark">80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md flex flex-col">
                <div className="flex flex-1 gap-4">
                  <div className="flex-grow flex flex-col">
                    <div className="flex-grow flex items-end justify-around gap-2 text-center border-l border-b border-gray-200 pl-1">
                      {[
                        { month: 'Jan', values: [85, 65, 90] },
                        { month: 'Feb', values: [87, 63, 92] },
                        { month: 'Mar', values: [86, 64, 95] },
                        { month: 'Apr', values: [88, 65, 93] },
                        { month: 'Mei', values: [87, 64, 95] },
                        { month: 'Jun', values: [86, 63, 91] },
                      ].map(({ month, values }) => (
                        <div key={month} className="h-full w-full flex items-end justify-center gap-1">
                          <div className="w-3 rounded-t-sm" style={{ height: `${values[0]}%`, backgroundColor: '#10B981' }}></div>
                          <div className="w-3 bg-primary-teal rounded-t-sm" style={{ height: `${values[1]}%` }}></div>
                          <div className="w-3 bg-primary-dark rounded-t-sm" style={{ height: `${values[2]}%` }}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around text-xs font-medium text-gray-500 mt-2 border-t border-transparent">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
                    </div>
                  </div>
                  <div className="w-32 flex flex-col justify-start space-y-2 text-xs pt-2">
                    <div className="flex items-center"><span className="w-3 h-3 mr-2 rounded-sm" style={{ backgroundColor: '#10B981' }}></span>Konten Positif</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-primary-teal mr-2 rounded-sm"></span>Konten Negatif</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-primary-dark mr-2 rounded-sm"></span>Keamanan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Kasus Website Fakultas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">KASUS WEBSITE FAKULTAS</h2>
            <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {facultyData.map(faculty => (
                  <div
                    key={faculty.name}
                    className="text-white p-4 rounded-lg flex items-center shadow-md relative h-24"
                    style={{ backgroundColor: faculty.color }}
                  >
                    <span className="font-semibold text-sm w-2/3">{faculty.name}</span>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 flex-shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 36 36" transform="rotate(-90 18 18)">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="3"
                          strokeDasharray={`${faculty.value}, 100`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="relative text-sm font-semibold text-white"
                          style={{ top: '1px' }}
                        >
                          {faculty.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Log Insiden */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">LOG INSIDEN</h2>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">No</th>
                      <th scope="col" className="px-6 py-3">Tanggal & Jam</th>
                      <th scope="col" className="px-6 py-3">Nama Website</th>
                      <th scope="col" className="px-6 py-3">Domain</th>
                      <th scope="col" className="px-6 py-3">Jenis Insiden</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidentLogData.map((item, index) => (
                      <tr key={item.id} className="bg-white border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4">{item.dateTime}</td>
                        <td className="px-6 py-4">{item.websiteName}</td>
                        <td className="px-6 py-4">{item.domain}</td>
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className={`w-2.5 h-2.5 rounded-full mr-2 ${getStatusDotClass(item.status)}`}></span>
                            {item.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-primary-dark hover:underline">
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Website di Universitas Lampung */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">WEBSITE DI UNIVERSITAS LAMPUNG</h2>
            <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {websiteData.map(site => (
                  <a
                    key={site.name}
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-between transition-transform transform hover:-translate-y-1"
                  >
                    <span>{site.name}</span>
                    <Image
                      src={site.logo}
                      alt={`Logo ${site.name}`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Chatbot */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-primary-dark text-text-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    Butuh bantuan cepat soal insiden keamanan atau tips menjaga data tetap aman? Chat dengan Asisten CSIRT AI sekarang juga!
                  </h3>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/chatbot.png"
                      alt="Asisten CSIRT AI"
                      layout="fill"
                      objectFit="contain"
                      className="z-0"
                    />
                    <div className="absolute bottom-5 w-full flex justify-center">
                      <button
                        className="btn-gradient whitespace-nowrap font-bold py-3 px-8 rounded-lg"
                      >
                        Chat Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}