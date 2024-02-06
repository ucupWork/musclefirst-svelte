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

import Icon1 from '$images/product/pro-creatine/icons/icon-01.png'
import Icon2 from '$images/product/pro-creatine/icons/icon-02.png'
import Icon3 from '$images/product/pro-creatine/icons/icon-03.png'
import Icon4 from '$images/product/pro-creatine/icons/icon-04.png'

import Rasa1 from '$images/product/pro-creatine/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-creatine/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-creatine/rasa/rasa-3.png'
import Rasa4 from '$images/product/pro-creatine/rasa/rasa-4.png'
import Rasa5 from '$images/product/pro-creatine/rasa/rasa-5.png'
import Rasa6 from '$images/product/pro-creatine/rasa/rasa-6.png'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '6',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '60',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '0',
    },
    {
        id: "2",
        title: 'Energy from Fat / Energi dari lemak',
        kkal: '0',
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
        gram: '3',
        percent: '5',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '3',
        percent: '1',
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
        description: 'Kreatin Monohidrat, Antioksidan, Asam Askorbat, Perisa Bubble Gum, Silikon Dioksida, Sukralosa / Creatine Monohydrate, Antioxidant Ascorbic Acid, Bubble Gum Flavor, Silicon Dioxide, Sucralose',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Larutkan (1 Scoope 5G) ke dalam 150ml air dan aduk rata. / Disslove (1 Scoope 5G) into 150ml water then stir evenly.',
};
export const storage: Storage = {
        id: "1",
        description: 'Simpan ditempat sejuk dan kering jauhkan dari sinar matahari langsung. / Store in a cool and dry place, keep away from direct sunlight.',
};
export const warning: Warning = { 
    id: "1",
    description: "Informasi yang tersedia di website musclefirst.co.id tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website Musclefirst"
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Daya Tahan Otot",
        linkImg: Icon1,
        altImg: "Daya Tahan Otot",
        txtDesc: "Meningkatkan daya tahan otot saat latihan",
    },
    {
        id: "2",
        title: "Keram Olahraga",
        linkImg: Icon2,
        altImg: "Keram Olahraga",
        txtDesc: "Mudah bosan, memiliki banyak varian rasa",
    },
    {
        id: "3",
        title: "Perkembangan Otot",
        linkImg: Icon3,
        altImg: "Perkembangan Otot",
        txtDesc: "Ingin menaikan massa otot dan bebas lemak",
    },
    {
        id: "4",
        title: "Mengurangi Resiko Cedera",
        linkImg: Icon4,
        altImg: "Mengurangi Resiko Cedera",
        txtDesc: "Mengurangi resiko cedera pada otot",
    },
];
// Section Unflav
export const unflavList: CocokCard[] = [
    {
        id: "1",
        title: "Daya Tahan Otot",
        linkImg: Icon1,
        altImg: "Daya Tahan Otot",
        txtDesc: "Vegan Friendly",
    },
    {
        id: "2",
        title: "Keram Olahraga",
        linkImg: Icon2,
        altImg: "Keram Olahraga",
        txtDesc: "Gluten Free",
    },
    {
        id: "3",
        title: "Mengurangi Resiko Cedera",
        linkImg: Icon4,
        altImg: "Mengurangi Resiko Cedera",
        txtDesc: "Sudah Halal dan BPOM",
    },
    {
        id: "4",
        title: "Mengurangi Resiko Cedera",
        linkImg: Icon4,
        altImg: "Mengurangi Resiko Cedera",
        txtDesc: "No Added Sugar dan non GMO",
    }
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Tropical <br> Fruit',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Guava',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Green <br> Apple',
        linkImg: Rasa3,
        altImg: "RasaTiga",
    },
    {
        id: "4",
        title: 'Peach',
        linkImg: Rasa4,
        altImg: "RasaEmpat",
    },
    {
        id: "5",
        title: 'Mixberry',
        linkImg: Rasa5,
        altImg: "RasaLima",
    },
    {
        id: "6",
        title: 'Bubblegum',
        linkImg: Rasa6,
        altImg: "RasaEnam",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'KADAR CREATINE TINGGI',
        txtDesc: 'Mengandung 5 gram creatine per saji lebih banyak dari pada creatine pada makanan.'
    },
    {
        id: "2",
        title: 'BANYAK VARIAN RASA',
        txtDesc: '<span class="font-bold">Pro Creatine</span> sudah hadir dengan banyak varian rasa unik, yaitu : <b>Tropical Fruit</b>, <b>Guava</b>, <b>Green Apple</b>, <b>Peach</b>, <b>Mixberry</b> dan <b>Bubblegum</b>.'
    },
    {
        id: "3",
        title: 'HARGA TERJANGKAU',
        txtDesc: 'Dengan kualitas <span class="font-bold">Creatine</span> monohidrat terbaik dan harga terjangkau hanya 3 ribu per saji.'
    },
    {
        id: "4",
        title: 'PEWARNA ALAMI BUAH',
        txtDesc: 'Kami menggunakan pewarna alami dari buah buahan sehingga aman dikonsumsi.'
    },
    {
        id: "5",
        title: 'RASA YANG ENAK',
        txtDesc: 'Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh.'
    },
    {
        id: "6",
        title: 'AMAN DIKONSUMSI',
        txtDesc: 'Jangan lupa, <span class="font-bold">Pro Creatine</span> juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
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
export const testimonialCardList: TestimonialCard[] = [];
// Section 12
export const educationCardList: EducationCard[] = [
    {
        id: "1",
        title: 'Education 1',
        txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> merupakan suplemen efektif untuk meningkatkan performa olahraga sekaligus meningkatkan massa otot dan bebas lemak.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> dibuat secara alami dengan menggunakan asam amino glisin dan arginin, produk ini tidak menimbulkan efek samping berbahaya.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> memiliki pilihan rasa yang unik <span class="font-normal">tropical fruit, jambu, apel hijau, peach, mix berry, dan permen karet</span> jadi <small class="font-bold text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];