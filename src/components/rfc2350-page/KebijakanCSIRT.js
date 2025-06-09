export default function KebijakanCSIRT() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Kebijakan CSIRT</h1>
          <div className="space-y-10 text-base leading-relaxed text-justify">
            <div>
              <h2 className="font-semibold text-lg mb-4">
                1. Tipe Insiden dan Tingkatan Dukungan
              </h2>
              <p className="mb-3">Unila-CSIRT memiliki otoritas untuk menangani insiden yaitu:</p>
              <ol className="list-[lower-alpha] pl-6 space-y-1">
                <li>Web Defacement;</li>
                <li>DDOS;</li>
                <li>Malware;</li>
                <li>Phising;</li>
              </ol>
              <p className="mt-4">
                Dukungan yang diberikan oleh Unila-CSIRT kepada konstituen dapat
                bervariasi bergantung dari jenis dan dampak insiden.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-4">
                2. Kerjasama, Interaksi dan Pengungkapan Informasi
              </h2>
              <p>
                Unila-CSIRT akan melakukan kerjasama dan berbagi informasi dengan CSIRT
                atau organisasi lainnya dalam lingkup keamanan siber. Seluruh informasi
                yang diterima oleh Unila-CSIRT akan dirahasiakan.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-4">
                3. Komunikasi dan Autentikasi
              </h2>
              <p>
                Untuk komunikasi biasa, Unila-CSIRT dapat menggunakan alamat e-mail dan
                telepon.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}