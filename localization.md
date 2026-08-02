Kamu adalah seorang Senior Next.js Developer dan Pakar International SEO (i18n). 

Landing page Next.js (App Router) saya saat ini menggunakan bahasa Inggris. Saya ingin menambahkan dukungan Bahasa Indonesia (id) dan tetap mempertahankan bahasa Inggris (en), dengan struktur URL multi-bahasa yang sangat ramah SEO (SEO-friendly).

Tugasmu adalah memandu saya langkah demi langkah untuk mengimplementasikan solusi i18n dan International SEO ini.

Silakan berikan solusi dan snippet kode untuk poin-poin berikut:

## 1. Routing & URL Structure
- Tentukan strategi routing terbaik untuk SEO (misal menggunakan URL prefix: `/en` dan `/id`, atau `/` untuk default bahasa dan `/id` untuk bahasa Indonesia).
- Buat penanganan middleware (`middleware.ts`) untuk mendeteksi bahasa pengguna atau mengarahkan ke sub-path bahasa yang sesuai.

## 2. Multi-language Metadata & Tag Hreflang
- Implementasikan API Metadata Next.js (`generateMetadata`) yang mendukung multi-bahasa dinamis berdasarkan parameter lokal (`params.lang`).
- Tambahkan tag `alternates` / `hreflang` pada metadata untuk memberitahu search engine hubungan antara halaman versi `/en`, `/id`, dan `x-default`.
- Pastikan tag `canonical` mengarah ke URL bahasa yang tepat.

## 3. Dynamic Sitemap & Robots (i18n)
- Buat atau sesuaikan file `app/sitemap.ts` agar secara otomatis mencakup semua versi URL bahasa (`/en/...`, `/id/...`) beserta sintaks alternate link untuk sitemap XML.

## 4. Multi-language Structured Data (JSON-LD)
- Sesuaikan Schema.org (JSON-LD) agar menyertakan atribut `inLanguage` yang sesuai dengan halaman yang dibuka (`en-US` atau `id-ID`).

## 5. Manajemen Konten / Kamus Bahasa (Dictionary)
- Berikan contoh arsitektur folder yang bersih untuk menyimpan file i18n dictionary (misal JSON/TS) agar teks landing page bisa dengan mudah dialihkan antara Bahasa Inggris dan Indonesia tanpa mengganggu performa Server Component.

---

### Format Output yang Diharapkan:
1. Panduan struktur folder yang direkomendasikan.
2. Kode siap pakai untuk `middleware.ts`, `app/[lang]/layout.tsx`, `app/[lang]/page.tsx`, dan `app/sitemap.ts`.
3. Penjelasan singkat mengenai praktik terbaik SEO multi-bahasa yang kamu terapkan pada kode tersebut.

Mulai dengan meminta saya membagikan struktur folder atau kode `layout.tsx` / `page.tsx` saya saat ini jika diperlukan.