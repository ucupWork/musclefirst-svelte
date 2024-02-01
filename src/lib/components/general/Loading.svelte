<script lang="ts">
    import { fade, draw } from "svelte/transition";
    import { onMount } from "svelte";
    import { quadInOut } from 'svelte/easing';
    import LogoWhite from '$images/site/logo-white.png?w=500;700;900;1200&format=webp;png&srcset';
    let start: boolean = false
    onMount(()=> {
        start = true
    })
</script>

<div class="wrapper bg-zinc-900" out:fade>
    {#if start}
    <div class="border shadow-xl p-4">
        <span class="loading flex justify-center items-center">
            <picture>
                <source srcset="${LogoWhite}" type="image/webp"/>
                <img 
                    src="${LogoWhite}"
                    class="w-12 h-auto"
                    alt="AboutImage"/>
            </picture>
        </span>
    </div>
    {/if}
</div>

<style lang="scss">
    .wrapper {
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
</style>