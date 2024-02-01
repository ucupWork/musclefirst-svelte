<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    // Section
    import { 
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionAllProducts,
        SectionCertified
    } from '$components/layout-lp/v-four/index';
    // Content
    import { certifiedList } from '$contents/product-page/list-certified';
	import { productList } from '$contents/home-page/list-products';

    import BannerJumbotron from '$images/special-event/natal/01/banner-jumbotron.webp';
    import ProductOne from '$images/special-event/natal/01/produk-01-1.webp';
    import ProductTwoOne from '$images/special-event/natal/01/produk-02-1.webp';
    import ProductTwo from '$images/special-event/natal/01/produk-02-2.webp';
    import ProductThreeOne from '$images/special-event/natal/01/produk-03-1.webp';
    import ProductThree from '$images/special-event/natal/01/produk-03-2.webp';

    let titleName = 'Spesial Event Natal';
</script>

<SEO 
    title={titleName} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<SectionOne
    banner={BannerJumbotron}
    txtPenawaran="Solusi Cerdas"
    txtSubPenawaran="Raih Badan Ideal"
    classTxtPenawaran="text-white"
    classtxtSubPenawaran="text-white"
    orderBtnText="Cek Produknya Sekarang"
/>

<SectionFour 
    imgLinkOne={ProductTwoOne}
    imgLinkTwo={ProductTwo}
    altImgOne={`Gainer`}
    altImgTwo={`Isolate`}
    imgLinkOneTop={ProductThreeOne}
    imgLinkTwoTop={ProductThree}
    altImgOneTop={`Resolusi Body Goals`}
    altImgTwoTop={`Resolusi Body Goals`}
    linkOne={`https://shopee.co.id/Paket-Tambah-BB-Akhir-Tahun-Muscle-First-Pro-Gainer-Pro-Creatine-Pro-Nrgy-Suplemen-Fitness-Bulking-i.8802988.18865807140?sp_atk=f834c7d7-6b11-4274-a4ce-b7ac2cd63bbc`}
    linkTwo={`https://shopee.co.id/Paket-Turun-BB-Akhir-Tahun-Muscle-First-Pro-Isolate-Pro-Bcaa-Pro-Nrgy-Suplemen-Fitness-Cutting-i.8802988.23808282702?sp_atk=2610b933-8270-4585-9648-95f6a04f9d5c`}
    bgColorSection="zinc-900"
/>

<SectionCertified certifiedCardList={certifiedList} />
<SectionAllProducts products={productList} />

<SectionTwo 
    bgColorSection="zinc-900"
    title='<span class="block">BERAPA HARGANYA?</span>'
    subtitle="Promo Harga Khusus"
    imgLink={ProductOne}
    altImg="HargaImage"

    oneBeforePriceLabel={true}
    oneTitlePrice='<span class="block text-white">Paket Resolusi - Turun BB</span>'
    oneDescriptionPrice='
    <h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>{titleName}</b> <br> Bisa didapatkan</h3>
    <h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>'
    oneBeforePrice="852.992"
    oneAfterPrice="743.000"
    oneLinkShopee="https://shopee.co.id/Paket-Turun-BB-Akhir-Tahun-Muscle-First-Pro-Isolate-Pro-Bcaa-Pro-Nrgy-Suplemen-Fitness-Cutting-i.8802988.23808282702?sp_atk=2610b933-8270-4585-9648-95f6a04f9d5c"
    oneLinkWhatsapp="https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20paket%20resolusi%20turun%20BB%20Muscle%20First."

    twoBeforePriceLabel={true}
    twoTitlePrice='<span class="block text-white">Paket Resolusi - Naik BB</span>'
    twoDescriptionPrice='
    <h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>{titleName}</b> <br> Bisa didapatkan</h3>
    <h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>'
    twoBeforePrice="542.592"
    twoAfterPrice="448.000"
    twoLinkShopee="https://shopee.co.id/Paket-Tambah-BB-Akhir-Tahun-Muscle-First-Pro-Gainer-Pro-Creatine-Pro-Nrgy-Suplemen-Fitness-Bulking-i.8802988.18865807140?sp_atk=f834c7d7-6b11-4274-a4ce-b7ac2cd63bbc"
    twoLinkWhatsapp="https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20paket%20resolusi%20tambah%20BB%20Muscle%20First."

/>

<SectionThree 
    subtitle="Order Now"
    title='{titleName}'
/>