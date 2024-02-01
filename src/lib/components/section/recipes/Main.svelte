<script lang="ts">
	import readableDate from '$utils/readable-date';
    import ImgNotfound from '$images/site/img-notfound.webp';
	export let recipes: any = [];
	export let recipeArticles: any = [];
</script>

<div class="w-full h-auto bg-zinc-100 relative py-8 md:py-0 px-4 md:px-4">
	<div class="px-4 md:px-12 space-y-6 sm:space-y-12">
		<div class="flex justify-between items-center w-full h-auto pt-8">
			<div  class="flex flex-col space-y-4 w-full mb-0">
				<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
					{'Resep Artikel'}
				</h1>
				<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
					{'Kumpulan bentuk artikel dari video yang sudah ada dan di mix dengan produk musclefirst, temukan disini'}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-4 justify-center w-full pb-16">
			{#each recipeArticles as list (list.id)}
			<a rel="noopener noreferrer" href={ list.slug ? `/recipes/article/${list.slug}` : `/` } class="relative col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline w-full h-full shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900">
				<img role="presentation" class="object-cover w-full h-auto dark:bg-gray-500" src={ list.image[0].url ? list.image[0].url : ImgNotfound } alt={ list.title ? list.title : 'No Image Found' }>
				<div class="absolute inset-x-0 bottom-0 w-full h-auto md:h-56 bg-white dark:bg-zinc-900 shadow">
					<div class="flex flex-col justify-start items-center w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900">
						<div class="flex flex-col w-auto h-auto tracking-tighter leading-none text-left mb-4">
							<span class="text-xs text-amber-500 font-medium">{ list.createdAt ? readableDate(list.createdAt) : 'No Date Now' }</span>
							<h2 class="block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight leading-none">
								{ list.title ? list.title : 'No Title' }
							</h2>
						</div>
					</div>
				</div>
			</a>
			{/each}
		</div>
		<div class="flex justify-between items-center w-full h-auto pt-8">
			<div  class="flex flex-col space-y-4 w-full mb-0">
				<h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black">
					{'Resep Kami'}
				</h1>
				<p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md">
					{'Kami daftar dari beberapa resep unggulan yang ada, nikmati rasa yang berbeda'}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-4 gap-4 justify-center w-full pb-4">
			<div class="col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow">
				<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bizzlexo/video/7087882458171051290" data-video-id="7087882458171051290" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" rel="noreferrer nofollow" title="@bizzlexo" href="https://www.tiktok.com/@bizzlexo?refer=embed">@bizzlexo</a> cemilan buat kalian yang lagi diet, cuma 3 bahan aja loh, protein powder <a title="musclefirst" target="_blank" href="https://www.tiktok.com/tag/musclefirst?refer=embed">#musclefirst</a> @musclefirstofficial <a target="_blank" rel="noreferrer nofollow" title="♬ Woman - Doja Cat" href="https://www.tiktok.com/music/Woman-6976278887063898114?refer=embed">♬ Woman - Doja Cat</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
			</div>
			<div class="col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow">
				<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@yessbaby98/video/7082732739329330458" data-video-id="7082732739329330458" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" rel="noreferrer nofollow" title="@yessbaby98" href="https://www.tiktok.com/@yessbaby98?refer=embed">@yessbaby98</a> Tanpa tepung terigu! Empukk dan wangiii👍@musclefirstofficial <a title="browniescoklat" target="_blank" href="https://www.tiktok.com/tag/browniescoklat?refer=embed">#browniescoklat</a> <a title="browniesdiet" target="_blank" href="https://www.tiktok.com/tag/browniesdiet?refer=embed">#browniesdiet</a> <a title="musclefirst" target="_blank" href="https://www.tiktok.com/tag/musclefirst?refer=embed">#musclefirst</a> <a title="wheyprotein" target="_blank" href="https://www.tiktok.com/tag/wheyprotein?refer=embed">#wheyprotein</a> <a title="bodyideal" target="_blank" href="https://www.tiktok.com/tag/bodyideal?refer=embed">#bodyideal</a> <a title="olahraga" target="_blank" href="https://www.tiktok.com/tag/olahraga?refer=embed">#olahraga</a> <a title="healthysnacks" target="_blank" href="https://www.tiktok.com/tag/healthysnacks?refer=embed">#healthysnacks</a>  <a title="ramadankembalikuat" target="_blank" href="https://www.tiktok.com/tag/ramadankembalikuat?refer=embed">#RamadanKembaliKuat</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="fypツ" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%83%84?refer=embed">#fypツ</a> <a title="masukberandafyp" target="_blank" href="https://www.tiktok.com/tag/masukberandafyp?refer=embed">#masukberandafyp</a> <a target="_blank" rel="noreferrer nofollow" title="♬ Love, Maybe - SECRET NUMBER" href="https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed">♬ Love, Maybe - SECRET NUMBER</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
			</div>
			<div class="col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow">
				<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virgierolettaa/video/7080496131666398491" data-video-id="7080496131666398491" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" rel="noreferrer nofollow" title="@virgierolettaa" href="https://www.tiktok.com/@virgierolettaa?refer=embed">@virgierolettaa</a> cocok buat buka puasa nihh! enak, bikinnya gampang, ga ribet &#38; yg terpenting cocok buat yg lagi diet 🥺💖 @musclefirstofficial <a title="musclefirst" target="_blank" href="https://www.tiktok.com/tag/musclefirst?refer=embed">#Musclefirst</a> <a title="kulinerseruramadan" target="_blank" href="https://www.tiktok.com/tag/kulinerseruramadan?refer=embed">#KulinerSeruRamadan</a> <a title="serunyaramadan" target="_blank" href="https://www.tiktok.com/tag/serunyaramadan?refer=embed">#SerunyaRamadan</a> <a title="mochi" target="_blank" href="https://www.tiktok.com/tag/mochi?refer=embed">#mochi</a> <a title="takjil" target="_blank" href="https://www.tiktok.com/tag/takjil?refer=embed">#takjil</a> <a title="menuviral" target="_blank" href="https://www.tiktok.com/tag/menuviral?refer=embed">#menuviral</a><a title="sponsored" target="_blank" href="https://www.tiktok.com/tag/sponsored?refer=embed"></a> <a target="_blank" rel="noreferrer nofollow" title="♬ Love, Maybe - SECRET NUMBER" href="https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed">♬ Love, Maybe - SECRET NUMBER</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
			</div>
			<div class="col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow">
				<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@vishelajovita/video/7076790519023602971" data-video-id="7076790519023602971" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" rel="noreferrer nofollow" title="@vishelajovita" href="https://www.tiktok.com/@vishelajovita?refer=embed">@vishelajovita</a> my favorite flavor of whey is honey banana, high in ptotein and diet friendly😚 <a title="musclefirst" target="_blank" href="https://www.tiktok.com/tag/musclefirst?refer=embed">#musclefirst</a> <a title="lavatoast" target="_blank" href="https://www.tiktok.com/tag/lavatoast?refer=embed">#lavatoast</a> <a target="_blank" rel="noreferrer nofollow" title="♬ The Show - Lenka" href="https://www.tiktok.com/music/The-Show-6782318616630003714?refer=embed">♬ The Show - Lenka</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
			</div>
			<div class="col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow">
			</div>
		</div>
		<div class="grid grid-cols-3 gap-4 justify-center w-full pb-16">
			{#each recipes as list (list.id)}
			<a rel="noopener noreferrer" href={`/recipes/${list.slug}`} class="col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900">
				<div class="p-4 space-y-2 bg-white dark:bg-zinc-900 shadow">
					<div class="grid grid-cols-2 gap-2 w-full h-auto">
						<div class="col-span-1 md:col-span-1 w-full h-auto flex justify-start items-center">
							<div class="bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center">
								<div class="i-ph:timer text-zinc-900 dark:text-white" />
								<span class="text-sm font-medium text-zinc-900 dark:text-white">{list.totalTime} Min</span>
							</div>
						</div>
						<div class="col-span-1 md:col-span-1 w-full h-auto flex justify-end items-center">
							<div class="bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center">
								<div class="i-ph:fork-knife text-zinc-900 dark:text-white" />
								<span class="text-sm font-medium text-zinc-900 dark:text-white">{list.calories} Kcal</span>
							</div>
						</div>
					</div>
				</div>
				<img role="presentation" class="object-cover w-full h-44 dark:bg-gray-500" src={list.image[0].url} alt={list.name}>
				<div class="w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900 shadow">
					<span class="text-xs text-amber-500 font-medium">{readableDate(list.date)}</span>
					<h2 class="block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight">
						{list.name}
					</h2>
					<div class="block w-auto h-auto">
						<div class="flex flex-row space-x-0">
							{#if list.tags}
								{#each list.tags as tag}
								<small
									class="text-zinc-900 dark:text-white cursor-pointer"
									>{tag}</small
								>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			</a>
			{/each}
		</div>
	</div>
</div>