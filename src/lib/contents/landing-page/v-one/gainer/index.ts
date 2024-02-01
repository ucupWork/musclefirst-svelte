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

import Icon1 from '$images/product/pro-gainer/icons/icon-01.png'
import Icon2 from '$images/product/pro-gainer/icons/icon-02.png'
import Icon3 from '$images/product/pro-gainer/icons/icon-03.png'
import Icon4 from '$images/product/pro-gainer/icons/icon-04.png'

import Rasa1 from '$images/product/pro-gainer/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-gainer/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-gainer/rasa/rasa-3.png'
import Rasa4 from '$images/product/pro-gainer/rasa/rasa-4.png'
import Rasa5 from '$images/product/pro-gainer/rasa/rasa-5.png'

import Testi1 from '$images/product/pro-gainer/testimonial/testi-01.webp'
import Testi2 from '$images/product/pro-gainer/testimonial/testi-02.webp'
import Testi3 from '$images/product/pro-gainer/testimonial/testi-03.webp'
import Testi4 from '$images/product/pro-gainer/testimonial/testi-04.webp'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '250',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '4',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '1030',
    }
];
export const ingredientsList: IngredientsList[] = [
    {
        id: "1",
        title: 'Total of Fat / Lemak Total',
        gram: '11',
        percent: '13',
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
        gram: '55',
        percent: '92',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '160',
        percent: '48',
    },
    {
        id: "6",
        title: 'Dietory Fiber / Serat Pangan',
        gram: '17',
        percent: '0',
    },
    {
        id: "7",
        title: 'Salt (Sodium) / Garam (Natrium)',
        gram: '0.1',
        percent: '0',
    },
];
export const vitaminList: VitaminList[] = [
    {
        id: "1",
        alignItem: 'text-left',
        title: 'Vitamin B1 ( Thiamine )',
        percent: '0%',
    },
    {
        id: "2",
        alignItem: 'text-left',
        title: 'Vitamin B2 ( Riboflavin )',
        percent: '160%',
    },
    {
        id: "3",
        alignItem: 'text-left',
        title: 'Vitamin B6 ( Pyridoxine )',
        percent: '135%',
    },
    {
        id: "4",
        alignItem: 'text-left',
        title: 'Vitamin B9 ( Folic Acid )',
        percent: '415%',
    },
    {
        id: "5",
        alignItem: 'text-left',
        title: 'Vitamin B12 ( Cyanocobalamin )',
        percent: '45%',
    },
    {
        id: "6",
        alignItem: 'text-left',
        title: 'Vitamin B7 ( Biotin )',
        percent: '80%',
    },
    {
        id: "7",
        alignItem: 'text-left',
        title: 'Kalium ( Potassium )',
        percent: '40%',
    },
    {
        id: "8",
        alignItem: 'text-left',
        title: 'Magnesium',
        percent: '60%',
    },
    {
        id: "9",
        alignItem: 'text-left',
        title: 'Fosfor ( Phosphorus )',
        percent: '135%',
    },
    {
        id: "10",
        alignItem: 'text-left',
        title: 'Kalsium ( Calcuim )',
        percent: '100%',
    },
    {
        id: "11",
        alignItem: 'text-left',
        title: 'Vitamin D3 ( Cholecalciferol )',
        percent: '90%',
    },
];
export const bcaaList: BcaaList[] = [];

export const nutritionDescription: NutritionDescription = {
        id: "1",
        description: '*Persen AKG berdasarkan kebutuhan energi 2150kkal <br> Kebutuhan energi anda mungkin lebih tinggi atau lebih rendah',
};
export const ingredientsDescription: IngredientsDescription = {
        id: "1",
        description: 'Whey Bubuk, Oat Bubuk, Konsentrat Protein Whey, Isolate Protein Whey, Susu Bubuk Full Krim ( Cream ), Susu Skim Bubuk, Sukros, Perisa Karamel, Ekstram Malt, Silikon Dioksida / Whey Powder, Oat Powder, Whey Protein Concentrate, Whey Protein Isolate, Full Cream Milk Powder, Skim Milk Powder, Sucrose, Caramel Flavour, Malt Extract, Silicon Dioxide',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Larutkan ( 1,5 Scoops 250g ) dalam 600ml air / Disslove ( 2 Scoops 10g ) in 150ml water',
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
        title: "Waktu Makan",
        linkImg: Icon1,
        altImg: "Waktu Makan",
        txtDesc: "Tidak punya waktu makan",
    },
    {
        id: "2",
        title: "Berat Badan",
        linkImg: Icon2,
        altImg: "Berat Badan",
        txtDesc: "Ingin menambah berat badan namun rendah lemak",
    },
    {
        id: "3",
        title: "Kalori",
        linkImg: Icon3,
        altImg: "Kalori",
        txtDesc: "Mau menambah asupan kalori dengan mudah",
    },
    {
        id: "4",
        title: "Kenyang Lebih Lama",
        linkImg: Icon4,
        altImg: "Kenyang Lebih Lama",
        txtDesc: "Mengenyangkan lebih lama",
    },
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Chocolate <br> Glame',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Caramel <br> Fusion',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Honeydrew <br> Melon',
        linkImg: Rasa3,
        altImg: "RasaTiga",
    },
    {
        id: "4",
        title: 'Chocolate <br> Mint',
        linkImg: Rasa4,
        altImg: "RasaEmpat",
    },
    {
        id: "5",
        title: 'Vanilla <br> Popcorn',
        linkImg: Rasa5,
        altImg: "RasaLima",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'KADAR PROTEIN TINGGI',
        txtDesc: 'Kalian bisa dapetin 55gram/sajian protein untuk membantu <b>pembentukan otot</b>.'
    },
    {
        id: "2",
        title: 'HARGA TERJANGKAU',
        txtDesc: 'Dengan kualitas yang juara, <b>PRO GAINER</b> ini bisa kalian beli dengan <b>harga yang sangat terjangkau</b>.'
    },
    {
        id: "3",
        title: 'TINGGI KALORI',
        txtDesc: 'Dapatkan 1.030 kalori dengan konsumsi <b>PRO GAINER</b>.'
    },
    {
        id: "4",
        title: 'TINGGI KARBOHIDRAT',
        txtDesc: 'Dalam 1 sajian PRO Gainer kamu bisa dapatkan 160gram karbohidrat kompleks.'
    },
    {
        id: "5",
        title: 'RASA YANG ENAK',
        txtDesc: 'Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh.'
    },
    {
        id: "6",
        title: 'AMAN DIKONSUMSI',
        txtDesc: 'Jangan lupa, PRO ISOLATE juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
    },
    {
        id: "7",
        title: 'COCOK UNTUK SEMUA',
        txtDesc: 'Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang pengen bentuk badan ideal boleh banget.'
    },
    {
        id: "8",
        title: 'HALAL DAN SUDAH BPOM',
        txtDesc: 'MUSCLE FIRST sudah berstandar international dan banyak banget keunggulan nya, udah deh buruan beli.'
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
        txtDesc: '<span class="font-bold text-amber-500">PRO GAINER</span> merupakan susu protein tinggi kalori dan rendah lemak yang bermanfaat untuk menambah massa tubuh.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> Dibuat secara alami dengan menggunakan serat gandum, produk ini tidak menimbulkan efek samping berbahaya.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> memiliki pilihan rasa yang unik, ada 5 rasa jumlahnya : <span class="font-normal">cokelat, caramel, melon, cokelat mint, dan vanila popcorn</span> jadi <small class="font-bold  text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];