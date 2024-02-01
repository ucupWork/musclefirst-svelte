import type { RasaRoundedFull } from "$typings/v-two/section-four.type";
import type { ManfaatCardList } from '$typings/v-two/section-five.type';
import type { CocokCard } from "$typings/v-one/section-three.type";
import type { TestimonialCard } from "$typings/v-two/section-seven.type";

import Icon1 from '$images/product/pro-gainer/icons/icon-01.png'
import Icon2 from '$images/product/pro-gainer/icons/icon-02.png'
import Icon3 from '$images/product/pro-gainer/icons/icon-03.png'
import Icon4 from '$images/product/pro-gainer/icons/icon-04.png'
// import Icon5 from '$images/product/pro-gainer/icons/icon-05.png'

import Manfaat1 from '$images/product/pro-gainer/land-page/01/icons/icon-01.webp'
// import Manfaat2 from '$images/product/pro-gainer/land-page/01/icons/icon-02.webp'
import Manfaat3 from '$images/product/pro-gainer/land-page/01/icons/icon-03.webp'
import Manfaat4 from '$images/product/pro-gainer/land-page/01/icons/icon-04.webp'
import Manfaat5 from '$images/product/pro-gainer/land-page/01/icons/icon-05.webp'
import Manfaat6 from '$images/product/pro-gainer/land-page/01/icons/icon-06.webp'
import Manfaat7 from '$images/product/pro-gainer/land-page/01/icons/icon-07.webp'
import Manfaat8 from '$images/product/pro-gainer/land-page/01/icons/icon-08.webp'
import Manfaat9 from '$images/product/pro-gainer/land-page/01/icons/icon-09.webp'

import Rasa1 from '$images/product/pro-gainer/rasa/rasa-1.png'
import Rasa2 from '$images/product/pro-gainer/rasa/rasa-2.png'
import Rasa3 from '$images/product/pro-gainer/rasa/rasa-3.png'
import Rasa4 from '$images/product/pro-gainer/rasa/rasa-4.png'
import Rasa5 from '$images/product/pro-gainer/rasa/rasa-5.png'

import Global1 from '$images/global/protein-supplement.png'
import Global2 from '$images/global/corn.png'
import Global3 from '$images/global/discount.png'
import Global4 from '$images/global/fat.png'
import Global5 from '$images/global/flavor.png'
import Global6 from '$images/global/protect.png'
import Global7 from '$images/global/eating.png'
import Global8 from '$images/global/halal.png'

import Testi1 from '$images/product/pro-gainer/testimonial/testi-01.png'
import Testi2 from '$images/product/pro-gainer/testimonial/testi-02.png'
import Testi3 from '$images/product/pro-gainer/testimonial/testi-03.png'
import Testi4 from '$images/product/pro-gainer/testimonial/testi-04.png'
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
// Section 5
export const manfaatList: ManfaatCardList[] = [
    {
        id: "1",
        title: 'Membantu menurunkan berat badan',
        linkImg: Manfaat1,
        altImg: "ProteinSupplement",
        txtDesc: 'Buat kalian yang mau nurunin berat badan atau mau bentuk body goals, ini cocok banget buat kamu.'
    },
    {
        id: "2",
        title: 'Harga ekonomis cocok buat semua kalangan',
        linkImg: Manfaat8,
        altImg: "Corn",
        txtDesc: 'Dengan kualitas yang juara, <span class="font-bold">PRO WHEY</span> Strawberry ini bisa kalian beli dengan harga yang sangat terjangkau.'
    },
    {
        id: "3",
        title: 'Rasa yang pasti enak!',
        linkImg: Manfaat3,
        altImg: "Discount",
        txtDesc: 'Rasa nya enak dan cocok dengan lidah Indonesia, tau kan kalo masalah RASA <span class="font-bold uppercase">Muscle First</span> PALING JUARA!!'
    },
    {
        id: "4",
        title: 'Pastinya Halal dan BPOM',
        linkImg: Manfaat9,
        altImg: "Fat",
        txtDesc: '<span class="font-bold uppercase">Muscle First</span> sudah bersertifikasi HALAL dan BPOM dan ISO, udah deh buruan beli!!'
    },
    {
        id: "5",
        title: 'Tanpa pemanis buatan',
        linkImg: Manfaat4,
        altImg: "Flavor",
        txtDesc: 'Eitss, meskipun rasanya enak, <span class="font-bold uppercase">Muscle First</span> menggunakan pemanis alami stevia yang pastinya Zero Calories.'
    },
    {
        id: "6",
        title: 'Bisa dikonsumsi dengan banyak cara',
        linkImg: Manfaat5,
        altImg: "Protect",
        txtDesc: 'Selain dapat di minum, pro whey juga bisa di kreasikan menjadi kue, oatmeal ataupun granola bar'
    },
    {
        id: "7",
        title: 'Aman untuk lambung',
        linkImg: Manfaat6,
        altImg: "Eating",
        txtDesc: 'Konsumsi whey protein <span class="font-bold uppercase">Muscle First</span> ga bikin perut kembung dan begah karena aman buat lambung.'
    },
    {
        id: "8",
        title: 'No amino spiking',
        linkImg: Manfaat7,
        altImg: "Halal",
        txtDesc: 'Produk <span class="font-bold uppercase">Muscle First</span> bebas Amino Spiking sehingga aman untuk dikonsumsi.'
    },
];
// Section 3
export const cocokCardList: CocokCard[] = [
    {
        id: "1",
        title: "Waktu Makan",
        linkImg: Icon1,
        altImg: "Waktu Makan",
        txtDesc: "Terlalu sibuk hingga tidak ada waktu makan",
    },
    {
        id: "2",
        title: "Berat Badan",
        linkImg: Icon2,
        altImg: "Berat Badan",
        txtDesc: "Ingin membantu pembentukan otot tubuh",
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
        title: "Rendah Lemak",
        linkImg: Icon4,
        altImg: "Rendah Lemak",
        txtDesc: "Ingin membantu pembentukan otot tubuh namun tetap rendah lemak",
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
// Section 7
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