<script lang="ts">
	import { page } from '$app/stores';
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    import { openmenuproduct } from '$stores/index';
    import { ProductMenu } from '$shared/mega-menu/index';
    /*MOBILE MENU*/
    
	function toggleProductOpen() {
		openmenuproduct.set(true)
	}
    
    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<ProductMenu />

<div class="w-full hidden md:flex flex-col md:flex-row justify-between items-center space-y-2 bg-[#0a0908] border-b border-black px-4 md:px-16 py-4">
    <nav  class="flex flex-row justify-center items-center text-center pb-2 md:pb-0">
        <a rel="noreferrer" href="/" class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/'}>
            {'Beranda'}
        </a>
        <button on:mouseenter={toggleProductOpen} class="font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/products' || $page.url.pathname === '/discount' || $page.url.pathname === '/catalog-product'}>
            {'Produk'}
            <span class="flex justify-center items-center ml-4 w-5 h-5 bg-transparent border border-black">
                {#if $openmenuproduct}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-zinc-100 bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-zinc-100 bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                {/if}
            </span>
        </button>
        <a rel="noreferrer" href={`/calculator`} class="font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/calculator'}>
            {'Kalkulator'}
            <span class="flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-amber-500 bi bi-activity" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                </svg>
            </span>
        </a>
        <a rel="noreferrer" target="_blank" href={`/`} class="relative font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/musclefirst-durex'}>
            <div class="z-10 absolute -top-0 -right-3 w-auto h-auto">
                <span class="flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
            </div>
            <span class="z-0 w-auto h-auto">{'Promosi'}</span>
        </a>
        <a rel="noreferrer" href={`/blog`} class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/article'}>
            {'Blog'}
        </a>
        <a rel="noreferrer" href={`/recipes`} class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/recipes'}>
            {'Resep'}
        </a>
    </nav>
    <nav  class="flex flex-wrap items-end text-end justify-end pb-2 md:pb-0">
        <a rel="noreferrer" href={`/agent`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/agent'}>
            {'Daftar Agen'}
        </a>
        <a rel="noreferrer" href={`/challenge`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/challenge'}>
            {'Tantangan'}
        </a>
        <a rel="noreferrer" href={`/testimonials`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/testimonials'}>
            {'Testimonial'}
        </a>
        <a rel="noreferrer" href={`/community`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/community'}>
            {'Komunitas'}
        </a>
    </nav>
</div>

<style lang="postcss">
    .active {
        @apply text-amber-500 font-bold;
    }
</style>