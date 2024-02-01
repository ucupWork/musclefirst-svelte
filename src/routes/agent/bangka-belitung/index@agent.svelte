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
    let agentDomisili = 'Bangka Belitung';
    let labelTxtPembelian = false;
    let crownPin= false;
    let waMessage: string = "Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20promo%20Muscle%20First%20terbaru%22";

    let listAgen = [
        {
            personName: "Kris-MAX Gym",
            agenType: "Basic",
            waNumber: "+6285382091010",
            address: "Jl. A. Yani Dalam (Jl.baru)",
            noteAddress: "300m Dari SPBU sebelah kanan arah Pasar Pagi",
            waChatText: waMessage,
            codType: true,
        },
        // {
        //     personName: "Amie",
        //     agenType: "Basic",
        //     waNumber: "+6285281332555",
        //     address: "Jl. Puput Atas No.154 Parit 3 Jebus Bangka Barat 33362",
        //     waChatText: waMessage,
        // },
    ]
    
    let listPickAgen = []
</script>

<SEO 
    title="Agent Domisili - Bangka Belitung" 
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
    banner={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/pangkal-pinang/main-banner-pangkal-pinang.png'}
    txtMainText="Be the first"
    classTxtMainText="text-zinc-100"
    classTxtBtnOrder="text-emerald-900"
    txtPembelian="Agent {agentDomisili}"
    classTxtPembelian="text-zinc-900"
    persenPotongan="11"
    {discountTag}
    orderBtnText="Pesan Disini"
    bannerBawah='MUSCLE FIRST AGENT <span class="font-black">{agentDomisili}</span>'
    waLink="https://wa.me/6282289364370/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    {labelTxtPembelian}
/>

<SectionFour 
    typeAgent={true}
    title='Dapatkan Langsung'
    btnText="Pesan Disini"
    urlAgentMainLogo="https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/pangkal-pinang/agent-01.png"
    namaAgen='Agen Fitness / <span class="text-primary dark:text-amber-600">{agentDomisili}</span>'
    descriptionAgen="Jln. Selan Sebelah Pangkal Pinang Bangka Belitung"
    agentName="Jimmy"
    kontakAgenName="Jimmy"
    kontakAgen="+6282289364370"
    listPickAgen={listAgen}
    tokopediaLink=""
    shopeeLink=""
    waLink="https://wa.me/6282289364370/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
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

<!-- <SectionEight>
<div class="flex flex-col space-y-2 w-full h-auto bg-transparent border-none shadow-xl py-2 md:py-4 px-2 md:px-8">
    {#each listAgen as val}
    <div class="w-full h-auto flex flex-col bg-zinc-100 rounded-xl border-b pb-2 px-4 py-4 border">
        <div class="w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div class="flex flex-row justify-start items-start w-auto h-auto space-y-0 md:space-y-0 space-x-0 md:space-x-4">
                <div class="hidden md:flex flex-row w-auto h-auto">
                    {#if val.waNumber}
                    <span class="flex justify-center items-center font-bold text-zinc-200 rounded-xl w-12 h-12 bg-white shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-zinc-900 w-6 h-6 icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                        </svg>                                       
                    </span>
                    {/if}
                </div>
                <div class="flex flex-col space-y-0 w-full h-auto text-left">
                    <span class="flex font-bold text-amber-500">
                        {val.personName}
                    </span>
                    <div class="flex flex-row items-center space-x-2 md:space-x-3 w-auto h-auto">
                        <div class="ml-0 text-sm">
                            <small class="text-zinc-900 uppercase font-medium italic">{val.agenType}</small>
                        </div>
                        {#if val.distric}
                        <div class="text-xs">
                            <small class="text-zinc-900 uppercase">{val.distric}</small>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center w-full md:w-96 h-auto mt-2">
                {#if val.waNumber}
                <a rel="noreferrer" target="_blank" href="https://wa.me/{val.waNumber}/?text={val.waChatText}" class="hidden md:flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full h-auto px-4 py-1 bg-green-500 shadow-lg border shadow-green-500/50 md:ml-8">    
                    <span class="uppercase text-sm">Buy Here</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-50 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </svg>                                        
                </a>
                {/if}
            </div>
        </div>
    </div>
        
    <div class="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto h-auto">
        <div class="w-full h-auto flex flex-row space-x-2 justify-start items-center py-2 mr-4">
            {#if val.codType}
                <span class="font-bold rounded-full px-2 py-1 bg-cyan-500 text-xs uppercase text-white">COD</span>
            {/if}
            {#if val.gojekType}
                <span class="font-bold rounded-full px-2 py-1 bg-green-500 text-xs uppercase text-white">Gojek</span>
            {/if}
            {#if val.grabType}
                <span class="font-bold rounded-full px-2 py-1 bg-emerald-500 text-xs uppercase text-white">Grab</span>
            {/if}
        </div>

        {#if val.waNumber}
        <div class="flex md:hidden justify-between items-center w-full h-auto py-4 border-b">
            <a rel="noreferrer" target="_blank" href="https://wa.me/{val.waNumber}/?text={val.waChatText}" class="flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full md:w-auto h-auto px-4 py-2 bg-green-500 shadow-lg border shadow-green-500/50">
                <span class="uppercase text-sm">Buy Here</span>    
                <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-50 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                </svg>                                  
            </a>
        </div>
        {/if}
    </div>
    {/each}
</div>
</SectionEight> -->