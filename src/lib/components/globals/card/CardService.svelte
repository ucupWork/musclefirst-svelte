<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
	export let colorTypeOuter: string;
	export let colorTypeInner: string;
	  
	export let bgUrl: string;
	export let cardText: string;
	export let initService: string;

	function scrollTo(element: string, duration = 500, offset = -90) {
		animatedScroll({ element, duration, offset })
	}
</script>

<button on:click class="col-span-full md:col-span-1 cursor-pointer w-full h-40 md:h-80 text-left overflow-hidden my-4 py-0 text-gray-700 bg-cover md:bg-cover bg-no-repeat bg-right md:bg-top {colorTypeOuter}"
style="background-image: url({bgUrl});">
    <button type="button" on:click={() => scrollTo(`#service-${initService}`)} class="w-full h-full space-y-4 flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center px-6 pb-4 relative {colorTypeInner}">
		<div class="absolute inset-x-0 bottom-0 max-w-xs md:max-w-2xl w-auto h-auto px-4 md:px-8 pr-20 md:pr-0 py-8 md:py-16">
			<h1 class="font-black text-3xl md:text-5xl my-0 whitespace-pre-line text-white text-left leading-none">{@html cardText}</h1>
		</div>
	</button>
</button>