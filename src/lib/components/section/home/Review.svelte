<script lang="ts">
    import Lazy from 'svelte-lazy';
    import { tippy } from '$utils/tippy';
    import BAReviewOne from '$images/review-grid/optimize/ba-rvg-1.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewTwo from '$images/review-grid/optimize/ba-rvg-2.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewThree from '$images/review-grid/optimize/ba-rvg-3.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewFour from '$images/review-grid/optimize/ba-rvg-4.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewFive from '$images/review-grid/optimize/ba-rvg-5.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewSix from '$images/review-grid/optimize/ba-rvg-6.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewSeven from '$images/review-grid/optimize/ba-rvg-7.webp?w=500;700;900;1200&format=webp&srcset'
    import BAReviewEight from '$images/review-grid/optimize/ba-rvg-8.webp?w=500;700;900;1200&format=webp&srcset'
    
    // CDN Set to Digita Ocean Space
    let cdn: boolean = true;
    export let id: string;
    export let headerSection: boolean;
</script>
<div
    id={id}
    class="flex flex-col justify-center items-center w-full h-auto bg-transparent border border-zinc-300 dark:bg-zinc-900 relative m:px-4 md:px-8 py-12 md:py-16"
>
    {#if headerSection}
    <div  class="w-full flex flex-col pt-8 md:pt-0">
        <div  class="w-full mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-center items-center">
            <div  class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div  class="flex flex-col space-y-4 w-full mb-4">
                    <h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black dark:text-white">
                        {'Testimoni'}
                    </h1>
                    <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-800 dark:text-zinc-100 text-md tracking-loose max-w-md">
                        {'Mereka yang telah menjaga kesehatan bersama Musclefirst, siapa berikutnya?'}
                    </p>
                </div>
                <div  class="w-full flex justify-center md:justify-end items-center pb-6">
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'Recently Testimonials - Muscle First'}}  href={'/testimonials'} class="mx-1 text-green-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-zinc-900">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/if}
    <div  class="grid grid-cols-4 gap-2 justify-center items-center w-full px-4 md:px-8 pb-0 md:pb-8">
        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-1.webp` : BAReviewOne} type="image/webp"/>
                        <img 
                            width="500"
                            height="500"
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-1.webp` : BAReviewOne}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 1"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-2.webp` : BAReviewTwo} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-2.webp` : BAReviewTwo}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 2"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-3.webp` : BAReviewThree} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-3.webp` : BAReviewThree}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 3"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-4.webp` : BAReviewFour} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-4.webp` : BAReviewFour}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 4"/>
                    </picture>
                
            </div>
        </div>
        
        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-5.webp` : BAReviewFive} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-5.webp` : BAReviewFive}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 5"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-6.webp` : BAReviewSix} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-6.webp` : BAReviewSix}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 6"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-7.webp` : BAReviewSeven} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-7.webp` : BAReviewSeven}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 7"/>
                    </picture>
                
            </div>
        </div>

        <div  class="col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg">
            <div class="bg-transparent flex justify-center items-center dark:highlight-white/5">
                
                    <picture>
                        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-8.webp` : BAReviewEight} type="image/webp"/>
                        <img
                            width="500"
                            height="500" 
                            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-8.webp` : BAReviewEight}
                            class="w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                            alt="Review BA 8"/>
                    </picture>
                
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
.review-card {
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 8px 10px #3f3a21;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 16px 16px #534b1b;
    }
}
</style>
