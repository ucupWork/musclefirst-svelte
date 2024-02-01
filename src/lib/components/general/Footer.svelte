<script lang="ts">
	import { fade } from 'svelte/transition';
    import { uneval } from 'devalue';
    import LogoImage from '$images/site/logo-white.webp';
	// CDN Set to Digita Ocean Space
	export let classes: string;
	let cdn: boolean = true;
    
	let email: string = '';
	let error: string = '';
	let success: string = '';

    async function subscribe() {
        const response = await fetch('/api/subscribe', {
            method: 'post',
            body: uneval(email),
            headers: { 'Content-Type': 'application/json' },
        })
        const subscribe = await response.json()

        if (subscribe.error) {
            success = ''
            error = subscribe.error
        }

        if (subscribe.success) {
            error = ''
            success = subscribe.success
        }
    }
</script>

<footer class="w-full h-auto p-4 bg-[#0a0908] shadow sm:px-4 md:px-16 sm:py-8 md:py-8 {classes}">
    <div class="w-full h-auto sm:flex md:hidden justify-start items-start py-8 px-6">
        <a href={'/'} class="flex items-center sm:mb-2 md:mb-0">
            <img
                width="647px"
                height="504px"
                src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp` : LogoImage}
                class="mr-3 w-12 md:w-8 h-auto"
                alt="Muscle First Logo"
            />
        </a>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto justify-center items-start px-5 py-6 sm:mb-8 md:mb-16">
        <div>
            <h2 class="font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase">
                {'Perusahaan'}</h2>
            <ul class="text-gray-300">
                <li class="mb-0">
                    <a rel="noreferrer" href={'/careers'} class="text-sm hover:underline">
                        {'Karir'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/survey'} target="_blank" class="text-amber-500 text-sm hover:underline">
                        {'Survey'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/blog'} class="text-sm hover:underline">
                        {'Blog'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/about'} class="text-sm hover:underline">
                        {'Tentang Kami'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/brand-center'} class="text-sm hover:underline">
                        {'Pusat Brand'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/agent'} class="text-sm hover:underline">
                        <span class="text-amber-500">{'Partnership'}</span>
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/faqs'} class="text-sm hover:underline">
                        {'FAQs'}
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase">
                {'Pusat Sosial'}</h2>
            <ul class="text-gray-300">
                <li class="mb-0">
                    <a rel="noreferrer nofollow external noopener" href="https://shopee.co.id/musclefirstofficialshop" target="_blank" class="text-sm hover:underline">
                        {'Shopee'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer nofollow external noopener" href="https://vt.tiktok.com/ZSd3dbvBJ/" target="_blank" class="text-sm hover:underline">
                        {'Tiktok'}</a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer nofollow external noopener" href="https://www.facebook.com/www.musclefirst.co.id" target="_blank" class="text-sm hover:underline">
                        {'Facebook'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer nofollow external noopener" href="https://www.instagram.com/musclefirstofficial" target="_blank" class="text-sm hover:underline">
                        {'Instagram'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/contact'} class="text-sm hover:underline">
                        {'Kontak Kami'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer nofollow external noopener" href="/affiliate" class="text-sm hover:underline">
                        {'Affiliate Tiktok'}
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase">
                {'Hukum'}</h2>
            <ul class="text-gray-300">
                <li class="mb-0">
                    <a rel="noreferrer" href={'/'} class="text-sm hover:underline">
                        {'Lisensi'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/disclaimer'} class="text-sm hover:underline">
                        {'Disclaimer Kesehatan'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/privacy-policy'} class="text-sm hover:underline">
                        {'Privasi & Kebijakan'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/security-policy'} class="text-sm hover:underline">
                        {'Kebijakan Keamanan'}
                    </a>
                </li>
                <li class="mb-0">
                    <a rel="noreferrer" href={'/terms-condition'} class="text-sm hover:underline">
                        {'Ketentuan & Kondisi'}
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="sm:hidden md:block">
            <h2
                class="font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase"
            >
                {'Berlangganan'}
            </h2>

            <div
                class="flex flex-col w-full h-auto max-w-xs"
            >
                <span
                    class="text-xs font-normal text-gray-100 mb-4"
                >
                {'Daftarkan segera, untuk penawaran dan diskon eksklusif, klik link dibawah!'}
                </span>

                <a rel="noreferrer" href="http://eepurl.com/h8E589" target="_blank" class="flex justify-between items-center self-center w-full px-4 md:px-8 py-3 text-sm md:text-md bg-gradient-to-r from-amber-400 to-yellow-700 shadow shadow-yellow-200 font-black text-center text-black">
					<span class="uppercase text-yellow-900">{'Belanja Sekarang'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 text-black bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
				</a>
            </div>
        </div>
    </div>
    <div class="sm:flex sm:flex-col md:flex-row sm:items-center sm:justify-between px-5">
        <a rel="noreferrer" href={'/'} class="hidden md:flex items-center sm:mb-2 md:mb-0">
            <img
                width="647px"
                height="504px"
                src="/assets/site/logo-white.png"
                class="mr-3 w-16 h-auto"
                alt="Muscle First Logo"
            />
        </a>
        <ul
            class="flex flex-wrap items-center sm:mb-6 md:mb-0 text-sm text-gray-500 dark:text-gray-400"
        >
            <li>
                <a rel="noreferrer" href={'/about'} class="text-xs uppercase mr-4 hover:underline md:mr-6 ">
                    <small>{'Tentang Kami'}</small>
                </a>
            </li>
            <li>
                <a rel="noreferrer" href={'/privacy-policy'} class="text-xs uppercase mr-4 hover:underline md:mr-6">
                    <small>{'Privasi & Kebijakan'}</small>
                </a>
            </li>
            <li>
                <a rel="noreferrer" href={'/'} class="text-xs uppercase mr-4 hover:underline md:mr-6 ">
                    <small>{'Lisensi'}</small>
                </a>
            </li>
            <li>
                <a rel="noreferrer" href={'/contact'} class="text-xs uppercase hover:underline">
                    <small>{'Kontak Kami'}</small>
                </a>
            </li>
        </ul>
    </div>
    <hr class="my-3 border-black md:my-4" />
    <div class="flex flex-col md:flex-row justify-between items-center px-8 md:px-4">
        <div class="mb-6 md:mb-0 mt-4 space-x-6 sm:justify-center sm:mt-0 text-white text-sm">
            <small>
                © 2024
                <a rel="noreferrer" href="." class="text-sm hover:underline text-yellow-600 font-bold">
                    <small class="uppercase">Musclefirst™</small>
                </a>
                . All Rights Reserved.
            </small>
        </div>
        <span class="block text-sm uppercase text-gray-500 max-w-xs md:max-w-2xl sm:text-center dark:text-gray-400 px-16 md:px-0">
            <small>PT Unggulan Bugar Indonesia</small>
        </span>
    </div>
</footer>
