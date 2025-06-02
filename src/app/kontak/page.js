'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { validateContactField } from '../../helpers/validation';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function Kontak() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    pesan: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateContactField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateContactField(key, formData[key]);
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Hubungi Kami
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:mt-8">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Layanan obrolan</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Kami siap memberikan bantuan kepada Anda setiap hari <span className="font-semibold text-gradient-end">Senin hingga Jumat</span>, pukul <span className="font-semibold text-gradient-end">09.00 hingga 17.00 WIB</span>.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Hubungi kami via telepon</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
                  Silakan menghubungi kami di <span className="font-semibold text-gradient-end">(+088-234-567-90)</span>.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Layanan tersedia setiap hari <span className="font-semibold text-gradient-end">Senin hingga Jumat</span>, pukul <span className="font-semibold text-gradient-end">09.00 hingga 17.00 WIB</span>.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Kirimkan email</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Anda dapat mengirimkan email ke <span className="font-semibold text-gradient-end">example@gmail.com</span>, dan kami akan merespons dalam waktu <span className="font-semibold text-gradient-end">24 jam</span>.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">Kirimkan pesan kepada kami</h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Nama lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="namaLengkap"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base ${
                        errors.namaLengkap ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      required
                    />
                    <ErrorMessage error={errors.namaLengkap} />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Alamat email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contoh@email.com"
                      className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base ${
                        errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      required
                    />
                    <ErrorMessage error={errors.email} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Pesan anda <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows="4"
                    className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all resize-vertical text-xs sm:text-sm md:text-base ${
                      errors.pesan ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    required
                  />
                  <ErrorMessage error={errors.pesan} />
                </div>

                <div className="flex justify-center pt-2 sm:pt-3 md:pt-4">
                  <button
                    type="submit"
                    className="btn-gradient text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-sm sm:text-base hover:opacity-90 transition-opacity w-full sm:w-auto max-w-xs"
                  >
                    ▷ Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-12">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
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