<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let classes: string;
    export let linkHref: string;
    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<div class="hidden md:flex justify-end items-end w-auto h-auto px-0 py-2 text-center">
    <a on:click={() => scrollTo('#get-product')} href={linkHref} class="cursor-pointer flex justify-center items-center leading-none text-center {classes} w-64 py-2 px-6">
        <span class="block text-xl uppercase font-black text-white">Beli Sekarang</span> 
    </a>
</div>