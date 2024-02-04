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
<TextCompFeb textPromo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste blanditiis repudiandae earum. Explicabo dolor repellat ipsa minima autem nesciunt neque ab, sed mollitia eaque similique? Rem mollitia vel alias ea excepturi tempora, incidunt eaque culpa numquam recusandae doloribus esse fugit voluptatibus, aliquid repellendus? Laudantium ipsa reprehenderit eius dolor nam consequatur molestiae molestias repellendus, aliquam fugit nesciunt, numquam deleniti nemo cupiditate, aspernatur voluptatum magnam inventore ipsam! Corporis quod consequuntur porro maxime vel laudantium nobis, saepe itaque veniam repellendus, possimus aliquid voluptatibus laboriosam quia eveniet deserunt error unde. Est reiciendis natus dicta labore voluptatem enim adipisci distinctio magni tempora beatae ullam, eveniet eaque nemo? Itaque placeat vitae, maxime commodi quaerat natus nisi beatae accusantium esse iusto corporis dolore aperiam voluptas. Doloremque."/>

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