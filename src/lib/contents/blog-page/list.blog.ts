import type { CardBlog } from "$typings/article/card-blog.type";


import MediaArtikelOne from '$images/vendor/blog-1-media-artikel.webp'
import MediaArtikelTwo from '$images/vendor/blog-2-media-artikel.webp'
import MediaArtikelThree from '$images/vendor/blog-4-media-artikel.webp'
import MediaArtikelFour from '$images/vendor/cnn-jumbotron.webp'
import MediaArtikelFive from '$images/vendor/blog-5-media-artikel.webp'
// CDN Set to Digita Ocean Space
let cdn: boolean = true;
// Products Musclefirst List
export const blogList: CardBlog[] = [
    {
      id: "1",
      title: "Creatine Terbaik Buatan Indonesia untuk Badan Ideal Go Internasional",
      summary: "Badan ideal adalah kebanggaan dan impian yang ingin dimiliki setiap orang, sehingga tak heran hampir semua orang melakukan berbagai cara agar memiliki badan ideal, termasuk dengan cara instan seperti sedot lemak, operasi plastik, meminum pil obat yang tidak jelas asal usulnya hingga steroid untuk memiliki badan yang diidamkan.",
      imgUrl: MediaArtikelFour,
      imgAlt: "Media Artikel Muscle First - CNN Indonesia",
      urlLink: "https://www.cnnindonesia.com/nasional/20220804142003-293-830293/creatine-terbaik-buatan-indonesia-untuk-badan-ideal-go-internasional",
      date: "16 FEB 2021",
      type: "web",
      vendor: "cnnindonesia.com",
      status: true,
    },
    {
      id: "2",
      title: "Data Penjualan Creatine, Muscle First Lagi-Lagi Jadi Juara!",
      summary: "Tubuh yang sehat, bugar, dan ideal tentu jadi idaman banyak orang. Namun, hal-hal tersebut tidak bisa dicapai hanya dengan mengandalkan diet dan konsumsi makanan bergizi saja. Yup, selain menjaga pola makan dan memenuhi gizi dalam tubuh lewat konsumsi yang sehat, melatih badan dan otot juga harus dilakukan jika ingin memiliki tubuh yang sehat dan bugar. Salah satu aktivitas fisik yang ramai dilakukan adalah fitness.",
      imgUrl: MediaArtikelFive,
      imgAlt: "Media Artikel Muscle First - Compas.co.id Indonesia",
      urlLink: "https://compas.co.id/article/data-penjualan-creatine-muscle-first/",
      date: "23 AGU 2022",
      type: "web",
      vendor: "compas.co.id",
      status: true,
    },
    {
      id: "3",
      title: "Muscle First Luncurkan Produk Terbaru, Suplemen Kaya Protein Penunjang Kegiatan Fitnes",
      summary: "Kekurangan protein juga dapat berakibat fatal hingga merusak jaringan otot. Nah, untuk menunjang kebutuhan protein, brand Muscle First baru saja meluncurkan produk barunya bernama M1 PRO WHEY 100",
      imgUrl: MediaArtikelOne,
      imgAlt: "Media Artikel Muscle First - Wartakota live",
      urlLink: "https://wartakota.tribunnews.com/2021/02/16/muscle-first-luncurkan-produk-terbaru-suplemen-kaya-protein-penunjang-kegiatan-fitnes",
      date: "16 FEB 2021",
      type: "web",
      vendor: "wartakotalive.com",
      status: false,
    },
    {
      id: "4",
      title: "Pendiri Muscle First: Program Diet Gak Harus Menyiksa Diri",
      summary: "Program diet gak harus menyiksa diri, dan bisa dimulai dengan menjaga pola makan. Jika sudah terbiasa bisa diimbangi dengan olahraga minimum tiga kali seminggu, sebagai bagian dari penerapan pola hidup sehat, pungkasnya.",
      imgUrl: MediaArtikelTwo,
      imgAlt: "Media Artikel Muscle First - Wartakota live",
      urlLink: "https://www.beritasatu.com/archive/834727/pendiri-muscle-first-program-diet-gak-harus-menyiksa-diri",
      date: "30 SEP 2021",
      type: "web",
      vendor: "beritasatu.com",
      status: true,
    },
    {
      id: "5",
      title: "Segini Kebutuhan Protein yang Dibutuhkan untuk Membentuk Otot",
      summary: "Protein adalah nutrisi penting untuk pembentukan otot, Makronutrien sangat penting untuk perbaikan jaringan otot dan penuh dengan asam amino, bahan pembentuk otot dan kekuatan.",
      imgUrl: MediaArtikelThree,
      imgAlt: "Media Artikel Muscle First - Wartakota live",
      urlLink: "https://lifestyle.bisnis.com/read/20210122/220/1346473/segini-kebutuhan-protein-yang-dibutuhkan-untuk-membentuk-otot",
      date: "22 JAN 2021",
      type: "web",
      vendor: "lifestyle.bisnis.com",
      status: false,
    },
]