<script lang="ts">
	export let bgUrl: string;
</script>

<button on:click class="col-span-full md:col-span-1 cursor-pointer w-full h-40 md:h-80 text-left rounded-lg overflow-hidden my-4 py-0 text-gray-700 bg-cover bg-no-repeate bg-top bg-zinc-500 shadow-lg shadow-zinc-500/50 hover:shadow-zinc-700/50"
style="background-image: url({bgUrl});">
    <div  class="w-full h-full space-y-4 flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center px-6 pb-4 bg-zinc-600/50 hover:bg-zinc-800/75">
        <h1 class="font-black text-3xl md:text-5xl my-0 whitespace-pre-line text-white text-left leading-none">Gain <br> Muscle</h1>
    </div>
</button>