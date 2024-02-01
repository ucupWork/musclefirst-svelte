<script lang="ts">
	export let careers: any;
</script>

<div class="flex flex-col bg-zinc-100 justify-center items-start w-full h-auto py-8 px-8">
    <div class="grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-black md:py-8 relative">
        <div class="col-span-full w-full h-auto">
            <div  class="w-full flex flex-col py-12 md:py-0 px-4 md:px-0">
                <div  class="w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center">
                    <div  class="w-full flex flex-col md:flex-row items-start justify-center">
                        <div  class="flex flex-col space-y-4 w-full mb-4">
                            <h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-left text-white">
                                {'Pusat Karir'}
                            </h1>
                            <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-left text-white text-md tracking-loose md:max-w-md">
                                {'Ingin menjadi rekan satu tim di musclefirst, mari kita mengisi peran dan lihat apa yang Anda inginkan'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {#each careers as list (list.id)}
        {#if list.stat === true}
        <div class="col-span-full w-full h-auto">
            <div  class="w-full flex overflow-x-scroll snap-mandatory snap-x scroll-smooth scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-bg-transparent px-4 lg:px-8">
                <div  class="flex flex-nowrap w-full h-auto ml-0 md:ml-0 snap-x space-x-4 md:space-x-8">
                    <div class="snap-center w-full h-auto py-4">
                        <div class="w-full h-auto flex justify-between items-center">
                            <div class="flex justify-start items-start w-full h-auto p-4">
                                <h1 class="text-3xl md:text-4xl font-black text-white">{list.name}</h1>
                            </div>
                            <a target="_blank" href={list.linkDocument} class="flex justify-center items-center w-64 h-auto rounded py-2 px-8 bg-amber-500">
                                <span class="font-medium text-white">Kirim Lamaran</span>
                            </a>
                        </div>
                        <div class="flex flex-col justify-between bg-zinc-800 shadow shadow-amber-400/50 w-full h-auto mx-auto rounded-b-xl p-6 md:p-8">
                            <div class="flex flex-row items-start space-x-2 text-white">
                                <span class="font-bold text-amber-500 text-lg">
                                    “
                                </span>
                                <div class="w-full h-auto px-4">
                                    {@html  list.description.html}
                                </div>
                                <span class="font-bold text-amber-500 text-lg">
                                    ”
                                </span>
                            </div>
                            <div class="flex items-center mt-4 px-8">
                                <div class="flex flex-row space-x-4 justify-between">
                                    {#each list.hashtag as tag}
                                    <span class="font-semibold text-yellow-900 text-sm">
                                        #{tag}
                                    </span>
                                    {/each}
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="flex flex-col ml-2 justify-between">
                                    <span class="flex flex-row items-center text-zinc-100 text-xs">
                                        <span class="font-semibold text-amber-500 text-sm mr-1">
                                            HRD
                                        </span> 
                                        of Muscle First
                                        <img src="/assets/site/logo-white.png" alt="LogoWhite" class="ml-2 h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {:else}
        <div class="col-span-full w-full h-auto">
            <div  class="w-full flex overflow-x-scroll snap-mandatory snap-x scroll-smooth scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-bg-transparent px-4 lg:px-8">
                <div  class="flex flex-nowrap w-full h-auto ml-0 md:ml-0 snap-x space-x-4 md:space-x-8">
                    <div class="snap-center w-full h-auto py-4">
                        <div class="flex flex-col justify-between bg-zinc-800 shadow shadow-amber-400/50 w-full h-auto mx-auto rounded-b-xl p-6 md:p-8">
                            <div class="flex flex-row items-start space-x-2 text-white">
                                <span class="font-bold text-amber-500 text-lg">
                                    “
                                </span>
                                <div class="w-full text-center h-auto px-4">
                                    <span class="font-medium">Lamaran Belum Tersedia Untuk Saat Ini, <span class="text-amber-500">Terimakash.</span></span>
                                </div>
                                <span class="font-bold text-amber-500 text-lg">
                                    ”
                                </span>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="flex flex-col ml-2 justify-between">
                                    <span class="flex flex-row items-center text-zinc-100 text-xs">
                                        <span class="font-semibold text-amber-500 text-sm mr-1">
                                            HRD
                                        </span> 
                                        of Muscle First
                                        <img src="/assets/site/logo-white.png" alt="LogoWhite" class="ml-2 h-4 w-4"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
        {/each}
    </div>
</div>