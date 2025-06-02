export default function ReportingGuide({ onReportClick }) {
  const steps = [
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-teal mr-2 sm:mr-3 md:mr-4 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Persiapkan informasi",
      content: "yang diperlukan sebelum mengisi laporan, pastikan anda memiliki informasi berikut: Kronologi kejadian secara rinci bukti pendukung (screenshot, email, log, atau file lainnya) tanggal dan waktu kejadian serta dampak yang ditimbulkan"
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-teal mr-2 sm:mr-3 md:mr-4 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Isi formulir laporan",
      content: 'klik tombol "Laporkan Insiden" dan isi formulir dengan lengkap. Pastikan data yang diberikan akurat agar tim CSIRT Unila dapat menindaklanjuti laporan dengan efektif.'
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-teal mr-2 sm:mr-3 md:mr-4 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Verifikasi & analisis",
      content: "oleh tim CSIRT Unila Setelah laporan masuk, tim kami akan melakukan analisis awal dan menghubungi anda jika diperlukan klarifikasi tambahan."
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-teal mr-2 sm:mr-3 md:mr-4 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Tindak lanjut & penyelesaian",
      content: "tim CSIRT Unila akan memberikan langkah mitigasi dan solusi sesuai dengan tingkat keparahan insiden. Anda akan mendapatkan update melalui email atau kontak yang telah dihubungkan."
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-teal mr-2 sm:mr-3 md:mr-4 flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Konfirmasi & evaluasi",
      content: "setelah insiden ditangani, kami akan meminta konfirmasi dari pelapor serta memberikan rekomendasi keamanan untuk mencegah kejadian serupa di masa mendatang."
    }
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-6">Cara Melaporkan Insiden</h2>
      
      <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            {step.icon}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">{step.title}</span> {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center">
        <button
          onClick={onReportClick}
          className="btn-gradient text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-[#13686D]/30 text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto"
        >
          Laporkan Insiden
        </button>
      </div>
    </div>
  );
} 