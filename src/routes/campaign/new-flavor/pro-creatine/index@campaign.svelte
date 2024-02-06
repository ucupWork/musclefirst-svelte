<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    // Section
    import { 
        SectionOne,
        SectionThree,
        SectionFour,
        SectionSix,
        SectionCertified,
        SectionAllProducts
    } from '$components/layout-lp/v-six/index';
    // Content
	import { 
        unflavList
    } from '$contents/landing-page/v-one/creatine/index';
    // Content
    import { certifiedList } from '$contents/product-page/list-certified';
	import { productList } from '$contents/home-page/list-products';

    import BannerJumbotron from '$images/product/pro-creatine/unflavored/banner-jumbotron.webp';
    import ProductOne from '$images/product/pro-creatine/unflavored/produk-01-1.webp';
    import ProductTwoOne from '$images/product/pro-creatine/unflavored/produk-02-1.webp';
    import ProductTwo from '$images/product/pro-creatine/unflavored/produk-02-2.webp';
    import HargaUnflav from '$components/layout-lp/v-six/HargaUnflav.svelte'

    let productName: string = "Pro Creatine Unflavored";
    let subTitlePin= false;
    let pinLogo = false;
    let beforePriceLabel = true;
</script>

<SEO 
    title={`Rasa Terbaru - ${productName}`} 
    description={`Creatine terbaik untuk menambah massa otot yang mempunyai 6 varian rasa yang enak-enak. ${productName} aman dikonsumsi karna sudah bersertifikat halal dan BPOM.`}
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<SectionOne
    banner={BannerJumbotron}
    txtPenawaran=""
    txtSubPenawaran=""
    classTxtPenawaran="text-white"
    classtxtSubPenawaran="text-white"
    orderBtnText=""
/>

<SectionSix 
    subtitle="{productName} "
    title='<span class="block uppercase">Tebalkan</span> 
    <span class="block uppercase">Massa Otot?</span> '
    descriptionOne='{productName} merupakan suplemen yang diformulasikan khusus untuk menambah dan menebalkan massa otot dalam tubuh, produk ini tidak menimbulkan efek samping berbahaya dan telah lulus uji Badan Pengawas Obat dan Makanan.'
    descriptionTwo='Selain diolah secara halal, produk ini juga mendapat sertifikasi <span class="font-bold uppercase"> GMP (Good Manufacturing product), Halal, BPOM, HACCP,  ISO 22000, & LABDOOR </span>'
    imgLink={ProductOne}
    altImg="AboutImage"
    
    bgColor="zinc-800"
    textHead="white"
    textSubHead="amber-500"
    txtDescColor="zinc-100"
/>

<SectionThree 
    id='musclefirst-education'
    {pinLogo}
    title="GOLD SERIES"
    subtitle="{productName}"
    titlePart=""
    image={ProductTwo}
    cocokCardOtherList={unflavList}
/>

<SectionCertified certifiedCardList={certifiedList} />
<SectionAllProducts products={productList} />

<HargaUnflav
    bgColorSection="zinc-900"
    {beforePriceLabel}
    subtitle="Promo Khusus Pemesanan Pre Order"
    title='<span class="block">BERAPA HARGANYA?</span>'
    imgLink={ProductTwoOne}
    altImg="HargaImage"
    titlePrice='<span class="block text-white">Muscle First Pro Creatine</span>'
    descriptionPrice='
    <span class="uppercase font-bold text-white">beli di agen terdekat di kotamu</span>
    <h3 class="text-gray-100 font-base text-xl md:text-2xl uppercase font-bold">Dengan harga</h3>'
    bonusText='<b>Gratis Shaker</b> + <b>Gratis Scoop</b>'
    beforePrice="150.000"
    afterPrice="99.000"
/>

<SectionFour 
    subtitle="Order Now"
    title='{productName}' 
/>