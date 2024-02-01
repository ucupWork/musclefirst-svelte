<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    // Section
    import { 
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionDisclaimer,
        SectionEight,
        SectionNine
    } from '$components/layout-lp/v-five/index';

    import JumbotronImage from '$images/product/pro-collafit/land-page/main-img.png';
    import SubImage01 from '$images/product/pro-collafit/land-page/subimage01.png';
    import SubImage02 from '$images/product/pro-collafit/land-page/subimage02.png';
    import BuyImage from '$images/product/pro-collafit/land-page/01/buynow-image.png';
    import CollafitTwo from '$images/product/pro-collafit/produk-03.webp';

    let titleName = 'Pro Collafit - Shape & Glow';
    let productName = 'Pro Collafit';
</script>

<SEO 
    title={titleName} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<SectionOne imgUrl={JumbotronImage} />
<SectionNine />
<SectionEight />
<SectionTwo />
<SectionThree 
    imgUrlTop={SubImage01} 
    imgUrlBottom={SubImage02} 
/>
<SectionFour imgUrl={CollafitTwo} />
<SectionFive />
<SectionSeven />
<SectionDisclaimer 
    subtitleOne="Disclaimer Product"
    titleOne='{productName}'
    descTextOne='Konten yang terdapat dalam website <b class="text-sm uppercase text-pink-50">musclefirst.co.id</b> merupakan informasi yang disediakan sebagai layanan umum. <b class="text-pink-50 uppercase text-sm">Musclefirst</b> tidak memberikan jaminan atau garansi terhadap keakuratan, kelengkapan, atau keandalan informasi yang tersedia di website ini. <b class="text-pink-50 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan atau kepercayaan terhadap informasi yang tersedia di website ini.'
    descTextTwo='Informasi yang tersedia di website <b class="text-sm uppercase text-pink-50">musclefirst.co.id</b> tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website <b class="text-pink-50 uppercase text-sm">Musclefirst</b>.'
    descTextThree='Kami berhak untuk mengubah atau memperbaharui informasi yang tersedia di website <b class="text-sm uppercase text-pink-50">musclefirst.co.id</b> tanpa pemberitahuan terlebih dahulu. <b class="text-pink-50 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas keakuratan atau kelengkapan informasi yang tersedia di website lain yang terhubung ke website ini.'
/>
<SectionSix />

<style>
</style>