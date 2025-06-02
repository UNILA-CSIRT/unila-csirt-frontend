import { useState } from 'react';
import { validateIncidentField } from '../../helpers/validation';
import ErrorMessage from '../ui/ErrorMessage';

export default function IncidentForm({ onBack }) {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateIncidentField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    setTouched(prev => ({
      ...prev,
      buktiPendukung: true
    }));

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
        const error = validateIncidentField(key, formData[key]);
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
      onBack();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <button
          onClick={onBack}
          className="inline-flex items-center text-primary-teal hover:text-primary-dark transition-colors text-xs sm:text-sm md:text-base font-medium cursor-pointer"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 text-center">
          Form Pengaduan Insiden
        </h1>
      </div>

      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
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
                  Jenis Insiden <span className="text-red-500">*</span>
                </label>
                <select
                  name="jenisInsiden"
                  value={formData.jenisInsiden}
                  onChange={handleInputChange}
                  className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base cursor-pointer ${
                    errors.jenisInsiden ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
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

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  No. WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="noWhatsApp"
                  value={formData.noWhatsApp}
                  onChange={handleInputChange}
                  placeholder="08xxxxxxxxxx"
                  className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base ${
                    errors.noWhatsApp ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  required
                />
                <ErrorMessage error={errors.noWhatsApp} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Unit/Fakultas/Instansi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="unitFakultasInstansi"
                  value={formData.unitFakultasInstansi}
                  onChange={handleInputChange}
                  placeholder="Contoh: Fakultas Teknik"
                  className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base ${
                    errors.unitFakultasInstansi ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  required
                />
                <ErrorMessage error={errors.unitFakultasInstansi} />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                  NPM/NIP
                  <span className="text-gray-500 text-xs ml-1">(Opsional)</span>
                  <div className="relative group ml-1 sm:ml-2">
                    <span className="cursor-help text-gray-400 hover:text-gray-600">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      Jika tidak memiliki NPM/NIP, kosongkan saja
                    </div>
                  </div>
                </label>
                <input
                  type="text"
                  name="npmNip"
                  value={formData.npmNip}
                  onChange={handleInputChange}
                  placeholder="NPM/NIP (jika ada)"
                  className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base ${
                    errors.npmNip ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                <ErrorMessage error={errors.npmNip} />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Deskripsi Insiden <span className="text-red-500">*</span>
              </label>
              <textarea
                name="deskripsiInsiden"
                value={formData.deskripsiInsiden}
                onChange={handleInputChange}
                placeholder="Jelaskan detail insiden yang terjadi, kapan terjadinya, dampak yang dialami, dll."
                rows="4"
                className={`input-field w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#1DBBB7] focus:border-transparent outline-none transition-all resize-vertical text-xs sm:text-sm md:text-base ${
                  errors.deskripsiInsiden ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                }`}
                required
              />
              <ErrorMessage error={errors.deskripsiInsiden} />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Bukti Pendukung
              </label>
              <div className={`w-full border-2 border-dashed rounded-md sm:rounded-lg p-3 sm:p-4 md:p-6 text-center hover:border-[#1DBBB7] transition-colors ${
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
                    <div className="btn-gradient text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer">
                      Pilih File
                    </div>
                    <p className="text-xs text-gray-500 mt-2 sm:mt-3 px-2">
                      {formData.buktiPendukung ? formData.buktiPendukung.name : 'Upload gambar, PDF, atau dokumen (Maks. 10MB)'}
                    </p>
                  </div>
                </label>
              </div>
              <ErrorMessage error={errors.buktiPendukung} />
            </div>
          </div>

          <div className="flex justify-center pt-3 sm:pt-4 md:pt-6">
            <button
              type="submit"
              className="btn-gradient text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-sm sm:text-base w-full sm:w-auto max-w-xs cursor-pointer hover:opacity-90 transition-opacity"
            >
              ▷ Kirim Laporan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 