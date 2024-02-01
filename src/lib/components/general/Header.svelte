<script lang="ts">
	import { page } from '$app/stores';
    import { productList } from "$contents/home-page/list-products";
    import { TopTop, TopMenu } from '$globals/button/index';
    import { openmobile, disabledScroll } from '$stores/index';
    import { Search } from '$globals/input/index';
    import { ListProducts } from '$globals/list-group/index';
    import LogoImage from '$images/site/logo-white.png';
	import { searchTerm } from '$stores';
    
	let filteredProducts = [];
	// CDN Set to Digita Ocean Space
	let cdn: boolean = true;
    export let segment: any;
    
	const searchProducts = () => {	
		return filteredProducts = productList.filter(product => {
			let productTitle = product.name.toLowerCase();
			return productTitle.includes($searchTerm.toLowerCase());
		});
            
		$searchTerm = ""; 
	}
    /*MOBILE MENU*/

    function toggleMobileOpen() {
        openmobile.set(true);
        disabledScroll.set(true);
    }
</script>

<svelte:head>
	<script>
		let themeColor = '#fffff'
		const theme = localStorage.theme
		const isColorSchemeDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		if (theme === 'dark' || (!theme && isColorSchemeDark)) {
			document.documentElement.classList.add('dark')
			themeColor = '#151515'
		}
		document.head.insertAdjacentHTML(
			'beforeend',
			`<meta name="theme-color" content="${themeColor}">`
		)
	</script>
</svelte:head>
<!-- menu & TopTop -->
<TopMenu on:click={toggleMobileOpen} classes="left-5 top-4 md:hidden" />
<TopTop classes="right-2 top-5 md:top-4" />

<nav 
    id={segment}
    class="bg-[#0a0908] sm:px-4 md:px-8 sm:py-6 md:py-2 shadow-xl border-b border-black z-20 relative"
>
    <div class="w-full flex flex-wrap p-2 justify-between items-center md:items-center">
        <div class="w-auto md:w-6/12 flex justify-start items-center">
            <a href="/" class="flex title-font font-medium items-center px-2 text-zinc-900 mb-4 md:mb-0 md:mr-16">
                <div  class="m-2 w-16 h-auto rounded-md shadow-lg bg-transparent flex justify-start items-center overflow-hidden">
                    <img  width="647px" height="504px" class="object-fill h-full w-full" alt="logo" src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp` : LogoImage} />
                </div>
            </a>
            <!-- Hidden Menu Web -->
            <div class="hidden md:flex flex-col justify-start items-center space-y-2 w-full relative">
                <Search val={$searchTerm} on:input={searchProducts} />
                <ListProducts {filteredProducts} />
            </div>
        </div>
        <div class="w-auto md:w-auto flex justify-end items-center md:order-2">
            <div class="hidden md:flex flex-row space-x-2 justify-center items-center pb-2 md:pb-0 px-4">
                <a href={'/list-agent'} class="rounded font-ttnorms nav-link bg-black hover:shadow-md ml-5 py-2 px-8 text-[#f5b82b] border border-[#f5b82b] font-bold text-xs uppercase">{'List Agen'}</a>
                <a href={`/links`} class="flex items-center bg-amber-500 border border-amber-500 shadow py-1.5 px-4 font-ttnorms nav-link mr-0 text-sm font-semibold cursor-pointer whitespace-pre-line text-black rounded {$page.url.pathname.includes("/links") ? "font-medium text-[#FEB300]" : ""}">
                    {'Marketplace'}
                    <span class="flex justify-center items-center ml-4 w-5 h-5 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 text-black bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                        </svg>
                    </span>
                </a>
            </div>
            <button on:click={toggleMobileOpen} data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                <span class="sr-only">Open Main Menu</span>
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>    
            </button>
        </div>
    </div>

</nav>

<style lang="scss">
</style>
