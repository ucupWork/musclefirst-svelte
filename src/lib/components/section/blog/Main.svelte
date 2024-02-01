<script lang="ts">
    import { SearchBlog } from '$globals/input/index';
	import { searchBlog } from '$stores';
    import { ListBlogs } from '$globals/list-group/index';
	import readableDate from '$utils/readable-date';

	export let allArticles = [];
	export let categories = [];
	export let infoArticles = [];
	export let funFactArticles = [];
	export let recentArticles = [];

	let filteredBlogs = [];
	const searchBlogs = () => {	
		return filteredBlogs = allArticles.articles.filter((blog: { title: string; }) => {
			let blogTitle = blog.title.toLowerCase();
			return blogTitle.includes($searchBlog.toLowerCase());
		});
	}
</script>

<div class="flex justify-center w-full h-auto bg-zinc-100 relative">
	<div class="w-auto h-auto bg-zinc-100 relative pt-8 md:pt-8 px-4 md:px-4 max-w-7xl">
		<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 mb-0">
			<div  class="flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full">
				<div class="flex flex-col justify-start items-center space-y-2 w-full relative">
					<SearchBlog val={$searchBlog} on:input={searchBlogs} />
					<ListBlogs {filteredBlogs} {allArticles} />
				</div>
			</div>
		</div>
		
		<div id={`kategori-pilihan`} class="w-full sm:h-auto md:h-auto mt-4">
			<div class="flex flex-col w-full h-auto px-4 md:px-12">
				<div class="flex flex-col w-full h-auto text-xs px-4 py-1 mb-4">
					<small class="font-bold uppercase text-black">Kategori Pilihan</small>
				</div>
				<div class="grid grid-cols-6 gap-2 w-full h-auto">
					{#each categories.categories as list}
					<div class="col-span-2 md:col-span-1 w-full h-auto">
						<a href={`/blog/category/${list.slug}`} rel="norefferer" class="flex text-black justify-center bg-transparent hover:bg-black hover:text-white items-center px-4 py-2 border border-zinc-300 rounded-full">
							<span class="font-bold">{list.name}</span>
						</a>
					</div>
					{/each}
				</div>
			</div>
		</div>

		<div id={`blog-informasi`} class="w-full sm:h-auto md:h-auto">
			<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8">
				<div  class="flex flex-col space-y-4 w-auto mb-8 md:mb-0">
					<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
						{'Blog Informasi'}
					</h1>
					<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
						{'Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out'}
					</p>
				</div>
				<div>
					<a rel="canonical alternate noreferrer" href={`/blog/category/informasi`} class="bg-black rounded-full px-8 py-2">
						<span class="font-bold text-white">Lihat Semua</span>
					</a>
				</div>
			</div>
		</div>

		<div id={`list-blog-informasi`} class="w-full sm:h-auto md:h-auto">
			<div class="w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12">
				<div class="grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0">
					{#each infoArticles.articles as list (list.id)}
					<article class="col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
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

		<div id={`blog-funfact`} class="w-full sm:h-auto md:h-auto">
			<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 md:pt-2">
				<div  class="flex flex-col space-y-4 w-auto mb-8 md:mb-0">
					<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
						{'Blog Funfact'}
					</h1>
					<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
						{'Seputar informasi terbaru dan tips terbaru untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out'}
					</p>
				</div>
				<div>
					<a rel="canonical alternate noreferrer" href={`/blog/category/funfact`} class="bg-black rounded-full px-8 py-2">
						<span class="font-bold text-white">Lihat Semua</span>
					</a>
				</div>
			</div>
		</div>

		<div id={`list-blog-funfact`} class="w-full sm:h-auto md:h-auto">
			<div class="w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12">
				<div class="grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0">
					{#each funFactArticles.articles as list (list.id)}
					<article class="col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
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

		<div id={`blog-terbaru`} class="w-full sm:h-auto md:h-auto">
			<div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8">
				<div  class="flex flex-col space-y-4 w-auto mb-8 md:mb-0">
					<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
						{'Blog Terbaru'}
					</h1>
					<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
						{'Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out'}
					</p>
				</div>
				<div>
					<a rel="canonical alternate noreferrer" href="/blog/semua" class="bg-black rounded-full px-8 py-2">
						<span class="font-bold text-white">Lihat Semua</span>
					</a>
				</div>
			</div>
		</div>

		<div id={`list-blog-terbaru`} class="w-full sm:h-auto md:h-auto">
			<div class="w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12">
				<div class="grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0">
					{#each recentArticles.articles as list (list.id)}
					<article class="col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
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
</div>