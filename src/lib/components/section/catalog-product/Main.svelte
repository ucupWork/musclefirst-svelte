<script lang="ts">
    import { ModalEkatalog } from '$globals/modal/index';
	import { onMount, tick } from 'svelte';
    import { onPrint, calcRT, getPageText } from '$utils/helpers';
	import { page } from '$app/stores';
    import { modalOpen } from '$stores/index';

    import FileSaver from "file-saver";
    import eKatalogProducts from '$images/e-katalog/all-products-catalog-compress.webp';

	let document = '/assets/site/all-products-catalog.pdf';
    let gDriveDocument = 'https://drive.google.com/file/d/1ybK1t0dcMDTzapWMDp-LJbAfuY8_Zy0k/preview';
    
    const printPdf = (url) => {
        onPrint(url);
    };

    const downloadPdf = (fileURL: string) => {
        let fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1);
        FileSaver.saveAs(fileURL, fileName);
    };

	onMount(() => {
        // 
	});
</script>

<div class="w-full h-auto bg-zinc-100 relative py-8 md:py-0">
	<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto">
		<div class="flex flex-col w-full h-auto px-8 md:px-16 max-w-3xl py-4 md:py-8">
			<span class="text-md font-black mt-2 text-amber-500 uppercase">
				{'Musclefirst'}<br>
			</span>
			<h2 class="font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl mb-4">
				{'E-Katalog Produk'}
			</h2>
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-auto h-auto">
                <button on:click={() => downloadPdf(document)} type="button" class="flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded">
                    <span class="font-black text-xs uppercase md:hidden text-black">Download</span>
                    <span class="font-thin text-xs uppercase hidden md:block text-black">
                        <small class="font-medium">Download</small>
                    </span>
                    <span class="w-auto h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-zinc-900 bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    </span>
                </button>

                <button on:click={() => printPdf(document)} type="button" class="flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded">
                    <span class="font-black text-xs uppercase md:hidden text-black">Download</span>
                    <span class="font-thin text-xs uppercase hidden md:block text-black">
                        <small class="font-medium">Print</small>
                    </span>
                    <span class="w-auto h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-zinc-900 bi bi-printer-fill" viewBox="0 0 16 16">
                            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        </svg>
                    </span>
                </button>
                
                <a rel="noreferrer" target="_blank" href="/assets/site/all-products-catalog.pdf" class="flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded">
                    <span class="font-black text-xs uppercase md:hidden text-black">Download</span>
                    <span class="font-thin text-xs uppercase hidden md:block text-black">
                        <small class="font-medium">View on Browser</small>
                    </span>
                    <span class="w-auto h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-3 w-3 text-zinc-900 bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </span>
                </a>
            </div>
		</div>
		<div class="flex flex-row space-x-2 md:space-x-4 justify-end items-end w-full h-auto px-8 md:px-20 max-w-xl py-8 md:py-16">
            <button on:click={() => ($modalOpen = true)} class="md:rounded-lg flex flex-row md:flex-col justify-between md:justify-center items-center px-8 md:px-0 w-full md:w-16 h-16 md:h-20 bg-black hover:bg-zinc-900 shadow">
                <span class="font-black text-xs uppercase md:hidden text-white">Barcode Scan</span>
                <span class="font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-8 w-8 text-zinc-100 bi bi-qr-code" viewBox="0 0 16 16">
                        <path d="M2 2h2v2H2z"/>
                        <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                        <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                        <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
                        <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
                    </svg>
                </span>
                <span class="font-thin text-xs uppercase hidden md:block text-white">
                    <small>Scan</small>
                </span>
            </button>
		</div>
	</div>
    
	<div class="w-full h-auto overflow-auto">
        <!-- Content -->
        {#if gDriveDocument}
        <div class="w-full h-auto p-1 bg-transparent shadow pb-4 md:pb-8 px-8 md:px-16">
            <iframe
                src={gDriveDocument}
                title="Resume"
                width=100%
                height="1000"
                allow="autoplay"
            />
        </div>
        {:else}
        <div class="w-full h-auto p-1 bg-transparent shadow pb-4 md:pb-8 px-8 md:px-16">
            <img class="w-full h-auto" src={eKatalogProducts} alt="KatalogMusclefirst" />
        </div>
        {/if}
	</div>
    
    <ModalEkatalog 
        title="E-Katalog" 
        modalType={`Qrcode-Ekatalog`} 
    />
</div>

<style>
</style>