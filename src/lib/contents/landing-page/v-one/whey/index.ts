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

import Icon1 from '$images/product/pro-whey/icons/icon-01.png'
import Icon2 from '$images/product/pro-whey/icons/icon-02.png'
import Icon3 from '$images/product/pro-whey/icons/icon-03.png'
import Icon4 from '$images/product/pro-whey/icons/icon-04.png'
import Icon5 from '$images/product/pro-whey/icons/icon-05.png'

import Rasa1 from '$images/product/pro-whey/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-whey/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-whey/rasa/rasa-3.png'

import Testi1 from '$images/product/pro-whey/testimonial/testi-01.webp'
import Testi2 from '$images/product/pro-whey/testimonial/testi-02.webp'
import Testi3 from '$images/product/pro-whey/testimonial/testi-03.webp'
import Testi4 from '$images/product/pro-whey/testimonial/testi-04.webp'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '40',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '23',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '140',
    },
    {
        id: "2",
        title: 'Energy from Fat / Energi dari lemak',
        kkal: '10',
    },
];
export const ingredientsList: IngredientsList[] = [
    {
        id: "1",
        title: 'Total of Fat / Lemak Total',
        gram: '1',
        percent: '2',
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
        gram: '0.5',
        percent: '3',
    },
    {
        id: "4",
        title: 'Protein / Protein',
        gram: '24',
        percent: '39',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '8',
        percent: '2',
    },
    {
        id: "6",
        title: 'Dietory Fiber / Serat Pangan',
        gram: '3',
        percent: '10',
    },
    {
        id: "7",
        title: 'Sugar / Gula',
        gram: '1',
        percent: '0',
    },
    {
        id: "8",
        title: 'Salt (Sodium) / Garam (Natrium)',
        mgram: '180',
        percent: '12',
    },
];
export const vitaminList: VitaminList[] = [
    {
        id: "1",
        alignItem: 'text-left',
        title: 'Vitamin A / Vitamin A',
        percent: '0%',
    },
    {
        id: "2",
        alignItem: 'text-left',
        title: 'Vitamin B6 / Vitamin B6',
        percent: '45%',
    },
    {
        id: "3",
        alignItem: 'text-left',
        title: 'Vitamin C / Vitamin C',
        percent: '1.1%',
    },
    {
        id: "4",
        alignItem: 'text-left',
        title: 'Calcium / Kalsuim',
        percent: '8%',
    },
    {
        id: "5",
        alignItem: 'text-left',
        title: 'Selenium / Selenium',
        percent: '75%',
    },
];
export const bcaaList: BcaaList[] = [
    {
        id: "1",
        title: 'L-Valin',
        mgram: '1.66'
    },
    {
        id: "2",
        title: 'L-Leusin',
        mgram: '2.86'
    },
    {
        id: "3",
        title: 'L-Isoleusin',
        mgram: '1.77'
    },
];

export const nutritionDescription: NutritionDescription = {
        id: "1",
        description: '*Persen AKG berdasarkan kebutuhan energi 2150kkal <br> Kebutuhan energi anda mungkin lebih tinggi atau lebih rendah',
};
export const ingredientsDescription: IngredientsDescription = {
    id: "1",
    description: 'Whey Protein Konsentrat, Whey Protein Isolat, Ekstrak Malt, BCAA, Presia, Ekstrak Buah, Antikempal Silikon Dioksida dan Pemanis Alami Glikosida Steviol. <br> <span class="italic">Whey Protein Concentrate, Whey Protein Isolate, Dried Malt Extract, BCAA, Flavor, Extract Beet, Anticaking Silicon Dioxide and Natural Sweeteners Steviol Glycosies</span>',
};
export const servingSuggestion: ServingSuggestion = {
    id: "1",
    description: 'Larutkan ( 1 Scoop 35g ) dalam 250ml air <br> <span class="italic">Dissolve ( 1 Scoop 35g ) in 250ml water.</span>',
};
export const storage: Storage = {
    id: "1",
    description: 'Simpan ditempat sejuk di bawah suhu 28C, Jauhkan dari sinar matahari langsung dan jangkauan anak-anak. <br> <span class="italic">Store at cool place under 28C, Keep out from direct sunlight and children</span>',
};
export const warning: Warning = { 
    id: "1",
    description: "Informasi yang tersedia di website musclefirst.co.id tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website Musclefirst"
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Lelah Olahraga",
        linkImg: Icon1,
        altImg: "Lelah Olahraga",
        txtDesc: "Sering kelelahan ketika sedang melakukan olahraga",
    },
    {
        id: "2",
        title: "Program Diet",
        linkImg: Icon2,
        altImg: "Program Diet",
        txtDesc: "Ingin melakukan program diet",
    },
    {
        id: "3",
        title: "Menambah Asupan",
        linkImg: Icon3,
        altImg: "Menambah Asupan",
        txtDesc: "Menambah asupan protein harian dan nutrisi",
    },
    {
        id: "4",
        title: "Berat Badan Ideal",
        linkImg: Icon4,
        altImg: "Berat Badan Ideal",
        txtDesc: "Ingin memiliki berat badan yang ideal",
    },
    {
        id: "5",
        title: "Recovery pemulihan otot",
        linkImg: Icon5,
        altImg: "Recovery pemulihan otot",
        txtDesc: "Melakukan pemulihan otot yang sudah dilatih",
    },
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Chocolate',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Vanilla Kurma <br> Madu',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Stroberi',
        linkImg: Rasa3,
        altImg: "RasaTiga",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'KADAR PROTEIN TINGGI',
        txtDesc: 'Kalian bisa dapetin 24gram/sajian protein untuk membantu pembentukan <b>otot lebih berisi</b>.'
    },
    {
        id: "2",
        title: 'PEMANIS ALAMI JAGUNG',
        txtDesc: 'Kami menggunakan pemanis alami jagung yang pastinya <b>Zero Calories</b>.'
    },
    {
        id: "3",
        title: 'HARGA TERJANGKAU',
        txtDesc: 'Dengan kualitas yang juara, <b>PRO Whey</b> ini bisa kalian beli dengan <b>harga yang sangat terjangkau</b>.'
    },
    {
        id: "4",
        title: 'RENDAH LEMAK',
        txtDesc: 'Buat kalian yang mau <b>nurunin berat badan</b> atau mau bentuk body goals, ini cocok banget buat kamu.'
    },
    {
        id: "5",
        title: 'RASA YANG ENAK',
        txtDesc: 'Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh.'
    },
    {
        id: "6",
        title: 'AMAN DIKONSUMSI',
        txtDesc: 'Jangan lupa, PRO Whey juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
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
        txtDesc: '<span class="font-bold text-amber-500">Pro Whey</span> merupakan susu protein untuk pemula gym yang ingin menurunkan berat badan dan recovery massa otot dengan harga terjangkau.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-amber-500">Pro Whey</span> terbuat alami dari protein susu whey terbaik, serta pemanis alami dari daun stevia.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-amber-500">Pro Whey</span> memiliki pilihan rasa yang unik <span class="font-normal">Cokelat, Vanilla Kurma Madu, Strawberry</span> jadi <small class="font-bold text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-amber-500">Pro Whey</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];