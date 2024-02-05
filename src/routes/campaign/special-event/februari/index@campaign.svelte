<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    // Section
    import { 
        SectionAllProducts,
        SectionCertified
    } from '$components/layout-lp/v-four/index';
    import ComponentListAgen from '$components/layout-lp/agent/ComponentListAgen.svelte'
    import TopBanner from '$components/layout-lp/2024/februari/TopBanner.svelte'
     
    
    // Content
    import { certifiedList } from '$contents/product-page/list-certified';
	import { productList } from '$contents/home-page/list-products';

    import Banner from '$images/special-event/chinese-new-year/banner-square.jpg';
    import Bannerlg from '$images/special-event/chinese-new-year/banner-width.webp';
    import TextCompFeb from '$components/layout-lp/2024/februari/TextCompFeb.svelte'
    import PaketCompFeb from '$components/layout-lp/2024/februari/PaketCompFeb.svelte'
    import BannerBottomFeb from '$components/layout-lp/2024/februari/BannerBottomFeb.svelte'

    let titleName = 'Bentuk Tubuhmu Suarakan Kesehatanmu';
</script>

<SEO 
    title={titleName} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<TopBanner
    Banner={Banner}
    Bannerlg={Bannerlg}
    titleName={titleName}
/>

<!-- copywriter component -->
<TextCompFeb textPromo="Muscle First menghadirkan promo istimewa setiap pembelian paket partai bulking, cutting, dan glowing bisa mendapatkan angpao gratis dan sachet creatine. Periode promo hanya berlaku selama tanggal 1-15 Februari 2024! Segera dapatkan paket bundle ini untuk “Bentuk Tubuhmu dan Suarakan Kesehatanmu”! Promo berlaku untuk paket berikut:"/>

<!-- paket component -->
<PaketCompFeb />

<SectionCertified certifiedCardList={certifiedList} />
<SectionAllProducts products={productList} />

<!-- banner angpao -->
<BannerBottomFeb
textPromo="Beli Paket Bundling manapun diatas"
textPromoBig="Bisa Dapat Angpao"
/>

<ComponentListAgen
    subtitle="Pesan di Agen Terdekat"
    title='{titleName}'
/>