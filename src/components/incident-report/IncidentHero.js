export default function IncidentHero({ onReportClick }) {
  return (
    <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-blue-900 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8 lg:mb-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        <div className="flex-1 text-center lg:text-left mb-3 sm:mb-4 md:mb-6 lg:mb-0">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-2xl">
            Laporkan insiden keamanan siber yang Anda alami agar dapat ditindaklanjuti oleh tim CSIRT. Kami siap membantu menangani serangan siber, pelanggaran data, dan ancaman keamanan lainnya dengan cepat dan profesional.
          </p>
          <button
            onClick={onReportClick}
            className="btn-gradient text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full font-medium focus:outline-none focus:ring-4 focus:ring-primary-teal/30 text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center"
          >
            <span className="mr-1 sm:mr-2">▷</span>
            Laporkan Insiden
          </button>
        </div>

        <div className="flex-shrink-0 lg:ml-4 xl:ml-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/20 to-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 sm:inset-2 md:inset-4 bg-gradient-to-br from-primary-teal/30 to-blue-400/30 rounded-full animate-pulse delay-100"></div>
            <div className="absolute inset-2 sm:inset-3 md:inset-6 lg:inset-8 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-28 xl:h-28 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 