'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import IncidentForm from '../../components/incident-report/IncidentForm';
import IncidentHero from '../../components/incident-report/IncidentHero';
import ServiceInfo from '../../components/incident-report/ServiceInfo';
import VulnerabilityTypes from '../../components/incident-report/VulnerabilityTypes';
import ReportingGuide from '../../components/incident-report/ReportingGuide';

export default function LaporanInsiden() {
  const [showForm, setShowForm] = useState(false);
  
  const handleReportClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
      setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 py-3 sm:py-4 md:py-6 lg:py-8">
          <IncidentForm onBack={handleBackClick} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Laporan Insiden Siber
          </h1>

          <IncidentHero onReportClick={handleReportClick} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <ServiceInfo />
              <VulnerabilityTypes />
            </div>

            <ReportingGuide onReportClick={handleReportClick} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 