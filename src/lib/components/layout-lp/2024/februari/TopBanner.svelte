<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let Banner: string;
    export let Bannerlg: string;
    export let titleName: string;

    let buttonTitle = 'Langsung Cek Promonya!';

    function scrollTo(element: string, duration = 1500, offset = 1000) {
        animatedScroll({ element, duration, offset });
    }
    
    function scrollMobile(element: string, duration = 1500, offset = 700) {
        animatedScroll({ element, duration, offset });
    }
</script>

<div class="relative">
    <div class="hidden xl:block lg:block md:block">
        <div class="text-center relative">
            <img src={Bannerlg} alt={titleName} class="w-full" />
            <!-- button in front of the image -->
            <button
                on:click={() => scrollTo('#get-product')}
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-xl italic p-2 px-16 text-white rounded-full border border-yellow-400"
            >
                {buttonTitle}
            </button>
        </div>
    </div>
    <div class="hidden xs:block sm:block md:hidden w-full" >
        <div class="text-center">
            <img src={Banner} alt={titleName} class="w-full"/>
            <div class="bg-black py-4">
                <button
                on:click={() => scrollMobile('#get-product')}
                class=" bg-transparent xs:text-sm sm:text-base mb-4 italic p-1 px-16 text-white rounded-full border border-yellow-400"
            >
                {buttonTitle}
            </button>
            </div>
        </div>
    </div>
</div>
