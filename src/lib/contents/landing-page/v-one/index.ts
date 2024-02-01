import type { CocokCard } from "$typings/v-one/section-three.type";
import type { RasaRoundedFull } from "$typings/v-one/section-four.type";
import type { ManfaatCardList } from '$typings/v-one/section-six.type';
import type { IdealCardList } from '$typings/v-one/section-seven.type';
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Fitness",
        linkImg: "/assets/global/fitness.png",
        altImg: "Fitness",
        txtDesc: "Sering kelelahan ketika sedang melakukan olahraga",
    },
    {
        id: "2",
        title: "Protein",
        linkImg: "/assets/global/protein.png",
        altImg: "Protein",
        txtDesc: "Kekurangan asupan protein, pada tubuh",
    },
    {
        id: "3",
        title: "Fat Person",
        linkImg: "/assets/global/fat-person.png",
        altImg: "Fat Person",
        txtDesc: "Memiliki berat badan berlebih",
    },
    {
        id: "4",
        title: "Weight",
        linkImg: "/assets/global/weight.png",
        altImg: "Weight",
        txtDesc: "Memiliki berat badan yang kurang ideal",
    },
    {
        id: "5",
        title: "Meal",
        linkImg: "/assets/global/meal.png",
        altImg: "Meal",
        txtDesc: "Sudah banyak makanan, berat badan belum ideal",
    },
];
// Section 4
export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Chocolate <br> Soul',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-1.png",
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Honey <br> Banana',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-2.png",
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Taro <br> Velvet',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-3.png",
        altImg: "RasaTiga",
    },
    {
        id: "4",
        title: 'Indian <br> Mango',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-4.png",
        altImg: "RasaEmpat",
    },
    {
        id: "5",
        title: 'Banana <br> Coffee',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-5.png",
        altImg: "RasaLima",
    },
    {
        id: "6",
        title: 'Strawberry <br> Parfait',
        linkImg: "/assets/product/pro-isolate/rasa/rasa-6.png",
        altImg: "RasaEnam",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'KADAR PROTEIN TINGGI',
        linkImg: "/assets/global/protein-supplement.png",
        altImg: "ProteinSupplement",
        txtDesc: 'Kalian bisa dapetin 27gram/sajian protein untuk membantu pembentukan <b>otot lebih berisi</b>.'
    },
    {
        id: "2",
        title: 'PEMANIS ALAMI JAGUNG',
        linkImg: "/assets/global/corn.png",
        altImg: "Corn",
        txtDesc: 'Kami menggunakan pemanis alami jagung yang pastinya <b>Zero Calories</b>.'
    },
    {
        id: "3",
        title: 'HARGA TERJANGKAU',
        linkImg: "/assets/global/discount.png",
        altImg: "Discount",
        txtDesc: 'Dengan kualitas yang juara, <b>PRO ISOLATE</b> ini bisa kalian beli dengan <b>harga yang sangat terjangkau</b>.'
    },
    {
        id: "4",
        title: 'RENDAH LEMAK',
        linkImg: "/assets/global/fat.png",
        altImg: "Fat",
        txtDesc: 'Buat kalian yang mau <b>nurunin berat badan</b> atau mau bentuk body goals, ini cocok banget buat kamu.'
    },
    {
        id: "5",
        title: 'RASA YANG ENAK',
        linkImg: "/assets/global/flavor.png",
        altImg: "Flavor",
        txtDesc: 'Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh.'
    },
    {
        id: "6",
        title: 'AMAN DIKONSUMSI',
        linkImg: "/assets/global/protect.png",
        altImg: "Protect",
        txtDesc: 'Jangan lupa, PRO ISOLATE juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
    },
    {
        id: "7",
        title: 'COCOK UNTUK SEMUA',
        linkImg: "/assets/global/eating.png",
        altImg: "Eating",
        txtDesc: 'Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang pengen bentuk badan ideal boleh banget.'
    },
    {
        id: "8",
        title: 'HALAL DAN SUDAH BPOM',
        linkImg: "/assets/global/halal.png",
        altImg: "Halal",
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