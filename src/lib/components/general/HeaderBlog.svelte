<script lang="ts">
    import LogoImage from '$images/site/logo-white.webp';
	import { page } from '$app/stores';
    export let classes: string;
</script>

<div class="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-16 py-4 bg-[#0a0908]  border-b border-amber-500 fixed top-0 z-50">
    <div class="hidden md:flex flex-col md:flex-row justify-between items-center space-y-2 bg-[#0a0908] w-full h-auto {classes}">
        <nav  class="flex flex-row justify-center items-center text-center pb-2 md:pb-0">
            <a rel="noreferrer" href="/" class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/'}>
                <div  class="w-12 h-auto rounded-md shadow-lg bg-transparent flex justify-start items-center overflow-hidden">
                    <img class="object-fill h-auto w-12" alt="Musclefirst Logo" src={LogoImage} />
                </div>
            </a>
            <a rel="noreferrer" href={`/products`} class="font-ttnorms flex items-center nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/products'}>
                {'Products'}
            </a>
            <a rel="noreferrer" href={`/calculator`} class="font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/calculator'}>
                {'Kalkulator'}
                <span class="flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black">
                    <div class="i-ph:activity h-3 w-3 text-amber-500" />
                </span>
            </a>
            <a rel="noreferrer" target="_blank" href={`/campaign/special-event`} class="relative font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/campaign/monthly/whey'}>
                <div class="z-10 absolute -top-0 -right-3 w-auto h-auto">
                    <span class="flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                </div>
                <span class="z-0 w-auto h-auto">{'Promosi'}</span>
            </a>
            <a rel="noreferrer" href={`/blog`} class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/blog'}>
                {'Blog'}
            </a>
            <a rel="noreferrer" href={`/recipes`} class="font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/recipes'}>
                {'Resep'}
            </a>
        </nav>
        <nav  class="flex flex-wrap items-end text-end justify-end pb-2 md:pb-0">
            <a data-sveltekit-noscroll href={`/agent`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/agent'}>
                {'Partnership'}
            </a>
            <a data-sveltekit-noscroll href={`/challenge`} class="font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100" class:active={$page.url.pathname === '/challenge'}>
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
</div>