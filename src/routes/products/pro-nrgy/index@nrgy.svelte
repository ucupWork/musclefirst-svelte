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
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    import { shopeepromo } from '$stores/index'
    import { IndexAgen } from '$components/section/list-agent/index';
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
        SectionEleven
    } from '$components/layout-lp/v-three/index';

    import MainPronrgy from '$images/product/pro-nrgy/main-pro-nrgy.jpg'
    import AboutPronrgy from '$images/product/pro-nrgy/about-pro-nrgy.jpg'
    import FeaturePronrgy from '$images/product/pro-nrgy/feature-pro-nrgy.jpg'

	import { 
        cocokCardList, 
        butuhCardList
    } from '$contents/landing-page/v-three/pro-nrgy/index';
    import { certifiedList } from '$contents/product-page/list-certified';
    
    import FeatureImage from '$images/product/pro-nrgy/kandungan-nrgy.png'
    import BannerPronrgy from '$images/product/pro-nrgy/pro-nrgy-banner.jpg'
    import HargaImage from '$images/product/pro-nrgy/harga-nrgy.png'

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<SectionOne 
    bgImage={MainPronrgy}
    hashtag="#focuswithmusclefirst"
    title='<span class="block">TINGKATKAN FOKUS</span> 
    <span class="block">DAN ENERGI UNTUK</span> 
    <span class="block">PERFORMA TERBAIK</span> 
    <span class="block">DENGAN RASA UNIK</span>'
    btnText="Cari Tahu Produknya"
/>

<SectionTwo 
    title='<span class="block">PRO NRGY, CARA CEPAT</span> 
    <span class="block">NAIKKAN FOKUS DAN</span> 
    <span class="block">ENERGIMU</span> '
    subtitle="Apa itu Pro NRGY?"
    imgLink={AboutPronrgy}
    altImg="About Image Product"
    description='PRO NRGY adalah <span class="font-bold italic">Energy Drink pertama Indonesia</span> yang terbuat dari bahan-bahan aktif dan teruji secara klinis mampu bantu kamu agar lebih fokus dan berenergi dalam melakukan aktivitas yang kamu jalanin.'
/>

<SectionThree 
    id='musclefirst-education'
    title='<span class="block">INI FUNGSI</span> 
    <span class="block max-w-xl">PRO NRGY UNTUK LEVEL UP FOKUS DAN ENERGIMU</span>'
    subtitle="Kenapa Harus PRO NRGY?"
    imgLink={FeaturePronrgy}
    altImg="Featured Product"
/>

<SectionFour 
    title="ORDER PRO NRGY SEKARANG"
    btnText="Beli Sekarang"
/>

<SectionFive 
    title='<span class="block">ALASAN KENAPA PRO NRGY LEBIH</span> 
    <span class="block max-w-xl">BAIK DARI PRODUK ENERGY DRINK</span>
    <span class="block">DI MARKET</span>'
    subtitle="PRO NRGY Muscle First"
    {cocokCardList}
    gridCount={3}
/>

<SectionSix 
    title='<span class="block">SIAPA YANG PERLU PRO NRGY</span> '
    subtitle="Butuh fokus lebih?"
    {butuhCardList}
/>

<SectionSeven 
    title='<span class="block">INI KANDUNGAN <br> PRO NRGY</span> '
    subtitle="Masih Ragu?"
    btnText="Composition"
    imgLink={FeatureImage}
    altImg="Featured Image Product"
    txtDescOne="Terbuat dari pemanis alami daun stevia"
    txtDescTwo='Rasa <span class="font-bold uppercase text-rose-500">stroberi</span> dan <span class="font-bold uppercase text-rose-500">semangka</span>'
/>

<SectionEight 
    imgLink={BannerPronrgy}
    altImg="Banner Pronrgy"
/>

<SectionNine 
    title='<span class="block">BERAPA HARGANYA?</span> '
    subtitle="Promo Khusus Pemesanan Pre Order"
    imgLink={HargaImage}
    altImg="Harga Product Image"
    titlePriceHead="Dapatkan Harga Khusus Pre Order"
    flavorDescription="Rasa Watermelon Yuzu dan Strawberry Orange"
    priceDescription="Beli 2 pcs FREE Shaker Pro NRGY"
    priceBefore="RP. 127.900,-"
    priceAfter="RP. 89.990,-"
    btnText="Beli Sekarang"
/>

<SectionTen 
    title="PRO NRGY"
    subtitle="Order Now"
    btnText="Order Via Shopee"
    description='Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini'
    linkShopee="https://shopee.co.id/universal-link/product/8802988/19406803308?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_lp-pronrgy_bp&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=lp-pronrgy"
/>

<SectionEleven 
    title="Muscle First Pro Nrgy"
    subtitle="Temukan Agen Tedekat di Kota mu"
/>