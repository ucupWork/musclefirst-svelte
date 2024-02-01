<script lang="ts">
	import readableDate from '$utils/readable-date';
	
	import '@splidejs/svelte-splide/css';
	export let allArticles = [];
</script>

<div class="flex justify-center w-full h-auto bg-zinc-100 relative">
	<div class="fixed left-4 md:top-32 w-auto h-auto z-20">
		<a href={`/blog`} class="flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50">
			<span class="md:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-3 h-3 fill-current text-white bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
			</span>
			<span class="ml-4 md:ml-4 font-medium text-white text-xs">
				Kembali
			</span>
		</a>
	</div>
	<div class="w-auto h-auto bg-zinc-100 relative pt-8 md:pt-8 px-4 md:px-4 max-w-7xl">
		<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 mb-0">
			<div  class="flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full">
				<div class="w-full h-auto relative">
					<input type="text" class="w-full py-3 pr-10 pl-4 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring" placeholder={'Cari Judul Disini'}>
					
					<span class="absolute inset-y-0 right-0 flex items-center pr-3">
						<svg class="w-5 h-5 text-amber-500 dark:text-white" viewBox="0 0 24 24" fill="none">
							<path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</span>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 md:pt-8">
			<div  class="flex flex-col space-y-4 w-auto mb-8 md:mb-0">
				<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
					{'Semua Blog'}
				</h1>
				<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
					{'Seputar informasi terbaru dan tips terbaru untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out'}
				</p>
			</div>
		</div>
		<div class="w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12">
			<div class="grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0">
				{#each allArticles.articles as list (list.id)}
				<article id={list.id} class="col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
					<img
						src={list.image[0].url} 
						alt={list.imageTitle}
						class="h-56 w-full object-cover"
					/>
				
					<div class="w-full h-full bg-white dark:bg-black p-4 sm:p-6">
					<time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-white">
						{ list.date ? readableDate(list.date) : 'No Date Now' }
					</time>
				
					<a href={ list.slug ? `/blog/${list.slug}` : `/` }>
						<h3 class="leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white">
							{list.title ? list.title : 'No Title'}
						</h3>
					</a>
					</div>
				</article>
				{/each}
			</div>
		</div>
	</div>
</div>