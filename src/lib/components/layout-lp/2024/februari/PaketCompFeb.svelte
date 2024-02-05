<script>
  // image import
  import BulkingImg from '$images/special-event/chinese-new-year/pro-gainer.webp'
  import CuttingImg from '$images/special-event/chinese-new-year/pro-isolate.webp'
  import GlowingImg from '$images/special-event/chinese-new-year/pro-whey-collafit.webp'

  let paketResolusi = [
    {
      image: BulkingImg,
      packageName: 'Paket Bulking',
      linkShopee:
        'https://shopee.co.id/musclefirstofficialshop?shopCollection=246254074#product_list',
      descBundle:
        'Kombinasi paket partai bulking mass gainer dan creatine dapat mendukung pertumbuhan otot yang optimal dan pemulihan yang cepat. Susu gainer memberikan asupan kalori, protein, dan karbohidrat tinggi untuk pertumbuhan otot, sementara creatine meningkatkan kekuatan, daya tahan, dan retensi air dalam sel otot.',
      btnTop: 'Pro Gainer',
      sq1Top: '55g<br>protein',
      sq2Top: '1030<br>kcal',
      sq3Top: '160<br>carbs',
      btnBottom: 'Pro Creatine',
      sq1Bottom: '5g<br>creatine',
      sq2Bottom: '3g<br>protein',
      sq3Bottom: '0g<br>fat'
    },
    {
      image: CuttingImg,
      packageName: 'Paket Cutting',
      linkShopee:
        'https://shopee.co.id/musclefirstofficialshop?shopCollection=246253966#product_list',
      descBundle:
        'Kombinasi paket partai cutting whey isolate dan BCAA dapat mempercepat pemulihan, meningkatkan persentase massa otot sambil mengurangi persentase lemak tubuh, dan menjaga keseimbangan nutrisi selama program cutting. Whey isolate, mengandung sumber protein tinggi, menjaga massa otot dan memberikan energi. BCAA, mendukung sintesis protein, stamina, dan pembakaran lemak, memastikan pemeliharaan massa otot selama penurunan berat badan.',
      btnTop: 'Pro Isolate',
      sq1Top: '27g<br>protein',
      sq2Top: '7g<br>BCAA',
      sq3Top: '0g<br>fat',
      btnBottom: 'Pro BCAA',
      sq1Bottom: '7g<br>BCAA',
      sq2Bottom: '20g<br>KKAL',
      sq3Bottom: '0g<br>fat'
    },
    {
      image: GlowingImg,
      packageName: 'Paket Glowing',
      linkShopee:
        'https://shopee.co.id/musclefirstofficialshop?shopCollection=248465402#product_list',
      descBundle:
        'Kombinasi paket partai glowing whey protein dan kolagen dapat meningkatkan kekenyalan, hidrasi, dan regenerasi kulit. Kombinasi Pro Whey dan Pro Collafit mendukung pemulihan kulit setelah paparan sinar matahari dan memberikan nutrisi tambahan.',
      btnTop: 'Pro Whey',
      sq1Top: '24g<br>protein',
      sq2Top: '140<br>kkal',
      sq3Top: '1g<br>fat',
      btnBottom: 'Pro Collafit',
      sq1Bottom: '4g<br>protein',
      sq2Bottom: '80<br>kkal',
      sq3Bottom: '0g<br>sugar'
    }
  ]
</script>

<div>
  {#each paketResolusi as { image, packageName, linkShopee, descBundle, btnTop, sq1Top, sq2Top, sq3Top, btnBottom, sq1Bottom, sq2Bottom, sq3Bottom }}
    <section class=" bg-black">
      <a href={linkShopee}>
        <div class="container mx-auto py-10 px-4 sm:px-0 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 items-baseline gap-8">
            <div class="mt-5 md:mt-0">
              <h1
                class="text-white uppercase text-center font-bold text-3xl lg:text-5xl"
              >
                {packageName}
              </h1>
              <img
                src={image}
                alt={packageName}
                class="object-cover mt-4 rounded-lg bg-warmGray-600 shadow-md p-2 lg:p-5"
              />
            </div>
            <div class="col-span-2">
              <h1
                class=" text-white text-2xl p-3 mb-6 font-semibold text-justify"
              >
                {descBundle}
              </h1>
              <div
                class="flex flex-row my-3 gap-4 uppercase lg:text-3xl text-base"
              >
                <button
                  class="p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300 "
                  >{btnTop}</button
                >
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq1Top}
                </div>
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq2Top}
                </div>
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq3Top}
                </div>
              </div>
              <div
                class="flex flex-row my-3 gap-4 uppercase lg:text-3xl text-base"
              >
                <button
                  class="p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300 "
                  >{btnBottom}</button
                >
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq1Bottom}
                </div>
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq2Bottom}
                </div>
                <div
                  class="p-4 text-center border border-white font-bold text-white "
                >
                  {@html sq3Bottom}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  {/each}
</div>
