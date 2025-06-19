"use client";

import Image from "next/image";

export default function ServiceCard({ service }) {
  const cardMainClasses = "bg-white rounded-xl shadow-md";
  const rightBoxBgClasses =
    "bg-gradient-to-br from-[#13686D] to-[#081423] text-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center";

  return (
    <section
      className={`${cardMainClasses} p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8`}
    >
      <div className="flex-1 text-center lg:text-left text-gray-800">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          {service.title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          {service.description}
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          {service.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="lg:w-64 w-full flex justify-center lg:justify-end">
        <div
          className={`${rightBoxBgClasses} h-48 w-64 sm:h-56 sm:w-72 md:h-64 md:w-80`}
        >
          {service.icon && (
            <Image
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className="mb-4"
            />
          )}
          <h3 className="font-bold text-xl mb-2">{service.title}</h3>
          <p className="text-sm">{service.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
