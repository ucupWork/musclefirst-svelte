import type { CocokCard } from "$typings/v-one/section-three.type";
import type { RasaRoundedFull } from "$typings/v-one/section-four.type";
import type { ManfaatCardList } from '$typings/v-one/section-six.type';
import type { IdealCardList } from '$typings/v-one/section-seven.type';

import FeatOne from '$images/product/pro-nrgy/1.png'
import FeatTwo from '$images/product/pro-nrgy/2.png'
import FeatThree from '$images/product/pro-nrgy/5.png'
import FeatFour from '$images/product/pro-nrgy/4.png'
import FeatFive from '$images/product/pro-nrgy/6.png'
import FeatSix from '$images/product/pro-nrgy/3.png'
    
import IconOne from '$images/product/pro-nrgy/2/lazy.png'
import IconTwo from '$images/product/pro-nrgy/2/coffee.png'
import IconThree from '$images/product/pro-nrgy/2/sleepy.png'
import IconFour from '$images/product/pro-nrgy/2/no-coffee-cups.png'
import IconFive from '$images/product/pro-nrgy/2/run.png'
import IconSix from '$images/product/pro-nrgy/2/game-console.png'
import IconSeven from '$images/product/pro-nrgy/2/fear.png'
import IconEight from '$images/product/pro-nrgy/2/sleep.png'

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
        title: 'Saturated Fat / Lemak Jenuh',
        gram: '0',
        percent: '0',
    },
    {
        id: "3",
        title: 'Protein / Protein',
        gram: '1',
        percent: '1',
    },
    {
        id: "4",
        title: 'Total Carbohydrate / Karbohidrat Total',
        gram: '0',
        percent: '0',
    },
    {
        id: "5",
        title: 'Dietory Fiber / Serat Pangan',
        gram: '0',
        percent: '0',
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
        description: 'Servings Size / Takaran Saji : 15G <br> Servings per package Jumlah Sajian per Kemasan : 15 Sachet',
};
export const servingSuggestion: ServingSuggestion = {
        id: "1",
        description: 'Takaran Saji / Servings Size : 15G <br> Jumlah Sajian per Kemasan / Servings per package : 15 Sachet',
};
export const storage: Storage = {
        id: "1",
        description: 'Takaran Saji / Servings Size : 15G <br> Jumlah Sajian per Kemasan / Servings per package : 15 Sachet',
};
export const warning: Warning = { 
    id: "",
    description: ""
};
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "RASA ENAK, TANPA DIBUAT-BUAT",
        linkImg: FeatOne,
        altImg: "RASA ENAK",
        txtDesc: "Rasa yang enak dan menyegarkan, PRO NRGY bebas dari pemanis buatan dan pewarna buatan. PRO NRGY hanya menggunakan pemanis natural stevia.",
    },
    {
        id: "2",
        title: "RENDAH KALORI, NOL GULA",
        linkImg: FeatTwo,
        altImg: "RENDAH KALORI",
        txtDesc: "Sangat rendah kalori, dan bebas gula, PRO NRGY sangat aman bagi kamu yang sedang menjalani program diet & pastinya juga aman bagi penderita diabetes.",
    },
    {
        id: "3",
        title: "ENERGI JERNIH, TAHAN LAMA",
        linkImg: FeatThree,
        altImg: "ENERGI JERNIH",
        txtDesc: "Kamu tidak akan hanya merasakan tambahan energi dalam 1 jam pertama tetapi energi boost yang diberikan PRO NRGY sangatlah mulus dan tahan selama beberapa jam",
    },
    {
        id: "4",
        title: "FOCUS TAK TERPECAH",
        linkImg: FeatFour,
        altImg: "FOCUS TAK TERPECAH",
        txtDesc: "PRO NRGY bantu ciptakan fokus yang tak terpecahkan ! <br> NGEGAME DAN OLAHRAGA LEBIH LAMA TANPA TAKUT FOKUS HILANG",
    },
    {
        id: "5",
        title: "LELAH ATAU GELISAH? ITU DULU",
        linkImg: FeatFive,
        altImg: "LELAH ATAU GELISAH",
        txtDesc: "Kamu pasti sering merasakan lelah atau gelisah yang berlebih setelah meminum energy drink pada umumnya? Dengan PRO NRGY ga lagi deh kamu ngalamin hal ini ataupun tergesa-gesa.",
    },
    {
        id: "6",
        title: "ENERGI JERNIH, TAHAN LAMA",
        linkImg: FeatSix,
        altImg: "ENERGI JERNIH",
        txtDesc: "Untuk kamu yang sensitif sama kafein pasti kamu sering menghindari minuman berkafein karena susah tidur di malam hari. Nah, Kandungan L-Theanine pada PRO NRGY ini akan mengantisipasi hal ini.",
    },
];
// Section 4
export const butuhCardList: CocokCard[] = [
    {
        id: "1",
        title: 'KAMU YANG GABUTAN',
        linkImg: IconOne,
        altImg: "GABUTAN",
        txtDesc: 'Mau ngapain aja males banget, bangun dari kasur aja males gimana yang lain?.'
    },
    {
        id: "2",
        title: 'KAMU YANG GA SUKA NGOPI',
        linkImg: IconTwo,
        altImg: "SUKA NGOPI",
        txtDesc: 'Mau ngopi biar semangat tapi benci sama rasanya.'
    },
    {
        id: "3",
        title: 'KAMU YANG NGANTUK TERUS',
        linkImg: IconThree,
        altImg: "NGANTUK TERUS",
        txtDesc: 'Setiap bangun pasti langsung ngantuk lagi, jadi males ngapain aja.'
    },
    {
        id: "4",
        title: 'KAMU YANG GA BANGET SAMA KAFEIN',
        linkImg: IconFour,
        altImg: "GA BANGET SAMA KAFEIN",
        txtDesc: 'Pasti jadi ga bisa tidur kalau kena kafein dikit aja'
    },
    {
        id: "5",
        title: 'KAMU YANG SUKA OLAHRAGA',
        linkImg: IconFive,
        altImg: "SUKA OLAHRAGA",
        txtDesc: 'Mau olahraga tapi ga ada tenaga atau lemes?'
    },
    {
        id: "6",
        title: 'KAMU YANG HOBI NGEGAME, TAPI KALAH MULU',
        linkImg: IconSix,
        altImg: "HOBI NGEGAME",
        txtDesc: 'Hobinya sih ngegame tapi gagal fokus terus, kapan menang nya?'
    },
    {
        id: "7",
        title: 'KAMU YANG HOBI REBAHAN',
        linkImg: IconSeven,
        altImg: "HOBI REBAHAN",
        txtDesc: 'Boro-boro olahraga deh, ga semangat, hobinya rebahan bukan yang lain.'
    },
    {
        id: "8",
        title: 'KAMU YANG GA ADA MOTIVASI',
        linkImg: IconEight,
        altImg: "GA ADA MOTIVASI",
        txtDesc: 'Motivasi buat bangun di pagi hari noneksisten.'
    },
];