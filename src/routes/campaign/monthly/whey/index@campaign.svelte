<script lang="ts">
    import { shopeepromo } from '$stores/index'
    import { IndexAgen } from '$components/section/list-agent/index';
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    // Section
    import { 
        SectionCountdown,
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionEight,
        SectionNine,
        SectionSize,
        SectionCertified
    } from '$components/layout-lp/v-two/index';
    // Content
	import { rasaList, manfaatList, cocokCardList, cocokCardOtherList, testimonialCardList } from '$contents/landing-page/v-two/campaign/monthly/whey/index';
    import { certifiedList } from '$contents/product-page/list-certified';
	import { productList } from '$contents/home-page/list-products';

    import BannerJumbotron from '$images/product/pro-whey/land-page/03/banner-jumbotron.webp';
    import WheyOne from '$images/product/pro-whey/land-page/03/produk-01-1.webp';
    import WheyTwo from '$images/product/pro-whey/land-page/03/produk-02-3.webp';
    import WheyThree from '$images/product/pro-whey/land-page/03/produk-03.webp';

    let pilihButton = 1;
    let discountTag = false;
    let productName = 'Pro Whey';
    let disableBottomBanner = false;
    let disablePriceJumbotron = false;
    let labelTxtPembelian = false;
    let beforePriceLabel = true;
</script>

<SEO 
    title="Campaign Pro Whey" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<SectionOne
{pilihButton}
{discountTag}
{disableBottomBanner}
{disablePriceJumbotron}
banner={BannerJumbotron}
txtPenawaran="Bentuk Body goals impianmu, sekarang!"
classTxtPenawaran="text-white"
txtPembelian="Dengan {productName}"
classTxtPembelian="text-white"
orderBtnText="Cek Produknya Sekarang"
beforePrice="911.400"
afterPrice="600.000"
persenPotongan="11"
bannerBawah='BEST SELLER MUSCLE FIRST PRODUCT'
waLink="https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
shopeeLink="https://shopee.co.id/musclefirstofficialshop"
{labelTxtPembelian}
/>

<SectionTwo 
onBgColor={false}
subtitle=""
title="Apakah kamu pernah mengalami?"
{cocokCardList}
gridCount={cocokCardList.length}
bgColor="zinc-300/50"
textHead="zinc-100"
textSubHead="amber-500"
cardColor="zinc-100"
borderColor="zinz-50"
bgImgColor="white"
txtDescColor="gray-600"
/>

<SectionThree 
subtitle="{productName} 100?"
title='<span class="block uppercase">Bentuk badan ideal mu</span> 
<span class="block uppercase">tetap efektif dan berkualitas</span> '
descriptionOne='WHEY adalah ekstrak protein yang didapat dari proses pembuatan susu menjadi keju. <span class="font-bold italic">{productName} 100</span> menjadi pilihan bagus buat kamu yang baru mau mencoba minuman berprotein dengan <span class="font-bold uppercase">protein yang tinggi serta rendah lemak.</span>'
descriptionTwo='Inovasi baru dari <span class="font-bold italic uppercase">Muscle First</span> untuk mencukupi kebutuhan protein harian dengan harga ekonomis dan kualitas terbaik! Mengandung <span class="font-bold uppercase">24g protein</span> dan <span class="font-bold uppercase">hanya 140 KALORI!</span>'
imgLink={WheyOne}
altImg="AboutImage"

bgColor="zinc-100"
textHead="zinc-900"
textSubHead="amber-500"
txtDescColor="zinc-900"
/>

<SectionFour
txtTitleColor="zinc-900"
bgColor="transparent"
{productName}
bgImg={WheyTwo}
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

<SectionSize 
productName={productName}
title="ORDER SEKARANG"
products={productList}
/>
<SectionCertified certifiedCardList={certifiedList}  />

<SectionFive 
subtitle="{productName}"
title='<span class="block">Ini Fungsi</span> 
<span class="block max-w-xl">{productName} Yang Baik Untuk Kesehatan</span>'
{manfaatList}
/>

<!-- <SectionSix 
subtitle="Cocok buat siapa?"
title='<span class="uppercase">{productName}</span> <span class="max-w-xl uppercase">GOLD SERIES</span>'
{cocokCardList}
/> -->

<SectionSeven 
subtitle="{productName}"
title="Testimonial"
{testimonialCardList}
/>

<SectionEight 
bgColorSection="zinc-900"
{beforePriceLabel}
subtitle="Promo Harga Khusus"
title='<span class="block">BERAPA HARGANYA?</span>'
imgLink={WheyThree}
altImg="HargaImage"
titlePrice='<span class="block text-white">Dapatkan Harga Khusus Pro Whey 100 Whey Protein</span>'
descriptionPrice='
<h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>{productName} 100</b> bisa didapatkan</h3>
<h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>'
beforePrice="200.000"
afterPrice="160.000"
linkShopee="https://shopee.co.id/Muscle-First-Pro-Whey-100-Box-isi-10-Sachet-(40g)-Suplemen-Fitness-i.8802988.18772292975?sp_atk=c07fd468-88bf-4222-b64f-49ac84c4171a&xptdk=c07fd468-88bf-4222-b64f-49ac84c4171a&utm_source=shopee&utm_medium=cpc&utm_campaign=whey_shopee&utm_id=M1PSPW01&utm_term=whey"
linkWhatsapp="https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bwhey%22"
/>

<SectionNine 
subtitle="Order Now"
title='{productName}'
/>