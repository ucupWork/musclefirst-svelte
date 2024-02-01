<script lang="ts">
    import LogoImage from '$images/site/logo-white.webp';
	// CDN Set to Digita Ocean Space
	let cdn: boolean = true;
    export let id: string;
</script>

<div id={id} class="w-full h-auto bg-[#0a0908] relative py-8 md:py-16 px-4 md:px-16 shadow-lg">
    <div class="grid w-full grid-cols-1 border border-zinc-900 px-4 md:px-8 mx-auto lg:px-8 lg:py-16 md:grid-cols-2">
		<div class="flex flex-col justify-center md:justify-start items-center md:items-start w-full h-96 py-8 md:py-8 px-4 md:px-8">
			<h1 class="font-blackttnorms tracking-tighter text-4xl md:text-5xl font-bold text-white">
				{'Hubungi Kami'}
			</h1>
			<p class="pt-2 pb-4 text-white text-center md:text-left max-w-md md:max-w-xs">
				{'Jadilah yang pertama mendapatkan update tentang promo kami. Isi formulir ini sekarang!'}
			</p>
			<div class="flex flex-col justify-start items-center md:items-start space-y-4">
				<div class="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="hidden md:block fill-current text-white w-8 md:w-5 h-8 md:h-5 mr-2 sm:mr-6">
						<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
					</svg>
					<div class="flex flex-col items-center md:items-start">
						<span class="block text-white">Ruko Mutiara Taman Palem</span>
						<span class="block text-white">Cengkareng, Jakarta Barat 11730</span>
					</div>
				</div>
				<p class="flex justify-center items-center md:items-start">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="hidden md:block fill-current text-white w-8 md:w-5 h-8 md:h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span class="text-white">info@musclefirst.co.id</span>
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center w-full h-96 shadow shadow-yellow-200 py-8 md:py-4 px-2 md:px-2 relative">
			<div class="flex flex-col justify-center items-center space-y-2 md:space-y-4 w-full h-auto p-0 mb-8 md:mb-16 px-4 md:px-16">
				<div class="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-full h-auto px-4 mb-2">
					<img
						width="647px"
						height="504px"
						src={LogoImage}
						class="w-16 md:w-20 h-auto"
						alt="Muscle First Logo"
					/>
					<div class="flex flex-col justify-center items-center md:items-end leading-none">
						<h1 class="font-black uppercase mt-0 font-bankghotic text-white">Musclefirst</h1>
						<h1 class="font-black uppercase mt-0 font-bankghotic text-white">Member</h1>
					</div>
				</div>
				<div class="w-auto h-auto px-2 md:px-4">
					<div class="flex flex-col w-full h-auto md:-space-y-1 p-0 text-center">
						<h1 class="text-xl md:text-4xl font-black uppercase text-white">Dapatkan <b class="text-amber-500">5%</b> Discount</h1>
						<span class="text-xs md:text-xl font-normal uppercase text-white">Untuk Semua Produk <b>Musclefirst</b></span>
						<span class="text-xs md:text-xl font-normal uppercase text-white">Di <b>Marketplace</b> Kesayanganmu</span>
					</div>
				</div>
			</div>
			<div class="flex justify-start w-full h-auto px-8 md:px-16">
				<a rel="noreferrer" href="https://us17.list-manage.com/contact-form?u=11903fbf931b8f42bb65b0613&form_id=7e2a0942b6bcb9da42e75ef57bcbe63e" target="_blank" class="flex justify-between items-center self-center w-full px-4 md:px-8 py-3 text-sm md:text-md bg-gradient-to-r from-amber-500 to-yellow-900 shadow shadow-yellow-200 font-black text-center text-black">
					<span class="uppercase text-yellow-900">{'Gabung Sekarang'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-black bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
				</a>
			</div>

		</div>
	</div>
</div>