<script lang="ts">
    import { tippy } from '$utils/tippy';
    import { productList } from "$contents/home-page/list-products";
    import { CardProductHome } from "$globals/card/index";

    export let id: string;
</script>
<div id={id} class="w-full sm:h-auto md:h-auto bg-[#0a0908] relative sm:px-4 md:px-8 sm:py-0 md:py-12 border-t border-zinc-900">
    <div  class="w-full flex flex-col pt-8 md:pt-0">
        <div  class="w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-center items-center">
            <div  class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-2">
                <div  class="flex flex-col space-y-4 w-full mb-4">
                    <h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-white">
                        {'Produk Kami'}
                    </h1>
                    <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-white text-md tracking-loose max-w-md">
                        {'Kami memilih dari beberapa produk unggulan yang ada, nikmati rasa yang berbeda dengan begitu banyak manfaat'}
                    </p>
                </div>
                <div  class="w-full flex justify-center md:justify-end items-end pb-6">
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'All Products - Muscle First'}} href={'/products'} class="mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div  class="relative flex overflow-x-scroll snap-proximity snap-x scroll-smooth snap-center snap-normal scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-zinc-300 px-2 lg:px-8 pt-4 pb-0">
        <div  class="flex flex-nowrap ml-0 md:ml-0 snap-x w-full h-auto pb-8">
            {#each productList as val}
            <CardProductHome 
                width={`256`}
                height={`256`}
                id={val.id} 
                imgUrl={val.imgUrl} 
                imgAlt={val.imgAlt} 
                linkHref={val.linkHref} 
            />
            {/each}
        </div>
    </div>
</div>

<style>
    @-webkit-keyframes scroll {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(calc(-250px * 7));
        transform: translateX(calc(-250px * 7));
      }
    }
  
    @keyframes scroll {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      100% {
        -webkit-transform: translateX(calc(-250px * 7));
        transform: translateX(calc(-250px * 7));
      }
    }
  
    .slider::after {
      -webkit-transform: rotateZ(180deg);
      transform: rotateZ(180deg);
    }
  
    .slider .slide-track {
      -webkit-animation: scroll 40s linear infinite;
      animation: scroll 40s linear infinite;
    }
  </style>

