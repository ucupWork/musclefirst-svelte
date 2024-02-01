import type { CocokCard } from "$typings/v-one/section-three.type";
import type { RasaRoundedFull } from "$typings/v-one/section-four.type";
import type { ManfaatCardList } from '$typings/v-one/section-six.type';
import type { IdealCardList } from '$typings/v-one/section-seven.type';
import type { TestimonialCard } from '$typings/v-one/section-eleven.type';
import type { EducationCard } from '$typings/v-one/section-twelve.type';
import type { BeforeAfterCard } from '$typings/v-one/section-sixteen.type';

import type { 
    ServingHead,
    AmountServing,
    IngredientsList,
    VitaminList,
    BcaaList,
    NutritionDescription,
    IngredientsDescription,
    ServingSuggestion,
    Storage,
    Warning
} from '$typings/v-one/modal-ingredients.type';

import Icon1 from '$images/product/pro-bcaa/icons/icon-01.png'
import Icon2 from '$images/product/pro-bcaa/icons/icon-02.png'
import Icon3 from '$images/product/pro-bcaa/icons/icon-03.png'
import Icon4 from '$images/product/pro-bcaa/icons/icon-04.png'

import Rasa1 from '$images/product/pro-bcaa/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-bcaa/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-bcaa/rasa/rasa-3.png'

import Testi1 from '$images/product/pro-bcaa/testimonial/testi-01.webp'
import Testi2 from '$images/product/pro-bcaa/testimonial/testi-02.webp'
import Testi3 from '$images/product/pro-bcaa/testimonial/testi-03.webp'
import Testi4 from '$images/product/pro-bcaa/testimonial/testi-04.webp'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '10',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '30',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '20',
    },
];
export const ingredientsList: IngredientsList[] = [
    {
        id: "1",
        title: 'Total of Fat / Lemak Total',
        gram: '0',
        percent: '0',
    },
    {
        id: "2",
        title: 'Kolesterol / Cholesterol',
        gram: '0',
        percent: '0',
    },
    {
        id: "3",
        title: 'Saturated Fat / Lemak Jenuh',
        gram: '0',
        percent: '0',
    },
    {
        id: "4",
        title: 'Protein / Protein',
        gram: '1',
        percent: '1',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '5',
        percent: '3',
    },
    {
        id: "6",
        title: 'Sugar / Gula',
        gram: '1',
        percent: '0',
    },
    {
        id: "7",
        title: 'Salt (Sodium) / Garam (Natrium)',
        gram: '0',
        percent: '0',
    },
];

export const vitaminList: VitaminList[] = [];
export const bcaaList: BcaaList[] = [];

export const nutritionDescription: NutritionDescription = {
        id: "1",
        description: '*Persen AKG berdasarkan kebutuhan energi 2150kkal <br> Kebutuhan energi anda mungkin lebih tinggi atau lebih rendah',
};
export const ingredientsDescription: IngredientsDescription = {
        id: "1",
        description: 'BCAA, Antioksidan Asam, Askorbat, Maltodekstrin, Perisa, Bit Merah, Perisa Anggur / BCAA, Asorbic Acid, Antioxidant, Maltodextrine, Red Beet Flavour, Grape Flavour',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Larutkan ( 2 Scoops 10g ) dalam 150ml air / Disslove ( 2 Scoops 10g ) in 150ml water',
};
export const storage: Storage = {
        id: "1",
        description: 'Simpan di tempat sejuk dibawah suhu 28C, jauhkan dari sinar matahari langsung dan jangkauan anak-anak / Store at cool place under 28C, keep out from direct sunlight and children',
};
export const warning: Warning = { 
    id: "1",
    description: "Informasi yang tersedia di website musclefirst.co.id tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website Musclefirst"
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Mudah Lelah",
        linkImg: Icon1,
        altImg: "Mudah Lelah",
        txtDesc: "Mudah lelah saat berolahraga",
        txtSubDesc: 'Asam amino dalam <span class="font-bold">Pro BCAA</span> bekerja dengan cara mengurangi produksi serotonin, selama Anda berolahraga.'
    },
    {
        id: "2",
        title: "membentuk Massa Otot",
        linkImg: Icon2,
        altImg: "membentuk Massa Otot",
        txtDesc: "Ingin membentuk massa otot",
        txtSubDesc: 'Manfaat <span class="font-bold">Pro BCAA</span> yang paling penting adalah meningkatkan pertumbuhan dan mempertahankan massa otot.'
    },
    {
        id: "3",
        title: "Nyeri Otot",
        linkImg: Icon3,
        altImg: "Nyeri Otot",
        txtDesc: "Sering mengalami nyeri otot",
        txtSubDesc: 'Konsumsi <span class="font-bold">Pro BCAA</span> sebelum olahraga terbukti dapat membantu mengurangi nyeri otot setelah olahraga.'
    },
    {
        id: "4",
        title: "Mempertahankan massa otot",
        linkImg: Icon4,
        altImg: "Mempertahankan massa otot",
        txtDesc: "Ingin mempertahankan massa otot",
        txtSubDesc: 'Kandungan <span class="font-bold">Pro BCAA</span> dalam protein mampu membantu mencegah atrofi otot atau pengecilan massa otot.'
    },
    {
        id: "5",
        title: "Mengurangi Kerusakan Otot",
        linkImg: Icon4,
        altImg: "Mengurangi Kerusakan Otot",
        txtDesc: "Mengurangi kerusakan massa otot setelah latihan",
        txtSubDesc: 'Mengurangi kerusakan massa otot setelah latihan.'
    },
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Grape Bush',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Green Apple',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Orange Cooler',
        linkImg: Rasa3,
        altImg: "RasaTiga",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'MENGANDUNG BCAA MURNI',
        txtDesc: '<span class="font-bold">Pro BCAA</span> murni 7 gram per saji yang mampu jaga massa otot.'
    },
    {
        id: "2",
        title: 'HARGA TERJANGKAU',
        txtDesc: 'Dengan kualitas yang juara, <span class="font-bold">Pro BCAA</span> ini bisa kalian beli dengan harga yang sangat terjangkau.'
    },
    {
        id: "3",
        title: 'RASA ALAMI BUAH',
        txtDesc: 'Rasa alami dari buah-buahan yang memiliki 3 varian rasa unik yang pastinya bikin kangen.'
    },
    {
        id: "4",
        title: 'TIDAK BIKIN KEMBUNG',
        txtDesc: '<span class="font-bold">Pro BCAA</span> diformulasikan sehingga tidak bikin kembung.'
    },
    {
        id: "5",
        title: 'KUALITAS IMPORT',
        txtDesc: 'Tidak perlu diragukan lagi untuk kualitas yang tersedia di musclefirst bertaraf internasonal loh.'
    },
    {
        id: "6",
        title: 'MEMBANTU PROGRAM CUTTING',
        txtDesc: 'Kandungan <span class="font-bold">Pro BCAA</span> dapat membuat membentuk otot yang kering saat sedang cutting.'
    },
    {
        id: "7",
        title: 'PERBAIKI JARINGAN OTOT',
        txtDesc: 'Mampu memperbaiki jaringan otot yang rusak karena olahraga.'
    },
    {
        id: "8",
        title: 'HALAL DAN BPOM',
        txtDesc: '<span class="font-bold">MUSCLE FIRST</span> sudah berstandar international dan banyak banget keunggulan nya, udah deh buruan beli.'
    },
];
// Section 7
export const idealList: IdealCardList[] = [
    {
        id: 1,
        title: 'FeatOne',
        linkImg: "/assets/global/1.png",
        altImg: "FeatOne",
        txtDesc: 'Terbuat dari <strong>ekstrak susu sapi murni</strong> yang mengandung protein tinggi namun rendah kalori dan lemak'
    },
    {
        id: 2,
        title: 'FeatTwo',
        linkImg: "/assets/global/2.png",
        altImg: "FeatTwo",
        txtDesc: 'Dengan konsumsi protein rutin, <strong>metabolisme</strong> tubuh berjalan lebih baik dan membuat kenyang lebih lama.'
    },
    {
        id: 3,
        title: 'FeatThree',
        linkImg: "/assets/global/3.png",
        altImg: "FeatThree",
        txtDesc: 'Lemak jadi tidak mudah menumpuk, membuat badan terlihat <strong>lebih ideal</strong> dari sebelumnya.'
    },
    {
        id: 4,
        title: 'FeatFour',
        linkImg: "/assets/global/4.png",
        altImg: "FeatFour",
        txtDesc: 'Apalagi dibantu dengan rasa protein Muscle First yang <strong>unik dan antiboring</strong>, bantu diet sehat jadi berhasil.'
    },
];
// Section 16
export const beforeAfterCardList: BeforeAfterCard[] = [
    {
        id: "1",
        title: 'Before After Review 1',
        person: [
            {
                titlePerson: 'Before After Review 1',
                linkImg: BeforeAfter1,
                altImg: "Before After 1",
                tag: "before"
            },
            {
                titlePerson: 'Before After Review 2',
                linkImg: BeforeAfter2,
                altImg: "Before After 2",
                tag: "after"
            }
        ]
    },
    {
        id: "2",
        title: 'Before After Review 2',
        person: [
            {
                titlePerson: 'Before After Review 3',
                linkImg: BeforeAfter3,
                altImg: "Before After 3",
                tag: "before"
            },
            {
                titlePerson: 'Before After Review 4',
                linkImg: BeforeAfter4,
                altImg: "Before After 4",
                tag: "after"
            }
        ]
    },
];
// Section 11
export const testimonialCardList: TestimonialCard[] = [
    {
        id: "1",
        title: 'Testimonial Review 1',
        linkImg: Testi1,
        altImg: "Testimonial 1",
    },
    {
        id: "2",
        title: 'Testimonial Review 2',
        linkImg: Testi2,
        altImg: "Testimonial 2",
    },
    {
        id: "3",
        title: 'Testimonial Review 3',
        linkImg: Testi3,
        altImg: "Testimonial 3",
    },
    {
        id: "4",
        title: 'Testimonial Review 4',
        linkImg: Testi4,
        altImg: "Testimonial 4",
    },
];
// Section 12
export const educationCardList: EducationCard[] = [
    {
        id: "1",
        title: 'Education 1',
        txtDesc: '<span class="font-bold text-amber-500">Pro BCAA</span> mempertahankan dan memulihkan massa  otot yang dibentuk setelah olahraga.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-amber-500">Pro BCAA</span> terbuat dari perisa alami buah-buahan dan asam amino esensial.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-amber-500">Pro BCAA</span> memiliki pilihan rasa yang unik <span class="font-normal">Anggur, Apel hijau dan jeruk</span> jadi <small class="font-bold text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-amber-500">Pro BCAA</span> <small class="font-bold text-amber-500 uppercase">Muscle First</small> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];