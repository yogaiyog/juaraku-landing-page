import type { PhraseBank } from "../types";

/**
 * Indonesian sentence bank for the trial class assessment generator.
 * `{name}` placeholders are replaced with the student's name.
 */
export const id: PhraseBank = {
  title: "Hasil Trial Class",

  dimension: {
    speed: {
      high: [
        "{name} mampu mengikuti instruksi dengan cepat.",
        "{name} cepat memahami arahan dan menyelesaikan tugas dengan baik.",
        "{name} menunjukkan kecepatan belajar yang sangat baik selama kelas.",
      ],

      growthLow: [
        "{name} membutuhkan sedikit waktu lebih untuk memahami instruksi, namun terus menunjukkan perkembangan selama kelas.",
        "Dengan pembiasaan dan latihan yang rutin, {name} akan semakin terbiasa mengikuti alur pembelajaran.",
      ],

      growthMid: [
        "{name} mampu mengikuti pembelajaran dengan baik sesuai ritmenya.",
        "{name} memiliki kecepatan belajar yang baik dan terus menunjukkan perkembangan.",
      ],
    },

    concept: {
      high: [
        "{name} memahami konsep yang dipelajari dengan baik.",
        "{name} dapat menangkap konsep baru dengan cepat.",
        "{name} menunjukkan pemahaman yang baik terhadap materi hari ini.",
      ],

      growthLow: [
        "{name} masih membutuhkan pengulangan agar konsep lebih melekat.",
        "Dengan lebih banyak latihan, pemahaman {name} terhadap konsep akan semakin kuat.",
      ],

      growthMid: [
        "{name} sudah memahami konsep dasar dengan baik.",
        "{name} memahami materi yang diberikan dan siap mempelajari materi berikutnya.",
      ],
    },

    problem: {
      high: [
        "{name} mampu mencari solusi saat menghadapi tantangan.",
        "{name} berpikir logis ketika mengerjakan tugas.",
        "{name} tidak mudah menyerah saat menemukan kesulitan.",
      ],

      growthLow: [
        "{name} masih perlu berlatih agar lebih percaya diri saat menyelesaikan tantangan secara mandiri.",
        "Semakin sering mengerjakan proyek, kemampuan problem solving {name} akan semakin berkembang.",
      ],

      growthMid: [
        "{name} sudah mulai mampu menyelesaikan tantangan dengan arahan mentor.",
        "{name} menunjukkan kemampuan problem solving yang baik dan akan semakin terasah melalui proyek berikutnya.",
      ],
    },

    focus: {
      high: [
        "{name} tetap fokus sepanjang pelajaran dan mengerjakan tugas dengan penuh perhatian.",
        "{name} mampu menjaga fokus dengan baik selama kelas.",
        "{name} memperhatikan dengan baik dan tetap aktif dari awal hingga akhir.",
      ],

      growthLow: [
        "{name} masih membutuhkan bantuan untuk tetap fokus, dan akan semakin baik melalui aktivitas yang lebih bervariasi.",
        "Dengan latihan dan pengingat yang lembut, fokus {name} akan semakin kuat.",
      ],

      growthMid: [
        "{name} mampu tetap fokus dengan sesekali diingatkan.",
        "{name} menunjukkan fokus yang baik dan akan terus berkembang dengan latihan.",
      ],
    },
  },

  shared: {
    opening: [
      "Pada trial class hari ini, {name} menunjukkan semangat belajar yang baik.",
      "{name} mengikuti trial class dengan antusias dan aktif selama pembelajaran.",
      "Hari ini {name} mengikuti trial class dengan baik dan menunjukkan potensi yang positif.",
    ],

    generic: [
      "{name} fokus mengikuti kegiatan dari awal hingga akhir.",
      "{name} aktif mengikuti setiap aktivitas yang diberikan.",
      "{name} terlihat antusias selama proses belajar berlangsung.",
    ],

    dynamic: [
      "{name} memiliki rasa ingin tahu yang baik dan senang mencoba hal-hal baru.",
      "{name} menunjukkan potensi yang baik untuk terus berkembang di bidang coding dan AI.",
      "{name} menikmati proses belajar dan tidak ragu mencoba tantangan baru.",
    ],

    allHighGrowth: [
      "{name} menunjukkan performa yang sangat baik di seluruh aspek penilaian.",
      "{name} memiliki dasar yang sangat baik untuk melanjutkan pembelajaran ke level berikutnya.",
    ],

    reinforcement: [
      "Dengan belajar secara rutin, kemampuan {name} akan terus berkembang.",
      "Melalui proyek-proyek berikutnya, kemampuan {name} akan semakin terasah.",
      "{name} memiliki potensi yang baik untuk berkembang lebih jauh.",
      "Setiap pertemuan membawa {name} lebih percaya diri dan semakin terampil.",
      "Dengan bimbingan yang rutin, {name} akan terus membuat kemajuan yang stabil.",
      "Setiap proyek yang selesai membuat {name} memiliki sesuatu yang bisa dibanggakan.",
      "Semakin sering berlatih, semakin berkembang kemampuan {name}.",
      "Kemampuan {name} akan terus meningkat seiring waktu.",
    ],

    closing: [
      "Secara keseluruhan, {name} menunjukkan potensi yang sangat baik untuk belajar coding dan AI. Kami yakin dengan pembelajaran yang terstruktur, {name} akan terus berkembang dan semakin percaya diri dalam membuat berbagai proyek teknologi.",
      "Kami senang melihat perkembangan {name} selama trial class. Semoga ini menjadi awal yang menyenangkan untuk perjalanan belajar coding dan AI bersama JuaraKu.",
      "Terima kasih sudah mengikuti trial class. Kami berharap dapat mendampingi {name} untuk terus belajar, berkreasi, dan mengembangkan kemampuan teknologi di masa depan.",
    ],
  },
};
