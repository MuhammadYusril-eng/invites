# Panduan tiap order undangan

Isi folder ini:
- index.html: mesin undangan. Jangan diubah per klien.
- config.js: semua data dan pengaturan klien. Ini yang diubah per order.
- kode-google-apps-script.txt: kode database (kehadiran, panel admin, unggah foto dan musik).

## Langkah per klien

1. Salin seluruh folder ini dan beri nama klien, misalnya undangan-budi-sari.
2. Buka config.js dan ganti data klien: nama, orang tua, tanggal, tempat, rekening, WhatsApp.
   - tema: emas, hijau, atau mawar.
   - tampil_ayat, tampil_adat, tampil_gift: isi ya atau tidak.
   - Klien non-Muslim: kosongkan bismillah, salam_buka, salam_tutup, doa_arab, doa_terjemah, doa_sumber, lalu ganti ayat_intro, ayat_arab (boleh dikosongkan), ayat_terjemah, ayat_sumber dengan ayat pilihan klien.
   - Klien tanpa adat: tampil_adat: 'tidak'.
3. Buat database baru untuk klien ini (satu Google Sheet per klien, supaya data tidak tercampur):
   - Buat Google Sheet baru, Extensions, Apps Script, tempel isi kode-google-apps-script.txt.
   - Ganti GANTI_KATA_SANDI dengan kata sandi admin klien.
   - Jalankan fungsi setup satu kali (izinkan akses, termasuk Drive).
   - Deploy, New deployment, Web app, Execute as: Me, Who has access: Anyone. Salin URL berakhiran /exec.
4. Tempel URL itu ke api: '' di config.js.
5. Buat repositori GitHub baru (Public), unggah isi folder, lalu Settings, Pages, Deploy from a branch, main, root.
6. Buka alamat-undangan#admin, masuk dengan kata sandi, unggah foto sampul, foto mempelai, galeri, dan musik.
7. Buka alamat-undangan#buat-link untuk membuat link per tamu, lalu kirim lewat WhatsApp.

## Cek sebelum diserahkan ke klien

- Nama, tanggal, jam, dan zona waktu (WIT +09:00, WITA +08:00, WIB +07:00) di akad_waktu sudah benar.
- Hitung mundur dan tombol Simpan Tanggal menunjukkan waktu yang benar.
- Link peta membuka lokasi yang benar.
- Kirim satu konfirmasi uji dari HP, pastikan masuk ke tab RSVP, lalu hapus baris ujinya.
- Buka di HP lain yang tidak login Google untuk memastikan foto dan musik tampil.
- Ganti kata sandi admin di Apps Script jika kata sandi sempat dibagikan ke pihak lain.

## Catatan

- Isi yang disimpan lewat panel admin mengalahkan isi config.js. Untuk mengembalikan ke isi config.js, kosongkan kolom nilainya di tab Pengaturan.
- Foto dan musik yang diunggah lewat panel admin tersimpan di Google Drive pemilik Apps Script.
- Pakai musik yang klien punya hak pakainya.
