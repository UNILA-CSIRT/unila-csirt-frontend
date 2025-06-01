'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LaporanInsiden() {
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    noWhatsApp: '',
    npmNip: '',
    unitFakultasInstansi: '',
    jenisInsiden: '',
    deskripsiInsiden: '',
    buktiPendukung: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const jenisInsidenOptions = [
    'Malware/Virus',
    'Phishing',
    'Data Breach',
    'Unauthorized Access',
    'DDoS Attack',
    'Social Engineering',
    'Ransomware',
    'Other'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'namaLengkap':
        if (!value.trim()) return 'Nama lengkap wajib diisi';
        if (value.trim().length < 3) return 'Nama lengkap minimal 3 karakter';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Nama lengkap hanya boleh berisi huruf dan spasi';
        return '';

      case 'email':
        if (!value.trim()) return 'Email wajib diisi';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Format email tidak valid';
        return '';

      case 'noWhatsApp':
        if (!value.trim()) return 'Nomor WhatsApp wajib diisi';
        if (!/^(08|628|\+628)[0-9]{8,11}$/.test(value.replace(/\s/g, ''))) {
          return 'Format nomor WhatsApp tidak valid (contoh: 08xxxxxxxxxx)';
        }
        return '';

      case 'unitFakultasInstansi':
        if (!value.trim()) return 'Unit/Fakultas/Instansi wajib diisi';
        if (value.trim().length < 3) return 'Unit/Fakultas/Instansi minimal 3 karakter';
        return '';

      case 'npmNip':
        if (value.trim() && value.trim().length < 8) {
          return 'NPM/NIP minimal 8 karakter jika diisi';
        }
        return '';

      case 'jenisInsiden':
        if (!value) return 'Jenis insiden wajib dipilih';
        return '';

      case 'deskripsiInsiden':
        if (!value.trim()) return 'Deskripsi insiden wajib diisi';
        if (value.trim().length < 20) return 'Deskripsi insiden minimal 20 karakter';
        return '';

      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          buktiPendukung: 'Ukuran file maksimal 10MB'
        }));
        return;
      }
      
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          buktiPendukung: 'Tipe file tidak didukung. Gunakan JPG, PNG, PDF, DOC, atau DOCX'
        }));
        return;
      }

      setErrors(prev => ({
        ...prev,
        buktiPendukung: ''
      }));
    }

    setFormData(prev => ({
      ...prev,
      buktiPendukung: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'buktiPendukung') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Laporan insiden Anda telah berhasil dikirim! Tim CSIRT akan segera menindaklanjuti.');
      setFormData({
        namaLengkap: '',
        email: '',
        noWhatsApp: '',
        npmNip: '',
        unitFakultasInstansi: '',
        jenisInsiden: '',
        deskripsiInsiden: '',
        buktiPendukung: null
      });
      setTouched({});
      setErrors({});
      setShowForm(false);
    }
  };

  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return (
      <div className="flex items-center mt-1 text-red-600">
        <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-xs">{error}</span>
      </div>
    );
  };

  if (showForm) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-1 py-4 sm:py-6 lg:py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
              <button
                onClick={() => setShowForm(false)}
                className="inline-flex items-center text-primary-teal hover:text-primary-dark transition-colors text-sm sm:text-base font-medium cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800">
                FORM PENGADUAN INSIDEN
              </h1>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Nama Lengkap"
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                          errors.namaLengkap ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      <ErrorMessage error={errors.namaLengkap} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Insiden
                      </label>
                      <select
                        name="jenisInsiden"
                        value={formData.jenisInsiden}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base cursor-pointer ${
                          errors.jenisInsiden ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      >
                        <option value="">Pilih jenis insiden</option>
                        {jenisInsidenOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ErrorMessage error={errors.jenisInsiden} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      <ErrorMessage error={errors.email} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="noWhatsApp"
                        value={formData.noWhatsApp}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="No. WhatsApp"
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                          errors.noWhatsApp ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      <ErrorMessage error={errors.noWhatsApp} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit/Fakultas/Instansi
                      </label>
                      <input
                        type="text"
                        name="unitFakultasInstansi"
                        value={formData.unitFakultasInstansi}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Unit/Fakultas/Instansi"
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                          errors.unitFakultasInstansi ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      <ErrorMessage error={errors.unitFakultasInstansi} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        NPM/NIP 
                        <span className="text-gray-500 text-xs ml-1">(Opsional)</span>
                        <div className="relative group ml-2">
                          <span className="cursor-help text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Jika Mempunyai NPM/NIP. Jika Tidak Mempunyai NPM/NIP Kosongkan.
                          </div>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="npmNip"
                        value={formData.npmNip}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="NPM/NIP"
                        className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                          errors.npmNip ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      <ErrorMessage error={errors.npmNip} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi Insiden
                    </label>
                    <textarea
                      name="deskripsiInsiden"
                      value={formData.deskripsiInsiden}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Jelaskan detail insiden yang terjadi, kapan terjadinya, dampak yang dialami, dll."
                      rows="4"
                      className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all resize-vertical text-sm sm:text-base ${
                        errors.deskripsiInsiden ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    <ErrorMessage error={errors.deskripsiInsiden} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bukti Pendukung
                    </label>
                    <div className={`w-full border-2 border-dashed rounded-lg p-4 sm:p-6 text-center hover:border-[#1DBBB7] transition-colors ${
                      errors.buktiPendukung ? 'border-red-500' : 'border-gray-300'
                    }`}>
                      <input
                        type="file"
                        name="buktiPendukung"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        accept="image/*,.pdf,.doc,.docx"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <div className="btn-gradient text-white px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer">
                            Browse File
                          </div>
                          <p className="text-xs text-gray-500 mt-2 sm:mt-3">
                            {formData.buktiPendukung ? formData.buktiPendukung.name : 'Upload gambar, PDF, atau dokumen (Maks. 10MB)'}
                          </p>
                        </div>
                      </label>
                    </div>
                    <ErrorMessage error={errors.buktiPendukung} />
                  </div>
                </div>

                <div className="flex justify-center pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="btn-gradient text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-sm sm:text-base w-full sm:w-auto max-w-xs cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    ▷ Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12">
            Laporan Insiden Siber
          </h1>

          <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-blue-900 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden mb-6 sm:mb-8 lg:mb-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="flex-1 text-center lg:text-left mb-4 sm:mb-6 lg:mb-0">
                <p className="text-white text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl">
                  Laporkan insiden keamanan siber yang Anda alami agar dapat ditindaklanjuti oleh tim CSIRT. Kami siap membantu menangani serangan siber, pelanggaran data, dan ancaman keamanan lainnya dengan cepat dan profesional.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-gradient text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-primary-teal/30 text-xs sm:text-sm lg:text-base hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center"
                >
                  <span className="mr-1 sm:mr-2">▷</span>
                  Laporkan Insiden
                </button>
              </div>

              <div className="flex-shrink-0 lg:ml-6 xl:ml-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/20 to-blue-400/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-primary-teal/30 to-blue-400/30 rounded-full animate-pulse delay-100"></div>
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 xl:w-28 xl:h-28 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              
              <div className="bg-primary-dark rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Apa Itu Layanan Aduan Siber?</h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-200">
                  Layanan Aduan Siber adalah sistem pelaporan insiden keamanan siber yang memungkinkan pengguna untuk melaporkan berbagai ancaman seperti serangan <span className="text-primary-teal font-medium">phishing</span>, <span className="text-primary-teal font-medium">pembebaran malware</span>, atau <span className="text-primary-teal font-medium">penyalahgunaan data</span>. Tim CSIRT akan menganalisis laporan dan memberikan solusi sesuai dengan tingkat urgensi insiden.
                </p>
              </div>

              <div className="bg-primary-dark rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">Jenis Kerentanan</h2>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">1</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Cross-site Scripting (XSS)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">2</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Cross-site Request Forgery</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">3</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Server-Side Request Forgery (SSRF)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">4</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">SQL Injection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">5</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Server-side Remote Code Execution (RCE)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">6</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">XML External Entity Attacks (XXE)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">7</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Access Control Issues (Insecure Direct Object Reference issues, etc.)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary-teal text-primary-dark text-xs sm:text-sm font-bold rounded mr-3 flex-shrink-0">8</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-200">Exposed Administrative Panels that don&apos;t require login credentials</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">Cara Melaporkan Insiden</h2>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-teal mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      <span className="font-semibold">Persiapkan informasi</span> yang diperlukan sebelum mengisi laporan, pastikan anda memiliki informasi berikut: Kronologi kejadian secara rinci bukti pendukung (screenshot, email, log, atau file lainnya) tanggal dan waktu kejadian serta dampak yang ditimbulkan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-teal mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      Isi formulir laporan klik tombol <span className="font-semibold text-primary-teal">&quot;Laporkan Insiden&quot;</span> dan isi formulir dengan lengkap. Pastikan data yang diberikan akurat agar tim CSIRT Unila dapat menindaklanjuti laporan dengan efektif.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-teal mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      <span className="font-semibold">Verifikasi & analisis</span> oleh tim CSIRT Unila Setelah laporan masuk, tim kami akan melakukan analisis awal dan menghubungi anda jika diperlukan klarifikasi tambahan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-teal mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      <span className="font-semibold">Tindak lanjut & penyelesaian</span> tim CSIRT Unila akan memberikan langkah mitigasi dan solusi sesuai dengan tingkat keparahan insiden. Anda akan mendapatkan update melalui email atau kontak yang telah dihubungkan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-teal mr-3 sm:mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                      <span className="font-semibold">Konfirmasi & evaluasi</span> setelah insiden ditangani, kami akan meminta konfirmasi dari pelapor serta memberikan rekomendasi keamanan untuk mencegah kejadian serupa di masa mendatang.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-gradient text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-xs sm:text-sm lg:text-base hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Laporkan Insiden
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 