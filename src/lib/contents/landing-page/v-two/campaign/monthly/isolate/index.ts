import type { CocokCard } from "$typings/v-one/section-three.type";
import type { RasaRoundedFull } from "$typings/v-two/section-four.type";
import type { ManfaatCardList } from '$typings/v-two/section-five.type';
import type { IdealCardList } from '$typings/v-one/section-seven.type';
import type { TestimonialCard } from '$typings/v-one/section-eleven.type';
import type { EducationCard } from '$typings/v-one/section-twelve.type';
import type { BeforeAfterCard } from '$typings/v-one/section-sixteen.type';

import Icon1 from '$images/product/pro-isolate/icons/icon-01.png'
import Icon2 from '$images/product/pro-isolate/icons/icon-02.png'
import Icon3 from '$images/product/pro-isolate/icons/icon-03.png'
import Icon4 from '$images/product/pro-isolate/icons/icon-04.png'
import Icon5 from '$images/product/pro-isolate/icons/icon-05.png'

import Rasa1 from '$images/product/pro-isolate/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-isolate/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-isolate/rasa/rasa-3.png'
import Rasa4 from '$images/product/pro-isolate/rasa/rasa-4.png'
import Rasa5 from '$images/product/pro-isolate/rasa/rasa-5.png'
import Rasa6 from '$images/product/pro-isolate/rasa/rasa-6.png'

import Testi1 from '$images/product/pro-isolate/testimonial/testi-01.png'
import Testi2 from '$images/product/pro-isolate/testimonial/testi-02.png'
import Testi3 from '$images/product/pro-isolate/testimonial/testi-03.png'
import Testi4 from '$images/product/pro-isolate/testimonial/testi-04.png'

import BeforeAfter1 from '$images/before-after/before-after-web-03.webp'
import BeforeAfter2 from '$images/before-after/before-after-web-04.webp'
import BeforeAfter3 from '$images/before-after/before-after-web-07.webp'
import BeforeAfter4 from '$images/before-after/before-after-web-08.webp'

import Global1 from '$images/global/protein-supplement.png'
import Global2 from '$images/global/corn.png'
import Global3 from '$images/global/discount.png'
import Global4 from '$images/global/fat.png'
import Global5 from '$images/global/flavor.png'
import Global6 from '$images/global/protect.png'
import Global7 from '$images/global/eating.png'
import Global8 from '$images/global/halal.png'

import Feat1 from '$images/global/1.png'
import Feat2 from '$images/global/2.png'
import Feat3 from '$images/global/3.png'
import Feat4 from '$images/global/4.png'
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Fitness",
        linkImg: Icon1,
        altImg: "Fitness",
        txtDesc: "Sering kelelahan ketika sedang melakukan olahraga",
    },
    {
        id: "2",
        title: "Protein",
        linkImg: Icon2,
        altImg: "Protein",
        txtDesc: "Kekurangan asupan protein, pada tubuh",
    },
    {
        id: "3",
        title: "Fat Person",
        linkImg: Icon3,
        altImg: "Fat Person",
        txtDesc: "Ingin melakukan program diet",
    },
    {
        id: "4",
        title: "Weight",
        linkImg: Icon4,
        altImg: "Weight",
        txtDesc: "Melakukan recovery atau pemulihan otot",
    },
    {
        id: "5",
        title: "Meal",
        linkImg: Icon5,
        altImg: "Meal",
        txtDesc: "Sudah banyak makanan, berat badan belum ideal",
    },
];
// Section 4
export const cocokCardOtherList: CocokCard[] = [
    {
        id: "1",
        title: "Asupan Protein",
        linkImg: "/assets/global/fat-person.png",
        altImg: "Fat Person",
        txtDesc: "Orang yang ingin menambah asupan protein",
    },
    {
        id: "2",
        title: "Pemula Olahraga",
        linkImg: "/assets/global/fitness.png",
        altImg: "Fitness",
        txtDesc: "Pemula Olahraga",
    },
    {
        id: "3",
        title: "Body Builder",
        linkImg: "/assets/global/protein.png",
        altImg: "Protein",
        txtDesc: "Body Builder Profesional",
    },
    {
        id: "4",
        title: "Tidak Punya Waktu",
        linkImg: "/assets/global/weight.png",
        altImg: "Weight",
        txtDesc: "Yang tidak punya waktu menyiapkan makanan berpotein",
    },
];

export const rasaList: RasaRoundedFull[] = [
    {
        id: "1",
        title: 'Chocolate <br> Soul',
        linkImg: Rasa1,
        altImg: "RasaSatu",
    },
    {
        id: "2",
        title: 'Honey <br> Banana',
        linkImg: Rasa2,
        altImg: "RasaDua",
    },
    {
        id: "3",
        title: 'Taro <br> Velvet',
        linkImg: Rasa3,
        altImg: "RasaTiga",
    },
    {
        id: "4",
        title: 'Indian <br> Mango',
        linkImg: Rasa4,
        altImg: "RasaEmpat",
    },
    {
        id: "5",
        title: 'Banana <br> Coffee',
        linkImg: Rasa5,
        altImg: "RasaLima",
    },
    {
        id: "6",
        title: 'Strawberry <br> Parfait',
        linkImg: Rasa6,
        altImg: "RasaEnam",
    },
];
// Section 6
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'KADAR PROTEIN TINGGI',
        linkImg: Global1,
        altImg: "ProteinSupplement",
        txtDesc: 'Kalian bisa dapetin 27gram/sajian protein untuk membantu pembentukan <b>otot lebih berisi</b>.'
    },
    {
        id: "2",
        title: 'PEMANIS ALAMI JAGUNG',
        linkImg: Global2,
        altImg: "Corn",
        txtDesc: 'Kami menggunakan pemanis alami jagung yang pastinya <b>Zero Calories</b>.'
    },
    {
        id: "3",
        title: 'HARGA TERJANGKAU',
        linkImg: Global3,
        altImg: "Discount",
        txtDesc: 'Dengan kualitas yang juara, <b>PRO ISOLATE</b> ini bisa kalian beli dengan <b>harga yang sangat terjangkau</b>.'
    },
    {
        id: "4",
        title: 'RENDAH LEMAK',
        linkImg: Global4,
        altImg: "Fat",
        txtDesc: 'Buat kalian yang mau <b>nurunin berat badan</b> atau mau bentuk body goals, ini cocok banget buat kamu.'
    },
    {
        id: "5",
        title: 'RASA YANG ENAK',
        linkImg: Global5,
        altImg: "Flavor",
        txtDesc: 'Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh.'
    },
    {
        id: "6",
        title: 'AMAN DIKONSUMSI',
        linkImg: Global6,
        altImg: "Protect",
        txtDesc: 'Jangan lupa, PRO ISOLATE juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
    },
    {
        id: "7",
        title: 'COCOK UNTUK SEMUA',
        linkImg: Global7,
        altImg: "Eating",
        txtDesc: 'Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang pengen bentuk badan ideal boleh banget.'
    },
    {
        id: "8",
        title: 'HALAL DAN SUDAH BPOM',
        linkImg: Global8,
        altImg: "Halal",
        txtDesc: 'MUSCLE FIRST sudah berstandar international dan banyak banget keunggulan nya, udah deh buruan beli.'
    },
];
// Section 7
export const idealList: IdealCardList[] = [
    {
        id: 1,
        title: 'FeatOne',
        linkImg: Feat1,
        altImg: "FeatOne",
        txtDesc: 'Terbuat dari <strong>ekstrak susu sapi murni</strong> yang mengandung protein tinggi namun rendah kalori dan lemak'
    },
    {
        id: 2,
        title: 'FeatTwo',
        linkImg: Feat2,
        altImg: "FeatTwo",
        txtDesc: 'Dengan konsumsi protein rutin, <strong>metabolisme</strong> tubuh berjalan lebih baik dan membuat kenyang lebih lama.'
    },
    {
        id: 3,
        title: 'FeatThree',
        linkImg: Feat3,
        altImg: "FeatThree",
        txtDesc: 'Lemak jadi tidak mudah menumpuk, membuat badan terlihat <strong>lebih ideal</strong> dari sebelumnya.'
    },
    {
        id: 4,
        title: 'FeatFour',
        linkImg: Feat4,
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
        txtDesc: '<span class="font-bold text-amber-500">Pro Isolate</span> merupakan suplemen yang cocok untuk diet serta menambah asupan protein bagi kamu yang ingin menjaga bentuk badan ideal.',
    },
    {
        id: "2",
        title: 'Education 2',
        txtDesc: '<span class="font-bold text-amber-500">Pro Isolate</span> Dibuat secara alami dengan menggunakan pemanis alami dari jagung, produk ini tidak menimbulkan efek samping berbahaya.',
    },
    {
        id: "3",
        title: 'Education 3',
        txtDesc: '<span class="font-bold text-amber-500">Pro Isolate</span> memiliki pilihan rasa yang unik, ada 5 rasa jumlahnya seperti <span class="font-normal">chocolate soul, honey banana, taro velvet, banana coffee, dan strawberry parfait</span> jadi <small class="font-bold text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. ',
    },
    {
        id: "4",
        title: 'Education 4',
        txtDesc: '<span class="font-bold text-amber-500">Pro Isolate</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.',
    },
];