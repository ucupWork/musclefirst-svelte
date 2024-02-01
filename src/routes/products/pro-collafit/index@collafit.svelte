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
    import { modal } from '$stores/index'
    import { IndexAgen } from '$components/section/list-agent/index';
    import { ModalCollafitIndex } from '$section/product/index';
    // Section Colors
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
        SectionSixteen,
        SectionSize,
        SectionCertified,
        SectionDisclaimer,
        OverviewVideo
    } from '$components/layout-lp/colors/color-one/index';
    // Content
	import { 
        cocokCardList, 
        rasaList, 
        manfaatList, 
        idealList, 
        beforeAfterCardList,
        testimonialCardList, 
        educationCardList 
    } from '$contents/landing-page/v-one/collafit/index';
    import { certifiedList } from '$contents/product-page/list-certified';

    import BannerJumbotron from '$images/product/pro-collafit/banner-jumbotron.webp';
    import CollafitOne from '$images/product/pro-collafit/produk-01-1.webp';
    import CollafitTwo from '$images/product/pro-collafit/produk-03.webp';
    import EducationImg from '$images/product/pro-collafit/education-product-img.webp';
    import FeatureImage from  '$images/product/pro-collafit/produk-02-3.webp';
    
    let pilihButton: number = 3;
    let videoSection: boolean = true;
    let discountTag = false;
    let productName = 'Pro Collafit';
    let disablePriceJumbotron = false;
    let pinLogo = false;
    let labelTxtPembelian = false;
    let subTitlePin= false;
    let crownPin= false;
    let hargaActual = '138.000';
    let orderButton= false;

    const showModal = () => modal.set(ModalCollafitIndex);
</script>

<SectionOne
    {crownPin}
    hashtagText=""
    {productName}
    {pilihButton}
    {disablePriceJumbotron}
    banner={BannerJumbotron}
    txtPenawaran="Tampil Cantik Dengan Cegah Resiko Penuaan Dini"
    classTxtPenawaran="text-zinc-900"
    classTxtBtnOrder="text-pink-50"
    txtPembelian="Pembelian {productName}"
    classTxtPembelian="text-zinc-900"
    hargaAwal="RP. 265.000,-"
    hargaAkhir="RP. 235.000,-"
    persenPotongan="11"
    {discountTag}
    orderBtnText="Cek Produknya"
    bannerBawah='MUSCLE FIRST <span class="font-black">{productName}</span> PRODUCT '
    waLink="https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    shopeeLink="https://shopee.co.id/musclefirstofficialshop"
    {labelTxtPembelian}
/>
<OverviewVideo />
<!-- Education -->
<SectionTwelve 
    id='musclefirst-education'
    {pinLogo}
    title="WHITE SERIES"
    subtitle="{productName}?"
    titlePart=""
    image={EducationImg}
    {educationCardList}
/>

<SectionTwo 
    title="Promo Terbaik"
    subtitle="{productName} White Series"
    description='Muscle First <span class="font-bold italic">{productName}</span> White Series kemasan baru, dapatkan kesempatan terbatas untuk pembelian {productName}'
    image={CollafitOne}
    classTxtBtnOrder="text-pink-50"
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
    txtTitleColor="zinc-900"
    bgColor="transparent"
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

<!-- <SectionSize 
    productName={productName}
    products={productList}
/> -->

<SectionCertified 
    certifiedCardList={certifiedList} 
/>

<SectionSix 
    subtitle="Kenapa Harus"
    title='<span class="uppercase">{productName}</span> <span class="max-w-xl uppercase">WHITE SERIES</span>'
    {manfaatList}
/>

<!-- <SectionSeven 
    subtitle="{productName}"
    title='<span class="uppercase">Bantu Kenyang</span> <span class="uppercase">Lebih Lama</span>'
    descriptionOne='<span class="font-bold uppercase">Saat beraktivitas</span>, tubuh kehilangan banyak sekali massa otot jika tidak dibarengi dengan olahraga dan konsumsi makanan yang mengandung banyak protein.'
    descriptionTwo='Konsumsi <span class="font-bold uppercase">Casein</span> dapat <span class="font-bold uppercase">menghambat rasa lapar</span> dan <span class="font-bold uppercase">mempertahankan massa otot</span> karena memiliki sifat slow release (lambat serap) sehingga protein dalam tubuh akan selalu terjaga selama beraktivitas, cocok diminum buat kamu yang ingin mempertahankan masa otot atau kamu yang sedang program cutting (diet).'
    linkVideo="https://www.youtube-nocookie.com/embed/RWdc0o1kbG8?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=1&enablejsapi=1&origin=https%3A%2F%2Fmusclefirst.co.id&widgetid=1"
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
        imgLink={CollafitTwo}
        altImg="{productName}"
        on:click={showModal}
    />
</Modal>
{/if}

<SectionThirteen
    subtitleOne="White Series"
    titleOne='{productName}'
    subtitleTwo="Buruan"
    titleTwo='<span class="block uppercase font-black">Tunggu</span> <span class="block uppercase font-black">Apalagi?</span>'
    btnText="Beli Sekarang!!"
    descText='Mengandung <span class="text-pink-500 font-bold">Tripeptide Marine Collagen</span>, <span class="text-pink-500 font-bold">L-Glutathione Japan</span>, <span class="text-pink-500 font-bold">Vitamin C</span> dan Protein yang mampu merawat kulit serta membentuk badan ideal dari dalam.'
/>

<!-- Testimonial -->
<SectionEleven 
    subtitle="{productName}"
    title="Testimonial"
    type="testimonial-text"
    {testimonialCardList}
/>

<SectionNine 
    {orderButton}
    classShopee="casein-shopee"
    classWa="casein-wa"
    subtitle="Order Now"
    title='{productName}'
    description='Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini'
    linkShopee="https://shopee.co.id/universal-link/product/8802988/19575249995?deep_and_web=1&utm_campaign=p8802988_ss_id_webs_procolafit&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=procollafit&smtt=9"
    linkWhatsapp="https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+{productName}+({hargaActual})+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    linkOrderOnline="https://musclefirst.orderonline.id/muscle-first-pro-casein"
/>

<SectionTen 
    subtitle="Temukan Agen Tedekat di Kota mu"
    title="Muscle First {productName}"
/>

<SectionDisclaimer 
    subtitleOne="Disclaimer Product"
    titleOne='{productName}'
    descTextOne='Konten yang terdapat dalam website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> merupakan informasi yang disediakan sebagai layanan umum. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> tidak memberikan jaminan atau garansi terhadap keakuratan, kelengkapan, atau keandalan informasi yang tersedia di website ini. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan atau kepercayaan terhadap informasi yang tersedia di website ini.'
    descTextTwo='Informasi yang tersedia di website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website <b class="text-pink-500 uppercase text-sm">Musclefirst</b>.'
    descTextThree='Kami berhak untuk mengubah atau memperbaharui informasi yang tersedia di website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> tanpa pemberitahuan terlebih dahulu. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas keakuratan atau kelengkapan informasi yang tersedia di website lain yang terhubung ke website ini.'
/>