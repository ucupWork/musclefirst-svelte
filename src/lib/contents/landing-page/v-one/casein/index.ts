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

import Icon1 from '$images/product/pro-casein/icons/icon-01.png'
import Icon2 from '$images/product/pro-casein/icons/icon-02.png'
import Icon3 from '$images/product/pro-casein/icons/icon-03.png'
import Icon4 from '$images/product/pro-casein/icons/icon-04.png'

import Rasa1 from '$images/product/pro-casein/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-casein/rasa/rasa-2.png'

import Testi1 from '$images/product/pro-casein/testimonial/testi-01.webp'
import Testi2 from '$images/product/pro-casein/testimonial/testi-02.webp'
import Testi3 from '$images/product/pro-casein/testimonial/testi-03.webp'
import Testi4 from '$images/product/pro-casein/testimonial/testi-04.webp'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '35',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '25',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '120',
    },
];
export const ingredientsList: IngredientsList[] = [
    {
        id: "1",
        title: 'Total of Fat / Lemak Total',
        gram: '1',
        percent: '1',
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
        percent: '1',
    },
    {
        id: "4",
        title: 'Protein / Protein',
        gram: '24',
        percent: '40',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '0',
        percent: '0',
    },
    {
        id: "6",
        title: 'Dietory Fiber / Serat Pangan',
        gram: '4',
        percent: '17',
    },
    {
        id: "7",
        title: 'Sugar / Gula',
        gram: '0',
        percent: '0',
    },
    {
        id: "8",
        title: 'Salt (Sodium) / Garam (Natrium)',
        gram: '160',
        percent: '11',
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
        description: 'Bubuk Whey, Konsentrate Protein Whey, Bubuk Coklat, Natrium Caseinat, Bubuk Oat, Bubuk Telur, Bubuk Susu Skim, Ekstrak Malt, Perisa Coklat, Maltodekstrin, Dekstrosa Monohidrat. / Whey Powder, Whey Protein Concentrate, Cocoa Powder, Sodium Caseinat, Oat Powder, Egg Powder, Skim Milk Powder, Malt Extract, Chocolate Flavour, Maltodextrine, Dextrose Monohydrate.',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Simpan di tempat sejuk di bawah suhu 28°C, Jauhkan dari sinar matahari langsung dan jangkauan anak-anak. / Store at cool place under 28°C, keep out from direct sunlight and children.',
};
export const storage: Storage = {
        id: "1",
        description: 'Larutkan ( 1 scoop 35g ) dalam 150 ml air. / Dissolve ( 1 scoop 35g ) in 150 ml water.',
};
export const warning: Warning = { 
    id: "1",
    description: "Informasi yang tersedia di website musclefirst.co.id tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website Musclefirst"
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Intermittent",
        linkImg: Icon1,
        altImg: "Intermittent",
        txtDesc: "Menahan lapar saat Intermittent Fasting",
    },
    {
        id: "2",
        title: "Menaikkan Massa Otot",
        linkImg: Icon2,
        altImg: "Menaikkan Massa Otot",
        txtDesc: "Ingin menaikkan massa otot",
    },
    {
        id: "3",
        title: "Lemak Berlebih",
        linkImg: Icon3,
        altImg: "Lemak Berlebih",
        txtDesc: "Memiliki kadar lemak berlebih",
    },
    {
        id: "4",
        title: "Laju Metabolisme",
        linkImg: Icon4,
        altImg: "Laju Metabolisme",
        txtDesc: "Tingkatkan laju metabolisme tubuh",
    },
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Chocolate <br> Soul',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Banana <br> Splash',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'Tinggi Asupan Protein',
        txtDesc: 'Asupan <span class="font-bold uppercase">protein tinggi</span> bisa menurunkan kadar ghrelin sebagai hormon rasa lapar.'
    },
    {
        id: "2",
        title: 'Harga Terjangkau',
        txtDesc: 'Dengan kualitas yang juara, <span class="font-bold uppercase">PRO Casein</span> ini bisa kalian beli dengan harga yang sangat terjangkau.'
    },
    {
        id: "3",
        title: 'Kenyang Lebih Lama',
        txtDesc: 'Dengan metode slow-release, protein dicerna secara perlahan, maka <span class="font-bold uppercase">casein</span> dapat membantu menahan rasa lapar.'
    },
    {
        id: "4",
        title: 'Halal Dan BPOM',
        txtDesc: '<span class="font-bold uppercase">MUSCLE FIRST</span> sudah berstandar international dan banyak banget keunggulan nya, udah deh buruan beli.'
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
        txtDesc: '<span class="font-bold text-pink-500">Pro Casein</span> efektif membangun massa otot, menambah kekuatan otot, dan meningkatkan metabolisme tubuh dengan maksimal.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-pink-500">Pro Casein</span> terbuat alami dari gumpalan kasein yang diolah menjadi bubuk protein dan ditambahkan ke dalam produk susu protein.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-pink-500">Pro Casein</span> memiliki pilihan rasa yang unik <span class="font-normal">Cokelat dan Pisang</span> jadi <small class="font-bold text-pink-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-pink-500">Pro Casein</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];