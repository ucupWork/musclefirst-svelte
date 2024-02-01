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

import Icon1 from '$images/product/pro-collafit/icons/icon-01.png'
import Icon2 from '$images/product/pro-collafit/icons/icon-02.png'
import Icon3 from '$images/product/pro-collafit/icons/icon-03.png'
import Icon4 from '$images/product/pro-collafit/icons/icon-04.png'

import Rasa1 from '$images/product/pro-collafit/rasa/rasa-1.png'
// Ingredients
export const servingHead: ServingHead[] = [
    {
        id: "1",
        title: 'Servings Size / Takaran Saji',
        gram: '20',
    },
    {
        id: "2",
        title: 'Servings per package / Jumlah Sajian per Kemasan',
        sachet: '11',
    },
];
export const amountServing: AmountServing[] = [
    {
        id: "1",
        title: 'Total of Energy / Energi Total',
        kkal: '80',
    },
    {
        id: "2",
        title: 'Energy from Fat / Energi dari lemak',
        kkal: '15',
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
        title: 'Cholesterol / Kolesterol',
        mgram: '0',
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
        gram: '4',
        percent: '6',
    },
    {
        id: "5",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '11',
        percent: '3',
    },
    {
        id: "6",
        title: 'Sugar / Gula',
        gram: '0',
        percent: '0',
    },
    {
        id: "7",
        title: 'Salt (Sodium) / Garam (Natrium)',
        mgram: '10',
        percent: '1',
    },
];
export const vitaminList: VitaminList[] = [
    {
        id: "1",
        alignItem: 'text-left',
        title: 'Vitamin C',
        percent: '70%',
    },
];
export const bcaaList: BcaaList[] = [];

export const nutritionDescription: NutritionDescription = {
        id: "1",
        description: '*Persen AKG berdasarkan kebutuhan energi 2150kkal <br> Kebutuhan energi anda mungkin lebih tinggi atau lebih rendah',
};
export const ingredientsDescription: IngredientsDescription = {
        id: "1",
        description: 'Ekstrak Buah Dan Sayur, Tripeptida Kolagen Ikan, Bit Merah Bubuk, Bubuk Aneka Buah Beri, L-Glutation, Perisa Artifisial Sakura, Antioksidan Asam Askorbat, Antikempal Silikon Dioksida, Pemanis Buatan Sukralosa. / Fruit And Vegetable Extract, Fish Collagen Tripeptide, Red Beet Powder, Mix Berries Powder, L-Glutathione, Cherry Blossom Artificial Flavor, Sakura Artificial Flavor, Ascorbic Acid Antioxidant, Silicon Dioxide Anticaking, Artificial Sweetener Sucralose.',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Tuangkan 1 sachet ke dalam 150 mL air, aduk hingga merata. / Pour 1 sachet into 150 mL water, then stir until it dissolves.',
};
export const storage: Storage = {
        id: "1",
        description: 'Simpan di tempat sejuk dibawah suhu 28C, jauhkan dari sinar matahari langsung dan jangkauan anak-anak / Store at cool place under 28C, keep out from direct sunlight and children',
};
export const warning: Warning = {
        id: "1",
        description: 'Tidak disarankan untuk dikonsumsi oleh anak-anak, ibu hamil dan ibu menyusui / Not Recommended to be consumed by children, pregant women, and breastfeeding mother',
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Rambut rontok dan mengalami penuaan dini",
        linkImg: Icon1,
        altImg: "Rambut rontok dan mengalami penuaan dini",
        txtDesc: "Rambut rontok dan mengalami penuaan dini",
    },
    {
        id: "2",
        title: "Sering mengalami nyeri sendi",
        linkImg: Icon2,
        altImg: "Sering mengalami nyeri sendi",
        txtDesc: "Sering mengalami nyeri sendi",
    },
    {
        id: "3",
        title: "Selalu merasa lelah dan kurang stamina",
        linkImg: Icon3,
        altImg: "Selalu merasa lelah dan kurang stamina",
        txtDesc: "Selalu merasa lelah dan kurang stamina",
    }
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Mix Berry',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'Marine Collagen Tripeptide',
        txtDesc: '<span class="font-bold">Pro Collafit</span> Bentuk kolagen dari hewan laut yang tinggi protein dan mudah diserap oleh tubuh dibandingkan dengan kolagen hewan lainnya.'
    },
    {
        id: "2",
        title: ' L-Glutathione Japan',
        txtDesc: 'Berkualitas terbaik dengan kemurnian tinggi yang membantu dalam peningkatan sistem kekebalan imun, melindungi sel dari kerusakan akibat radikal bebas, dan memperbaiki kualitas kulit.'
    },
    {
        id: "3",
        title: 'Pemanis Alami',
        txtDesc: 'Menggunakan pemanis alami dari sukrosa atau gula tebu yang memiliki sedikit kalori, sehingga relatif aman untuk penderita diabetes dan kesehatan gigi.'
    },
    {
        id: "4",
        title: 'Memiliki Banyak Manfaat',
        txtDesc: '<span class="font-bold">Pro Collafit</span> mampu menjaga elastisitas kulit, menyamarkan stretch mark, menyamarkan bekas luka atau jerawat, menjaga penuaan dini, menyehatkan rambut.'
    },
    {
        id: "5",
        title: 'Cocok Untuk Semua',
        txtDesc: 'Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang ingin mendaptakan kebutuhan kolagen yang cukup.'
    },
    {
        id: "6",
        title: 'Bebas Lemak',
        txtDesc: 'Buat yang mau diet tapi ingin tetap menjaga kesehatan kulit, <span class="font-bold">Pro Collafit</span> bebas lemak dan rendah kalori.'
    },
    {
        id: "7",
        title: 'Harga Terjangkau',
        txtDesc: 'Dengan kualitas yang juara, <span class="font-bold">Pro Collafit</span> ini bisa kalian beli dengan harga yang sangat terjangkau.'
    },
    {
        id: "8",
        title: 'HALAL DAN BPOM',
        txtDesc: 'Selain halal MUI dan BPOM, <span class="font-bold">MUSCLE FIRST</span> juga sudah bersertifikat GMP, HAACP, ISO 22000, dan berstandar internasional.'
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
        person: []
    },
];
// Section 11
export const testimonialCardList: TestimonialCard[] = [
    {
        id: "1",
        title: 'Testimonial Review 1',
        altImg: "Testimonial 1",
    },
    {
        id: "2",
        title: 'Testimonial Review 2',
        altImg: "Testimonial 2",
    },
    {
        id: "3",
        title: 'Testimonial Review 3',
        altImg: "Testimonial 3",
    },
    {
        id: "4",
        title: 'Testimonial Review 4',
        altImg: "Testimonial 4",
    },
];
// Section 12
export const educationCardList: EducationCard[] = [
    {
        id: "1",
        title: 'Education 1',
        txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> terbuat dari bahan utama marine collagen yang berasal dari kan yang pastinya halal, dan berguna untuk merawat kesehatan kulit.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> adalah jenis <span class="text-pink-500 font-italic font-bold">kolagen tripeptide</span>, yang merupakan jenis dengan penyerapan terbaik dibandingkan <span class="text-pink-500 font-italic font-bold">kolagen hydrolized</span> dan <span class="text-pink-500 font-italic font-bold">kolagen peptide</span>.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> mengandung <span class="text-pink-500 font-italic font-bold">L-Glutathione Japan</span> yang diproduksi dari jepang yang memiliki kemurnian dan kualitas tinggi',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> memiliki vitamin C dan ekstrak buah yang meningkatkan efektivitas peningkatan imun tubuh dan juga kulit.',
    },
];