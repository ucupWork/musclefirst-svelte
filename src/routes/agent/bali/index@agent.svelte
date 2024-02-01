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
        SectionEight,
        SectionCertified
    } from '$components/layout-lp/agent/index';
    
    import JumbotronAgen from '$images/agent/LP/default-image.webp';
    import EducationImg from '$images/product/pro-bcaa/education-product-img.webp';
    
    import { certifiedList } from '$contents/product-page/list-certified';
    
    // Section One
    let pilihButton: number = 3;
    let discountTag = false;
    let agentDomisili = 'Bali';
    let labelTxtPembelian = false;
    let crownPin= false;
    let waMessage: string = "Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20promo%20Muscle%20First%20terbaru%22";

    let listAgen = [
          {
            id: 'LSAD02-01',
            personName: "Bali Gym Store",
            agenType: "👑 Exclusive",
            waNumber: "+08113808058",
            address: "Hotel Quest, Jl. Mahendradatta No.100, Seberang, Kec. Denpasar Bar., Kota Denpasar, Bali 80234",
            waChatText: waMessage,
            mapsLink: 'https://maps.app.goo.gl/4ng6g6o1HN9wciFVA'
          },
          {
            id: 'LSAD02-02',
            personName: "Limitless Gym Store",
            agenType: "👑 Exclusive",
            waNumber: "+6289655019024",
            address: "JL. Pantai Kuta, Kuta, Kec. Kuta Sel. Kabupaten Badung, Bali 80361",
            waChatText: waMessage,
            mapsLink: 'https://maps.app.goo.gl/cxbZxvaSV8edvEpB7'
          },
          {
            id: 'LSAD02-03',
            personName: "Canggu Gym Store",
            agenType: "Basic",
            waNumber: "+081996778882",
            address: "Jl. Raya Uma Buluh No.30, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351",
            waChatText: waMessage,
            mapsLink: 'https://maps.app.goo.gl/c1SqdvhxT8u2YHkA6'
          },
          {
            id: 'LSAD02-04',
            personName: "Garuda Gym Store",
            agenType: "Basic",
            waNumber: "+081236676568",
            address: "Jl. Tukad Badung No.17e, Renon, Denpasar Selatan, Kota Denpasar, Bali 80234",
            waChatText: waMessage,
            mapsLink: 'https://maps.app.goo.gl/c1SqdvhxT8u2YHkA6'
          },
          {
            id: 'LSAD02-05',
            personName: "Limitless Nutrition - Beachwalk Kuta",
            agenType: "👑 Exclusive",
            waNumber: "+6289655019024",
            address: "JL. Pantai Kuta, Kuta, Kec. Kuta Sel. Kabupaten Badung, Bali 80361",
            waChatText: waMessage,
            mapsLink: 'https://maps.app.goo.gl/3nvNmhVccMfvQMfr7'
          },
          {
            id: 'LSAD02-06',
            personName: "Zaen Gym Store",
            agenType: "👑 Exclusive",
            waNumber: "+6282147800028",
            address: "Jl. Raya Sesetan No 84A, Denpasar Selatan, Bali 80223",
            waChatText: waMessage,
            tokpedLink: "https://www.tokopedia.com/zaengymstore",
            shopeeLink: "https://shopee.co.id/zaengymstore",
          },
    ]
    
    let listPickAgen = []
</script>

<SEO 
    title="Agent Domisili - Bali" 
    description="Dapatkan keuntungan menarik menjadi bintang agent Muscle First Buruan"
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<!--  -->
<SectionOne
    {crownPin}
    hashtagText=""
    {agentDomisili}
    {pilihButton}
    banner={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/bali/main-banner-bali.jpg'}
    txtMainText="Be the first"
    classTxtMainText="text-zinc-100"
    classTxtBtnOrder="text-emerald-900"
    txtPembelian="Agent {agentDomisili}"
    classTxtPembelian="text-zinc-900"
    persenPotongan="11"
    {discountTag}
    orderBtnText="Pesan Disini"
    bannerBawah='MUSCLE FIRST AGENT <span class="font-black">{agentDomisili}</span>'
    waLink="https://wa.me/628113808058/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    {labelTxtPembelian}
/>

<SectionFour 
    typeAgent={true}
    title='Dapatkan Langsung'
    btnText="Pesan Disini"
    urlAgentMainLogo="https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/batam/agent-01.png"
    namaAgen='Agen Fitness / <span class="text-primary dark:text-amber-600">{agentDomisili}</span>'
    descriptionAgen="Hotel Quest, Jl. Mahendradatta No.100, Seberang, Kec. Denpasar Bar., Kota Denpasar, Bali 80234"
    agentName="Bali Gym Store"
    kontakAgenName="Bali Gym Store"
    kontakAgen="+628113808058"
    listPickAgen={listAgen}
    tokopediaLink="https://www.tokopedia.com/suplemenindonesia?source=universe&st=product"
    shopeeLink="https://shopee.co.id/suplemenindonesiaofficial"
    waLink="https://wa.me/628113808058/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
/>

<SectionThree 
    title="Kenapa Memilih Musclefirst"
/>

<SectionCertified 
    certifiedCardList={certifiedList} 
/>

<SectionTwo 
    id='musclefirst-education'
    title="Tahukah"
    subtitle="Anda?"
    titlePart=""
/>

<!-- Testimonial -->
<SectionFive 
    subtitle="Musclefirst"
    title="Testimonial"
/> 