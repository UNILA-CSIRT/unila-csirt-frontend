'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Kontak() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    pesan: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

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

      case 'pesan':
        if (!value.trim()) return 'Pesan wajib diisi';
        if (value.trim().length < 10) return 'Pesan minimal 10 karakter';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length === 0) {
      console.log('Contact form submitted:', formData);
      alert('Pesan Anda telah terkirim! Kami akan merespons dalam waktu 24 jam.');
      setFormData({ namaLengkap: '', email: '', pesan: '' });
      setTouched({});
      setErrors({});
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12">
            Hubungi Kami
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8 lg:mt-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Layanan obrolan</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Kami siap memberikan bantuan kepada Anda setiap hari <span className="font-semibold text-gradient-end">Senin hingga Jumat</span>, pukul <span className="font-semibold text-gradient-end">09.00 hingga 17.00 WIB</span>.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Hubungi kami via telepon</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
                  Silakan menghubungi kami di <span className="font-semibold text-gradient-end">(+088-234-567-90)</span>.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Layanan tersedia setiap hari <span className="font-semibold text-gradient-end">Senin hingga Jumat</span>, pukul <span className="font-semibold text-gradient-end">09.00 hingga 17.00 WIB</span>.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Kirimkan email</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Anda dapat mengirimkan email ke <span className="font-semibold text-gradient-end">example@gmail.com</span>, dan kami akan merespons dalam waktu <span className="font-semibold text-gradient-end">24 jam</span>.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6">Kirimkan pesan kepada kami</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama lengkap
                    </label>
                    <input
                      type="text"
                      name="namaLengkap"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=""
                      className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                        errors.namaLengkap ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    <ErrorMessage error={errors.namaLengkap} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=""
                      className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    <ErrorMessage error={errors.email} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan anda
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder=""
                    rows="4"
                    className={`input-field w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all resize-vertical text-sm sm:text-base ${
                      errors.pesan ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  <ErrorMessage error={errors.pesan} />
                </div>

                <div className="flex justify-center pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="btn-gradient text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-sm sm:text-base hover:opacity-90 transition-opacity w-full sm:w-auto max-w-xs"
                  >
                    ▷ Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496.54311975242683!2d105.24286792492295!3d-5.3642367574787055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5f60802221d%3A0xac5d5819e12c9bcf!2sLampung%20University!5e0!3m2!1sen!2sid!4v1748810826888!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 