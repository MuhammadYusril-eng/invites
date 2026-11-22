/* =====================================================================
   KONFIGURASI UNDANGAN: file ini satu-satunya yang diubah untuk tiap klien.
   Jangan mengubah index.html. Simpan file dengan encoding UTF-8.
   Data juga bisa diubah nanti lewat panel admin (alamat-undangan#admin);
   isi dari panel admin mengalahkan isi di file ini.
   ===================================================================== */
window.CONFIG = {

  // Alamat Web app Google Apps Script milik klien ini (berakhiran /exec).
  // Kosongkan dulu bila ingin pratinjau tanpa database (konfirmasi lewat WhatsApp).
  api: '',

  data: {
    // ---- Tampilan ----
    tema: 'emas',            // emas | hijau | mawar
    tampil_ayat: 'ya',       // ya | tidak
    tampil_adat: 'ya',       // ya | tidak (matikan bila klien tidak memakai adat)
    tampil_gift: 'ya',       // ya | tidak (bagian rekening / Love Gift)

    // ---- Mempelai ----
    pria_nama: 'Adi Pratama',
    pria_panggilan: 'Adi',
    pria_ortu: 'Putra dari Bapak Nama Ayah dan Ibu Nama Ibu',
    wanita_nama: 'Sinta Lestari',
    wanita_panggilan: 'Sinta',
    wanita_ortu: 'Putri dari Bapak Nama Ayah dan Ibu Nama Ibu',

    // ---- Acara ----
    tanggal: 'Sabtu, 20 Februari 2027',                  // tampil di sampul
    akad_waktu: '2027-02-20T08:00:00+09:00',             // untuk hitung mundur (WIT = +09:00, WITA = +08:00, WIB = +07:00)
    akad_teks: 'Sabtu, 20 Februari 2027, 08.00 WIT',
    akad_tempat: 'Nama Tempat, alamat lengkap',
    akad_peta: 'https://www.google.com/maps',
    resepsi_waktu: '2027-02-20T11:00:00+09:00',          // kosongkan bila tombol Simpan Tanggal tidak perlu
    resepsi_teks: 'Sabtu, 20 Februari 2027, 11.00 WIT hingga selesai',
    resepsi_tempat: 'Nama Gedung, alamat lengkap',
    resepsi_peta: 'https://www.google.com/maps',

    // ---- Kontak dan rekening ----
    wa: '6281234567890',                                 // awali 62, tanpa + dan tanpa spasi
    rek_bank: 'Bank Contoh, atas nama Adi Pratama',
    rek_no: '1234567890',
    rek2_bank: '',                                       // opsional
    rek2_no: '',

    // ---- Kata pembuka dan penutup (kosongkan bagian opsional bila tidak diperlukan) ----
    bismillah: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    salam_buka: 'Assalamu’alaikum warahmatullahi wabarakatuh',
    kata_pembuka: 'Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami.',
    kata_acara: 'Dengan memohon rahmat dan ridha Allah Subhanahu wa Ta’ala, insyaAllah kami akan menyelenggarakan acara:',
    kata_penutup: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Kami ucapkan terima kasih.',
    salam_tutup: 'Wassalamu’alaikum warahmatullahi wabarakatuh',

    // ---- Ayat dan doa (untuk klien non-Muslim: ganti isinya atau kosongkan semua) ----
    ayat_intro: 'Allah Subhanahu wa Ta’ala berfirman',
    ayat_arab: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ',
    ayat_terjemah: '“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antara kamu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”',
    ayat_sumber: 'QS. Ar-Rum: 21',
    doa_arab: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    doa_terjemah: 'Semoga Allah memberkahimu, melimpahkan keberkahan atasmu, dan mengumpulkan kalian berdua dalam kebaikan.',
    doa_sumber: 'Doa untuk pengantin, HR. Abu Dawud dan at-Tirmidzi',

    // ---- Adat (opsional; contoh di bawah untuk adat Ternate) ----
    adat_judul: 'Adat Ternate',
    adat_teks: 'Pernikahan kami dirangkai dengan adat Ternate. Sebelum hari akad, kedua keluarga berkumpul dalam antar balanja untuk bermusyawarah. Pada hari pernikahan, keluarga dan tamu duduk bersama menyantap makan saro, jamuan adat yang menjadi tanda kebersamaan.',
    adat_motto: 'Marimoi ngone futuru',
    adat_motto_arti: 'Bersatu kita teguh',

    // ---- Foto dan musik: isi lewat panel admin (#admin), atau tulis nama file di repositori ----
    // contoh: foto_cover: 'foto/sampul.jpg', foto1: 'foto/1.jpg', musik: 'musik/lagu.mp3'
    foto_cover: '', foto_pria: '', foto_wanita: '', musik: '',
    foto1: '', foto2: '', foto3: '', foto4: '', foto5: '', foto6: '', foto7: '', foto8: '', foto9: ''
  }
};
