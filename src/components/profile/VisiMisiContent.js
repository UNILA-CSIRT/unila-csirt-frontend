

export default function VisiMisiContent() {
    return (
        <div className="flex flex-col items-center p-8">
            <div className="max-w-4xl w-full mb-8"> 
                <h1 className="text-3xl font-bold text-left text-gray-800">VISI DAN MISI</h1>
            </div>

            <div className="max-w-4xl w-full space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">VISI</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-left">
                        Menjadi tim respons insiden keamanan siber yang andal, profesional, dan proaktif dalam menjaga keamanan
                        informasi dan teknologi di lingkungan Universitas Lampung.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">MISI</h2>
                    <ol className="list-decimal list-outside pl-5 text-lg text-gray-700 leading-relaxed space-y-2 text-left">
                        <li>
                            <span className="font-semibold">Meningkatkan Ketangguhan Keamanan Siber:</span> Mengembangkan dan menerapkan strategi respons yang
                            efektif terhadap insiden keamanan informasi di lingkungan Universitas Lampung.
                        </li>
                        <li>
                            <span className="font-semibold">Pencegahan dan Deteksi Dini:</span> Melakukan identifikasi, pemantauan, dan mitigasi terhadap potensi ancaman
                            keamanan secara berkelanjutan.
                        </li>
                        <li>
                            <span className="font-semibold">Pengembangan Kompetensi:</span> Meningkatkan kapasitas dan keterampilan tim dalam menghadapi tantangan
                            keamanan siber melalui pelatihan dan kolaborasi.
                        </li>
                        <li>
                            <span className="font-semibold">Membangun Kesadaran Keamanan Informasi:</span> Meningkatkan pemahaman dan kesadaran seluruh sivitas
                            akademika mengenai pentingnya keamanan informasi.
                        </li>
                        <li>
                            <span className="font-semibold">Kolaborasi dan Inovasi:</span> Menjalin kerja sama dengan berbagai pihak, baik internal maupun eksternal, untuk
                            memperkuat sistem pertahanan keamanan siber.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}