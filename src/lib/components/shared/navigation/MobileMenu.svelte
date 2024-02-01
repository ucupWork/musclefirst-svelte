<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    import { openmobile, disabledScroll } from '$stores/index';
    import { ProductMenuMobile } from '$shared/mega-menu/index';
	import { page } from '$app/stores';
    import LogoImage from '$images/site/logo-black.webp'

	const wheel = (node: { addEventListener: (arg0: string,arg1: (e: any) => void,arg2: { passive: boolean; }) => void; removeEventListener: (arg0: string,arg1: (e: any) => void,arg2: { passive: boolean; }) => void; }, options: { scrollable: any; }) => {
        let { scrollable } = options;
        
        const handler = (e: { preventDefault: () => void; }) => {
            if (!scrollable) e.preventDefault();
        };
        
        node.addEventListener('wheel', handler, { passive: false });
        
        return {
            update(options: { scrollable: any; }) {
                scrollable = options.scrollable;
            },
            destroy() {
                node.removeEventListener('wheel', handler, { passive: false });
            }
        };
    };

	// CDN Set to Digita Ocean Space
	let cdn: boolean = true;
	let openMenu = false;
	let scrollable = false;
	let isMenuRendered: boolean;
    
	const toggle = () => openMenu = !openMenu

	$: isActive = $page.url.pathname === $$props.href;
	$: {
		if ($openmobile) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}   
	}
    
    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }

    function toggleMobileClose() {
        openmobile.set(false);
        scrollable = true;
    }
</script>

<!-- <svelte:window use:wheel={{scrollable}} /> -->

{#if $openmobile}
<div class="fixed bg-zinc-100 w-full md:hidden h-full overflow-y-auto z-10 {$disabledScroll ? 'scroll-lock' : ''}">
    <div class="flex justify-between items-center w-full h-auto py-4 mt-4 px-6 relative bg-transparent">
        <div class="flex flex-row justify-center items-center">
            <a href={'/'} hreflang={'/'} class="flex title-font font-medium items-center px-2 text-zinc-900 mb-4 md:mb-0" class:font-black={isActive}>
                <div  class="p-2 w-16 h-auto rounded shadow bg-transparent flex justify-center items-center overflow-hidden">
                    <img width="647px" height="504px" class="object-fill h-full w-full" alt="logo" src={LogoImage} />
                </div>
            </a>
        </div>
        <div class="flex flex-row justify-center items-center">
            <button
                class="flex justify-center burger visible items-center px-1.5"
                aria-label="Toggle menu"
                type="button"
                on:click={toggleMobileClose}
            >
                <svg
                    class="h-5 w-5 text-zinc-900 mt-3"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    shape-rendering="geometricPrecision"
                    data-hide="true"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
                >
            </button>
        </div>
    </div>
    <div class="menu absolute flex flex-col w-full h-auto py-0 pb-0 px-8 bg-zinc-100"
        class:menuRendered={isMenuRendered}>
        <div class="grid grid-cols-4 gap-2 w-full h-auto py-0">
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 150ms;"
                on:click={toggleMobileClose}
                href=".">
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Beranda'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 150ms;"
                on:click={toggleMobileClose}
                href="/musclefirst-durex">
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Promo'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <button
                class="w-full h-auto"
                style="transition-delay: 250ms;"
                on:click={toggle}>
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Produk'}</span>
                        {#if openMenu}
                            <div class="i-ph:caret-down text-zinc-900" />
                        {:else}
                            <div class="i-ph:caret-right text-zinc-900" />
                        {/if}
                    </div>
                </button>
                <ProductMenuMobile isOpen={openMenu} />
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 250ms;"
                on:click={toggleMobileClose}
                href={'/recipes'}>
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Resep'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 350ms;"
                on:click={() => [
                    scrollTo('#review'),
                    setTimeout(() => (toggleMobileClose), 300)
                ]} 
                href={'/'} >
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Testimonial'}</span>
                        <div class="i-ph:caret-right text-zinc-900 hidden md:block" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 400ms;"
                on:click={toggleMobileClose}
                href={'/challenge'} >
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Tantangan'}</span>
                        <div class="i-ph:caret-right text-zinc-900 hidden md:block" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 450ms;"
                on:click={toggleMobileClose}
                href={'/blog'}>
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Artikel'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 250ms;"
                on:click={toggleMobileClose}
                href={'/community'}>
                    <div class="w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center">
                        <span class="text-sm text-zinc-900 font-bold">{'Komunitas'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 500ms;"
                on:click={toggleMobileClose}
                href={'/calculator'}>
                    <div class="w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 border-amber-500 shadow-md shadow-orange-500/50 flex justify-between items-center text-center">
                        <span class="text-sm text-black font-bold">{'Kalkulator'}</span>
                        <span class="flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black">
                            <div class="i-ph:activity h-3 w-3 text-amber-500" />
                        </span>
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 500ms;"
                on:click={toggleMobileClose}
                href={'/links'}>
                    <div class="w-full px-4 py-4 bg-white border-amber-500 shadow-md shadow-orange-500/50 flex justify-between items-center text-center">
                        <span class="text-xs text-amber-900 font-bold uppercase">{'Marketplace'}</span>
                        <div class="i-ph:caret-right text-amber-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 500ms;"
                on:click={toggleMobileClose}
                href={'/list-agent'}>
                    <div class="w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 shadow-md shadow-orange-500/50 flex justify-between items-center text-center">
                        <span class="text-xs text-zinc-900 font-bold uppercase">{'Daftar Agen'}</span>
                        <div class="i-ph:caret-right text-zinc-900" />
                    </div>
                </a>
            </div>
            <div class="col-span-full w-full h-auto">
                <a
                style="transition-delay: 500ms;"
                on:click={toggleMobileClose}
                href={'/agent'}>
                    <div class="w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 shadow-md shadow-orange-500/50 flex justify-between items-center text-center">
                        <span class="text-xs text-zinc-900 font-bold uppercase">{'Gabung Agen'}</span>
                        <div class="i-ph:plus-circle text-zinc-900" />
                    </div>
                </a>
            </div>
            <!-- Whatsapp & Shopee Button -->
            <div class="col-span-full w-full h-auto mt-1">
                <div class="flex flex-row space-x-4 w-auto h-auto">
                    <a rel="noreferrer"
                    style="transition-delay: 400ms;"
                    on:click={toggleMobileClose}
                    href="https://bit.ly/3nB1aDx" target="_blank">
                        <div class="w-full px-4 py-2 bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/50 justify-center items-center text-center">
                            <span class="text-xs text-white font-bold uppercase">Whatsapp</span>
                        </div>
                    </a>
                    
                    <!-- Shopee Button -->
                    <a rel="noreferrer"
                    style="transition-delay: 400ms;"
                    on:click={toggleMobileClose}
                    href="https://bit.ly/3ykdY5Q" target="_blank">
                        <div class="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/50 justify-center items-center text-center">
                            <span class="text-xs text-white font-bold uppercase">Shopee</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-span-full w-full h-auto mt-1">
                <a
                style="transition-delay: 500ms;"
                on:click={toggleMobileClose}
                href={'/contact'}>
                    <div class="w-full px-4 py-4 shadow bg-zinc-600 border-b flex justify-between items-center text-center">
                        <span class="text-sm text-white font-bold">{'Contact'}</span>
                        <div class="i-ph:caret-right text-white" />
                    </div>
                </a>
            </div>
        </div>

        <div class="flex justify-center items-center w-full h-auto py-4 mt-4 px-0 relative bg-zinc-200 border">
            <div class="flex flex-col justify-center items-center">
                <div class="mb-0 md:mb-0 mt-0 space-x-6 sm:justify-center sm:mt-0 text-zinc-900 text-sm">
                    <small>
                        © 2021 
                        <a rel="noreferrer" href="." class="text-sm hover:underline text-yellow-600 font-bold">
                            <small class="uppercase">Musclefirst™</small>
                        </a>
                    </small>
                </div>
                <span class="block font-bold text-xs uppercase text-zinc-800 sm:text-center dark:text-gray-400 px-16 md:px-0">
                    <small>PT Unggulan Bugar Indonesia</small>
                </span>
            </div>
        </div>
    </div>
</div>
{/if}

<style lang="postcss">
	.burger {
		transition: opacity 300ms ease;
		width: auto;
		height: auto;
	}
	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition: opacity 300ms ease, transform 300ms ease;
	}
	.menu {
		width: 100%;
		height: 100%;
		z-index: 1000;
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease;
	}
	.menu a {
		transform: translateX(-16px);
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
		width: 0px;
	}
	.menuRendered {
		opacity: 1;
	}
	.menuRendered a {
		@apply w-full border-gray-200;
		transform: translateX(0);
		opacity: 1;
	}
	@keyframes grow {
		0% {
			height: 0px;
		}
		100% {
			height: 24px;
		}
	}
</style>