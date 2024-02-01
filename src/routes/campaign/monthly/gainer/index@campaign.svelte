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
	import { rasaList, manfaatList, cocokCardList, cocokCardOtherList, testimonialCardList } from '$contents/landing-page/v-two/campaign/monthly/gainer/index';
    import { certifiedList } from '$contents/product-page/list-certified';
	import { productList } from '$contents/home-page/list-products';

    import BannerJumbotron from '$images/product/pro-gainer/land-page/01/banner-jumbotron.webp';
    import GainerOne from '$images/product/pro-gainer/land-page/01/produk-01-1.webp';
    import GainerTwo from '$images/product/pro-gainer/land-page/01/produk-02-3.webp';
    import GainerThree from '$images/product/pro-gainer/land-page/01/produk-03.webp';

    let pilihButton = 1;
    let discountTag = false;
    let productName = 'Pro Gainer';
    let disableBottomBanner = false;
    let disablePriceJumbotron = false;
    let labelTxtPembelian = false;
    let beforePriceLabel = true;
</script>

<SEO 
    title="Campaign Pro Gainer" 
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
txtPenawaran="Berisi makin keren, dengan pro gainer!"
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
onBgColor={true}
subtitle=""
title="Apakah kamu pernah mengalami?"
{cocokCardList}
gridCount={cocokCardList.length}
bgColor="zinc-900"
textHead="zinc-900"
textSubHead="zinc-100"
borderColor="zinz-50"
cardColor="zinc-800"
bgImgColor="white"
txtDescColor="gray-100"
/>

<SectionThree 
subtitle="{productName} "
title='<span class="block uppercase">Penambah </span> 
<span class="block uppercase">Berat badan?</span> '
descriptionOne='{productName} adalah susu suplemen yang mengandung komposisi yang lengkap, seperti protein, karboidrat, dna juga kalori yang cukup tinggi. maka dari itu <span class="font-bold italic">{productName}</span> adalah pilihan yang tepat untuk kamu yang ingin menambah berat badan, membentuk otot tubuh, menambah massa otot, dan memproduksi sumber energi saat beraktivitas.'
descriptionTwo=' <span class="font-bold uppercase">Pro Gainer</span> merupakan bubuk portein berkalori tinggi, dengan rata-rata mengandung 160 gram karbohidrat, 55 gram protein dan 1030 kalori gainer per serving-nya.'
imgLink={GainerOne}
altImg="AboutImage"

bgColor="zinc-800"
textHead="white"
textSubHead="amber-500"
txtDescColor="zinc-100"
/>

<SectionFour
txtTitleColor="zinc-900"
bgColor="transparent"
{productName}
bgImg={GainerTwo}
imgLink=""
altImg="Gainer"
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

<SectionCountdown 
bgColorSection="zinc-100" 
bgColor="yellow-600" 
title="Periode Akhir Bulan" 
subtitle="Promo Terbatas" 
dateText="1 - 30 Oktober 2022" 
textColor="white"
/>

<SectionEight 
bgColorSection="zinc-900"
{beforePriceLabel}
subtitle="Promo Khusus Pemesanan Pre Order"
title='<span class="block">BERAPA HARGANYA?</span>'
imgLink={GainerThree}
altImg="HargaImage"
titlePrice='<span class="block text-white">Pake Bulking Hemat</span>'
descriptionPrice='<h3 class="text-gray-100 font-base text-xl md:text-2xl">Dengan berbagai manfaat diatas</h3>
<h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>{productName}</b> + <b>PRO Creatine</b> bisa didapatkan</h3>
<h3 class="text-gray-100 font-base text-xl md:text-2xl uppercase font-bold">Cuma dengan harga</h3>'
beforePrice="486.600"
afterPrice="416.600"
linkShopee="https://shopee.co.id/Muscle-First-Paket-Bulking-Pembesar-Badan-Pro-Gold-Gainer-2lbs-Creatine-300gr-i.8802988.294373573?sp_atk=6e9bc972-b8c4-4318-a604-4551d55bbc10&xptdk=6e9bc972-b8c4-4318-a604-4551d55bbc10"
linkWhatsapp="https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bgainer%22"
/>

<SectionNine 
subtitle="Order Now"
title='{productName}'
/>

<style></style>