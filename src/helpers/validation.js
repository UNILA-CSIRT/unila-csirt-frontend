export const validateContactField = (name, value) => {
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

export const validateIncidentField = (name, value) => {
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

    case 'noWhatsApp':
      if (!value.trim()) return 'Nomor WhatsApp wajib diisi';
      if (!/^(08|628|\+628)[0-9]{8,11}$/.test(value.replace(/\s/g, ''))) {
        return 'Format nomor WhatsApp tidak valid (contoh: 08xxxxxxxxxx)';
      }
      return '';

    case 'unitFakultasInstansi':
      if (!value.trim()) return 'Unit/Fakultas/Instansi wajib diisi';
      if (value.trim().length < 3) return 'Unit/Fakultas/Instansi minimal 3 karakter';
      return '';

    case 'npmNip':
      if (value.trim() && value.trim().length < 8) {
        return 'NPM/NIP minimal 8 karakter jika diisi';
      }
      return '';

    case 'jenisInsiden':
      if (!value) return 'Jenis insiden wajib dipilih';
      return '';

    case 'deskripsiInsiden':
      if (!value.trim()) return 'Deskripsi insiden wajib diisi';
      if (value.trim().length < 20) return 'Deskripsi insiden minimal 20 karakter';
      return '';

    default:
      return '';
  }
}; 