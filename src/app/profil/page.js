
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import DefinisiCsirtContent from '../../components/profile/DefinisiCsirtContent';
import VisiMisiContent from '../../components/profile/VisiMisiContent';
import DefinisiLogoContent from '../../components/profile/DefinisiLogoContent';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProfilPage() {
    const searchParams = useSearchParams();
    const initialPage = searchParams.get('page') || 'definisi-csirt';
    const [activeContent, setActiveContent] = useState(initialPage);

    useEffect(() => {
        const page = searchParams.get('page');
        if (page && page !== activeContent) {
            setActiveContent(page);
        } else if (!page && activeContent !== 'definisi-csirt') {
            setActiveContent('definisi-csirt');
        }
    }, [searchParams, activeContent]);

    const renderContentComponent = () => {
        switch (activeContent) {
            case 'definisi-csirt':
                return <DefinisiCsirtContent />;
            case 'visi-misi':
                return <VisiMisiContent />;
            case 'definisi-logo':
                return <DefinisiLogoContent />;
            default:
                return <DefinisiCsirtContent />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 bg-white">
                {renderContentComponent()}
            </main>
            <Footer /> 
        </div>
    );
}