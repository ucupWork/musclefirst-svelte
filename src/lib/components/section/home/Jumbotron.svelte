<script lang="ts">
  import { onMount } from 'svelte';
  import anniversaryEvent from '$images/anniversary/banner-jumbotron.webp';
  import NewRelease from '$images/jumbotron/jumbo-new-mar.webp';
  import AllTimeBest from '$images/jumbotron/jumbo-all-best-seller.webp';
  import AllProducts from '$images/jumbotron/jumbo-all-products.webp';
  import BannerEvent from '$images/jumbotron/jumbo-event-spesial.webp';
  import { ImageResponsive } from '$shared/image/index';

  let Carousel: any; // for saving Carousel component class
  let carousel: { goToNext: () => void; goToPrev: () => void; }; // for calling methods of the carousel instance
  // CDN Set to Digita Ocean Space
  let cdn: boolean = false;
  export let id: string;
  
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });
  
  const handleNextClick = () => {
    carousel.goToNext()
  }
  
  const handlePrevClick = () => {
    carousel.goToPrev()
  }
</script>
<section
  {id}
  class="w-full h-auto bg-[#0a0908] relative shadow-xl"
>
  <div class="w-full h-auto overflow-hidden relative">
    <div
      class="flex flex-col w-full px-2 md:px-4 md:text-left text-center py-4 justify-center items-center"
    >
      <div class="flex justify-center items-center w-full h-full relative md:px-10 mb-0">
        <svelte:component
          this={Carousel}
          bind:this={carousel}
          autoplayDuration={3000}
          arrows={false}
          autoplayProgressVisible
          pauseOnFocus
        >

        <a rel="noreferrer" target="_blank" href="/sixstreme" class="flex justif-center items-center w-full h-full relative">
          <picture class="w-full h-full relative z-0">
              <source srcset={anniversaryEvent} type="image/webp"/>
              <ImageResponsive 
                srcsetActive={false}
                width={1601}
                height={955} 
                src={anniversaryEvent}
                breakpoints={[1601, 1280, 1024, 912, 820, 414, 375]}
                classes="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                alt="anniversaryEvent"
                style="margin: 0px"
              />
          </picture>
        </a>

          <a rel="noreferrer" target="_blank" href="https://shope.ee/6pTnTBrk8m" class="flex justif-center items-center w-full h-full relative">
            <div class="absolute inset-x-0 bottom-0 z-10 flex flex-col w-full h-full justify-center">
              <div class="flex flex-col justify-center items-start text-right py-4 px-4 md:px-24 bg-transparent rounded">
                <div class="flex flex-col text-left md:-space-y-1 mb-2 md:mb-4">
                  <span class="text-xs md:text-2xl text-pink-900 font-bold leading-none uppercase font-ttnorms mb-1 md:mb-2">Temukan Rahasia</span>
                  <div class="flex justify-start md:justify-center w-auto items-center bg-[#ff2b63] md:p-4">
                    <h1 class="text-2xl md:text-9xl text-white font-black leading-none uppercase font-blackttnorms">Shape</h1>
                  </div>
                  <h1 class="text-2xl md:text-9xl text-[#ff2b63] font-black leading-none uppercase font-blackttnorm mb-1 md:mb-4">& Glow</h1>
                  <span class="text-xs lg:text-2xl text-pink-900 font-bold leading-none uppercase font-ttnorms">Bersama Musclefirst</span>
                </div>
                <a rel="noreferrer" target="_blank" href="https://shope.ee/6pTnTBrk8m" class="flex justify-center items-center bg-gradient-to-r from-[#ff2b63] to-pink-900 border-2 border-[#ff2b63] py-1.5 md:py-2 px-4 md:px-8 rounded-full mt-3 md:mt-6">
                  <span class="font-black text-xs md:text-2xl italic uppercase text-zinc-50">Cek Produknya Disini</span>
                </a>
              </div>
            </div>
            <picture class="w-full h-full relative z-0">
                <source srcset={NewRelease} type="image/webp"/>
                <ImageResponsive 
                  srcsetActive={false}
                  width={1601}
                  height={955} 
                  src={NewRelease}
                  breakpoints={[1601, 1280, 1024, 912, 820, 414, 375]}
                  classes="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                  alt="NewRelease"
                  style="margin: 0px"
                />
            </picture>
          </a>
          
          <a href={'/products'} class="flex justify-center items-center w-full h-full">
            <div class="flex justify-center items-center w-full h-full relative">
              <div class="w-auto h-full absolute inset-x-0 -top-16 md:-top-48 z-10 flex flex-col justify-center items-center text-center">
                <h1 class="font-bankghotic block text-2xl md:text-7xl text-white font-black uppercase">Product</h1>
                <h1 class="font-solois block text-2xl md:text-8xl text-amber-500 font-black uppercase">Best Seller!</h1>
              </div>
              <picture class="w-full h-full z-0">
                  <source srcset={AllTimeBest} type="image/webp"/>
                  <ImageResponsive 
                    srcsetActive={false}
                    width={1601}
                    height={955} 
                    breakpoints={[1601, 1280, 1024, 912, 820, 414, 375]}
                    src={AllTimeBest}
                    classes="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                    alt="AllTimeBest"
                    style="margin: 0px"
                  />
              </picture>
            </div>
          </a>
          
          <a href={'/campaign/monthly/whey'} class="flex justif-center items-center w-full h-full relative">
            <div class="absolute inset-0 z-10 w-full h-full">
              <div class="grid grid-cols-2 gap-0 w-full h-full justify-end md:justify-center items-end md:items-center">
                <div class="col-span-full flex md:hidden justify-between items-center w-full h-full px-8">
                  <div class="flex flex-col justify-between items-center w-full h-full py-4 px-4 text-center bg-transparent">
                    <div class="flex flex-col w-auto h-auto">
                      <span class="font-ttnorms text-xs font-bold uppercase text-zinc-100 mt-4">For Selection Products</span>
                      <h1 class="font-blackttnorms text-4xl md:text-6xl text-white uppercase">50% OFF</h1>
                    </div>
                    <div class="flex justify-center items-center bg-black hover:bg-zinc-900 border-2 border-white py-1.5 md:py-2 px-4 md:px-8 rounded-md mt-6 md:mt-6 md:max-w-md">
                      <span class="font-bankghotic font-bold text-xs md:text-2xl uppercase text-zinc-100">Order Sekarang!</span>
                    </div>
                  </div>
                </div>
                <div class="col-span-full hidden md:flex justify-end items-end w-full h-auto px-8">
                  <div class="flex flex-col justify-center items-center py-2 md:py-6 px-4 md:px-8 text-center bg-transparent">
                    <div class="flex flex-col w-auto h-auto mb-4">
                      <h1 class="font-blackttnorms text-8xl text-white uppercase">50% OFF</h1>
                      <span class="font-ttnorms text-2xl font-bold uppercase text-zinc-100">For Selection Products</span>
                    </div>
                    <a href={'/campaign/monthly/whey'} class="bg-black hover:bg-zinc-900 border-4 border-white py-2 px-2 md:px-8 rounded-full mt-0 md:mt-6 md:max-w-md">
                      <span class="font-bankghotic font-bold text-sm md:text-2xl uppercase text-zinc-100">Order Sekarang!</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <picture class="w-full h-full relative z-0">
                <source srcset={AllProducts} type="image/webp"/>
                <ImageResponsive 
                  srcsetActive={false}
                  width={1601}
                  height={955} 
                  breakpoints={[1601, 1280, 1024, 912, 820, 414, 375]}
                  src={AllProducts}
                  classes="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                  alt="AllProducts"
                  style="margin: 0px"
                />
            </picture>
          </a>
        </svelte:component>
        <!-- Button prev & next -->
        <div class="absolute left-4 inset-y-0 w-auto h-full flex justify-center items-center">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <button on:click={handlePrevClick} class="hidden md:flex w-12 h-12 justify-center items-center bg-black shadow-xl border border-zinc-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-3 h-3 bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </div>
        <div class="absolute right-4 inset-y-0 w-auto h-full flex justify-center items-center">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <button on:click={handleNextClick} class="hidden md:flex w-12 h-12 justify-center items-center bg-black shadow-xl border border-zinc-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        class="hidden md:flex flex-col md:flex-row w-full justify-between items-center space-y-2 px-4 md:px-20"
      >
        <div class="w-full px-4 md:px-0 py-8 max-w-lg md:justify-start">
          <h1
            class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-4xl md:text-5xl text-left text-white"
          >
            <span class="block font-black text-amber-500">{'Pilih'}</span> 
            <span class="block font-black">{'Tujuanmu'}</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .stroke-text {
      color: #9c2c77;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: #9c2c77;
  }

  section {
    --width: 100%;
    --height: calc(var(--width) * 9 / 16);
    --padding: 0rem;
    position: relative;
    margin: 0 calc(-1 * var(--padding-x));
    width: var(--width);
    padding: 0 var(--padding);
  }
  
  @media all and (orientation: landscape) and (min-width: 1194px) {
    section {
      margin-top: 0rem;
    }
  }

  /* .clip-outer {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      -webkit-mask-image: linear-gradient(
          to right,
          transparent 0%,
          black 10%,
          black 90%,
          transparent 100%
      );
  } */
</style>
