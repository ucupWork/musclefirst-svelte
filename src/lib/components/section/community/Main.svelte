<script lang="ts">
	import { page } from '$app/stores';

    import comOne from '$images/community/1080-01.webp';
    import comTwo from '$images/community/1080-02.webp';
    import comThree from '$images/community/1080-03.webp';
	
    import fbOne from '$images/community/fb-01.webp';
    import fbTwo from '$images/community/fb-02.webp';
    import fbThree from '$images/community/fb-03.webp';
    import fbFour from '$images/community/fb-04.webp';
    import fbFive from '$images/community/fb-05.webp';
</script>

<div class="w-full h-auto bg-zinc-100 relative py-8 md:py-0">
	<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto">
		<div class="flex flex-col w-full h-auto px-8 md:px-16 max-w-2xl py-8 md:py-8">
			<h2 class="font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl">
				{'Dicintai Oleh Komunitas Kami'}
			</h2>
			<span class="text-sm font-normal mt-2 text-zinc-900">
				{'Ikuti official @musclefirstofficial untuk dapatkan informasi lainnya dan tag kami'}<br> Tag us @musclefirstofficial and #musclefirst
			</span>
		</div>
		<div class="flex justify-end items-end w-full h-auto px-8 md:px-20 max-w-xl py-8 md:py-16">
			<a href="https://www.facebook.com/www.musclefirst.co.id" target="_blank" class="w-auto h-auto py-4 px-6 bg-black rounded-full">
				<span class="text-white font-bold text-xl">{'Gabung Komunitas'}</span>
			</a>
		</div>
	</div>
	<div class="p-8 px-4 md:px-16">
		<div class="grid grid-cols-3 gap-0 justify-center w-full">
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={fbOne}>
			</a>
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={fbTwo}>
				
			</a>
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={fbFour}>
				
			</a>
		</div>

		<div class="grid grid-cols-3 gap-0 justify-center w-full">
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={comOne}>
			</a>
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={comTwo}>
				
			</a>
			<a rel="noopener noreferrer" href={'/'} class="col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900">
				<img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={comThree}>
				
			</a>
		</div>
	</div>
</div>