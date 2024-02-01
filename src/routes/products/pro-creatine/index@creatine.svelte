<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';

    export const load: Load = async({ url }: LoadEvent) => {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            currentPage: url.pathname,
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
	import Modal from 'svelte-simple-modal';
    import { browser } from '$app/env';
    import { modal, shopeepromo } from '$stores/index'
    import { IndexAgen } from '$components/section/list-agent/index';
    import { ModalCreatineIndex } from '$section/product/index';
    // Section
    import { 
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionEight,
        SectionNine,
        SectionTen,
        SectionEleven,
        SectionTwelve,
        SectionThirteen,
        SectionFifteen,
        SectionCertified,
        SectionDisclaimer
    } from '$components/layout-lp/v-one/index';
    // Content
	import { 
        cocokCardList, 
        rasaList, 
        manfaatList, 
        idealList, 
        testimonialCardList, 
        educationCardList 
    } from '$contents/landing-page/v-one/creatine/index';
    import { certifiedList } from '$contents/product-page/list-certified';

    import BannerJumbotron from '$images/product/pro-creatine/banner-jumbotron.webp';
    import CreatineOne from '$images/product/pro-creatine/produk-01-1.webp';
    import CreatineTwo from '$images/product/pro-creatine/produk-03.webp';
    import EducationImg from '$images/product/pro-creatine/optimize/education-product-img.webp';
    import FeatureImage from  '$images/product/pro-creatine/produk-02-3.webp';
    
    let pilihButton: number = 3;
    let videoSection: boolean = false;
    let discountTag = false;
    let productName = 'Pro Creatine';
    let disablePriceJumbotron = false;
    let pinLogo = false;
    let labelTxtPembelian = false;
    let subTitlePin= false;
    let crownPin= true;
    let hargaActual = 'Rp239.000';
    let orderButton= false;

    const showModal = () => modal.set(ModalCreatineIndex);
</script>

<SectionOne
    {crownPin}
    hashtagText="#CreatineTerbaik"
    {productName}
    {pilihButton}
    {disablePriceJumbotron}
    banner={BannerJumbotron}
    txtPenawaran="tingkatkan massa otot dan energimu"
    classTxtPenawaran="text-white"
    classTxtBtnOrder="text-amber-900"
    txtPembelian="Pembelian {productName}"
    classTxtPembelian="text-white"
    hargaAwal="RP. 265.000,-"
    hargaAkhir="RP. 235.000,-"
    persenPotongan="11"
    {discountTag}
    orderBtnText="Cek Produknya Sekarang"
    bannerBawah='MUSCLE FIRST <span class="font-black">{productName}</span> PRODUCT '
    waLink="https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    shopeeLink="https://shopee.co.id/musclefirstofficialshop"
    {labelTxtPembelian}
/>
<SectionFifteen title="Kelengkapan rasa" subtitle="Creatine, hanya di" brandTitle="Musclefirst" />
<!-- Education -->
<SectionTwelve 
    id='musclefirst-education'
    {pinLogo}
    title="GOLD SERIES"
    subtitle="{productName}?"
    titlePart=""
    image={EducationImg}
    {educationCardList}
/>

<SectionTwo 
    title="Promo Terbaik"
    subtitle="{productName} Gold Series"
    description='Muscle First <span class="font-bold italic">{productName}</span> Gold Series kemasan baru, dapatkan kesempatan terbatas untuk pembelian {productName}'
    image={CreatineOne}
    classTxtBtnOrder="text-amber-900"
    orderBtnText="Cek Produknya"
/>

<SectionThree 
    {subTitlePin}
    subtitle="{productName}"
    title="COCOK BUAT KAMU YANG"
    {cocokCardList}
    gridCount={cocokCardList.length}
/>

<SectionFour
    {productName}
    bgImg={FeatureImage}
    imgLink=""
    altImg="FeatureImage"
    subTitle="Muscle First"
    sizeOne=""
    sizeTwo=""
    title="{productName}"
    btnText="Beli Sekarang"
    {rasaList}
    cocokCardOtherList={cocokCardList}
/>

<SectionFive 
    title="ORDER {productName} SEKARANG"
    btnText="Beli Sekarang"
/>

<SectionCertified 
    certifiedCardList={certifiedList} 
/>

<SectionSix 
    subtitle="Kenapa Harus"
    title='<span class="uppercase">{productName}</span> <span class="max-w-xl uppercase">GOLD SERIES</span>'
    {manfaatList}
/>

<!-- <SectionSeven 
    subtitle="{productName}"
    title='<span class="uppercase">Bisa Bikin</span> <span class="uppercase">Tubuhmu Ideal</span>'
    descriptionOne=''
    descriptionTwo=''
    linkVideo=""
    {videoSection}
    {idealList}
    classTxtBtnOrder="text-zinc-100"
    orderBtnText="Cek Produknya"
/> -->

{#if browser}
<Modal
    show={$modal}
    unstyled={true}
    classBg="z-[100] fixed top-0 before:top-0 before:left-0 before:right-0 before:bottom-0 w-screen h-screen flex flex-col justify-center bg-gray-600/25 backdrop-blur-sm before:opacity-30 before:blur"
    classWindowWrap="relative m-0 max-h-full p-4 md:p-8 pb-4 md:pb-8"
    classWindow="z-[100] relative my-0 mx-auto w-full md:w-full max-w-full max-h-full mx-auto rounded shadow-md bg-white overflow-auto"
    classContent="relative p-2 overflow-auto z-0"
    closeButton={true}
>
    <SectionEight 
        subtitle="Masih Ragu?"
        title='<span class="block uppercase">INI KANDUNGAN</span> <span class="block uppercase">{productName}</span>'
        btnText="Lihat"
        imgLink={CreatineTwo}
        altImg="{productName}"
        on:click={showModal}
    />
</Modal>
{/if}

<!-- <SectionThirteen
    subtitleOne="Gold Series"
    titleOne='{productName}'
    subtitleTwo="Buruan"
    titleTwo='<span class="block uppercase font-black">Tunggu</span> <span class="block uppercase font-black">Apalagi?</span>'
    btnText="Beli Sekarang!!"
    descText='Mengandung <span class="text-amber-500 font-bold">55 gram</span> protein per saji yang mampu menambah massa otot lebih berisi, <span class="text-amber-500 font-bold">160 gram</span> karbohidrat kompleks yang mengandung lebih banyak nutrisi untuk tubuh. Selain itu, dengan konsumsi {productName}, kamu sudah bisa dapatkan <span class="text-amber-500 font-bold">1.030 kalori</span> per saji.'
/> -->

<!-- Testimonial -->
<SectionEleven 
    subtitle="{productName}"
    title="Testimonial"
    {testimonialCardList}
/>

<SectionNine 
    {orderButton}
    classShopee="creatine-shopee"
    classWa="creatine-wa"
    subtitle="Order Now"
    title='{productName}'
    description='Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini'
    linkShopee="https://shopee.co.id/universal-link/product/8802988/289998377?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_lp-creatine_bp&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=lp-creatine"
    linkWhatsapp="https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+{productName}+({hargaActual})+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    linkOrderOnline="https://musclefirst.orderonline.id/muscle-first-pro-creatine"
/>

<SectionTen 
    subtitle="Temukan Agen Tedekat di Kota mu"
    title="Muscle First {productName}"
/>

<SectionDisclaimer 
    subtitleOne="Disclaimer Product"
    titleOne='{productName}'
    descTextOne='Konten yang terdapat dalam website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> merupakan informasi yang disediakan sebagai layanan umum. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> tidak memberikan jaminan atau garansi terhadap keakuratan, kelengkapan, atau keandalan informasi yang tersedia di website ini. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan atau kepercayaan terhadap informasi yang tersedia di website ini.'
    descTextTwo='Informasi yang tersedia di website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website <b class="text-amber-600 uppercase text-sm">Musclefirst</b>.'
    descTextThree='Kami berhak untuk mengubah atau memperbaharui informasi yang tersedia di website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> tanpa pemberitahuan terlebih dahulu. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas keakuratan atau kelengkapan informasi yang tersedia di website lain yang terhubung ke website ini.'
/>
